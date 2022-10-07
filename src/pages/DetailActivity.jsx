import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddTodoPopup from "../components/AddTodoPopup";
import Button from "../components/Button";
import Header from "../components/Header";
import TodoListItem from "../components/TodoListItem";
import TodoItemService from "../services/todoItem";
import ActivityService from "../services/activity";
import _ from "underscore";
import SortMenu from "../components/SortMenu";
import SketelonTitle from "../components/SketelonTitle";
import truncateString from "../ultils/truncateString";

const DetailActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [addTodoPopup, setaddTodoPopup] = useState(false);
  const [activity, setActivity] = useState([]);
  const [title, setTitle] = useState(null);

  const loadActivity = async () => {
    const detail = await ActivityService.getDetailActivity(id);
    setTitle(detail.title);
    setActivity(detail.todo_items);
  };

  const handleChangeCheck = async (id, is_active, priority, title) => {
    is_active = !is_active;
    await TodoItemService.updateTodo(id, is_active, priority, title);
    loadActivity();
  };

  const confirmedCreateTodo = async (activity_group_id, priority, title) => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    title = capitalizeFirstLetter(title);
    await TodoItemService.createTodo(activity_group_id, priority, title);
    loadActivity();
  };

  const [isOpenSort, setIsOpenSort] = useState(false);

  const createHandler = () => {
    setaddTodoPopup(!addTodoPopup);
  };

  const [activeSort, setActiveSort] = useState(1);
  const [inputTitle, setInputTitle] = useState(false);

  const editTitle = async () => {
    await ActivityService.updateActivity(id, title);
    setInputTitle(!inputTitle);
  };

  const keyDownHandlerTitle = async (e) => {
    let titleInput = document.getElementById("inputTitle").value;
    if (e.key === "Enter") {
      if (!titleInput) {
        titleInput = "New Activity";
      }
      await ActivityService.updateActivity(id, titleInput);
      setInputTitle(!inputTitle);
      loadActivity();
    }
  };

  const handleChangeTitle = async (e) => {
    setInputTitle(e.target.value);
    let titleInput = document.getElementById("inputTitle").value;
    if (!titleInput) {
      titleInput = "New Activity";
    } else {
      await ActivityService.updateActivity(id, titleInput);
    }
    loadActivity();
  };

  const menuSortHandler = (id) => {
    setActiveSort(id);
    if (id === 1) {
      const sorted = _.sortBy(activity, "id").reverse();
      setActivity(sorted);
      setIsOpenSort(!isOpenSort);
    } else if (id === 2) {
      const sorted = _.sortBy(activity, "id");
      setActivity(sorted);
      setIsOpenSort(!isOpenSort);
    } else if (id === 3) {
      const sorted = _.sortBy(activity, "title");
      setActivity(sorted);
      setIsOpenSort(!isOpenSort);
    } else if (id === 4) {
      const sorted = _.sortBy(activity, "title").reverse();
      setActivity(sorted);
      setIsOpenSort(!isOpenSort);
    } else {
      const sorted = _.sortBy(activity, "is_active").reverse();
      setActivity(sorted);
      setIsOpenSort(!isOpenSort);
    }
  };

  const backHandler = () => {
    navigate("/");
  };

  const sortMenuHandler = () => {
    setIsOpenSort(!isOpenSort);
  };

  useEffect(() => {
    loadActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <main className="h-full px-[8%] pt-[43px] md:px-[13%] xl:px-[8%]">
        {addTodoPopup && (
          <AddTodoPopup
            activity_group_id={id}
            todoModal={addTodoPopup}
            onConfirmed={confirmedCreateTodo}
            // AddTodoPopup={addTodoPopup}
            setTodoModal={setaddTodoPopup}
          />
        )}
        <section>
          <section>
            <div className="mb-[54px] flex justify-between">
              <div className="flex items-center justify-center">
                <img
                  data-cy="todo-back-button"
                  onClick={backHandler}
                  width={32}
                  height={32}
                  className="mr-[19px] object-contain hover:cursor-pointer"
                  src={require("../assets/todo-back-button.png")}
                  alt="backIcon"
                />
                {!inputTitle ? (
                  <div
                    data-cy="todo-title"
                    onClick={editTitle}
                    className="max-w-full text-base font-bold text-txtBlack md:text-4xl"
                  >
                    {!title ? <SketelonTitle /> : truncateString(title, 22)}
                  </div>
                ) : (
                  <input
                    id="inputTitle"
                    onChange={(e) => handleChangeTitle(e)}
                    onKeyDown={keyDownHandlerTitle}
                    className="h-full w-full border-b-2 border-txtBlack bg-transparent text-4xl  
                    font-bold text-txtBlack focus:outline-none"
                    type="text"
                  />
                )}

                <img
                  data-cy="todo-title-edit-button"
                  onClick={editTitle}
                  width={24}
                  height={24}
                  className="mr-[19px] ml-[24px] object-contain hover:cursor-pointer"
                  src={require("../assets/todo-title-edit-button.png")}
                  alt="todo-title-edit-button"
                />
              </div>
              <div className="relative flex items-center justify-center">
                <img
                  data-cy="todo-sort-button"
                  onClick={sortMenuHandler}
                  width={54}
                  height={54}
                  className="mr-[19px] object-contain hover:cursor-pointer"
                  src={require("../assets/todo-sort-button.png")}
                  alt="todo-sort-button"
                />
                {isOpenSort && (
                  <SortMenu
                    menuSortHandler={menuSortHandler}
                    activeSort={activeSort}
                  />
                )}
                <Button
                  dataCy="todo-add-button"
                  type="tambah"
                  onClick={createHandler}
                  loadingComponent={loading}
                />
              </div>
            </div>
          </section>
          {activity.length <= 0 && (
            <div className=" mb-24">
              <img
                data-cy="todo-empty-state"
                onClick={createHandler}
                width={541}
                height={413}
                className="m-auto flex-1 object-contain"
                src={require("../assets/todo-empty-state.png")}
                alt="emptyActivity"
              />
            </div>
          )}
          <section>
            {activity?.map((item) => (
              <TodoListItem
                dataCy="todo-item"
                refresh={loadActivity}
                key={item.id}
                item={item}
                handleChangeCheck={handleChangeCheck}
              />
            ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default DetailActivity;
