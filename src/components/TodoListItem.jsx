import React, { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";
import EditTodoPopup from "./EditPopUp";

const TodoListItem = ({ item, refresh, handleChangeCheck, dataCy }) => {
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const editHandler = () => {
    setEditPopup(!editPopup);
  };

  const bgBullet = (priority) => {
    if (priority === "high") {
      return " bg-[#F8A541]";
    } else if (priority === "normal") {
      return " bg-[#00A790]";
    } else if (priority === "low") {
      return " bg-[#428BC1]";
    } else if (priority === "very-low") {
      return " bg-[#8942C1]";
    } else {
      return " bg-[#ED4C5C]";
    }
  };
  const deleteHandler = () => {
    setConfirmationPopup(true);
  };

  return (
    <div
      data-cy={dataCy}
      className="relative mb-[10px] flex h-[80px] min-w-[100px] cursor-pointer items-center
      rounded-xl bg-txtWhite px-[28px] shadow-lg hover:bg-txtWhite/30"
    >
      {editPopup && (
        <EditTodoPopup
          refresh={refresh}
          type="edit"
          todo={item}
          setEditPopup={setEditPopup}
          editPopup={editPopup}
        />
      )}
      <ConfirmationPopup
        open={confirmationPopup}
        setOpen={setConfirmationPopup}
        todo={item}
        page="detail"
        refresh={refresh}
      />
      <div className=" flex items-center justify-center">
        <div className="flex w-full min-w-full items-center justify-start ">
          <input
            data-cy="todo-item-checkbox"
            className="h-[20px] w-[20px]"
            defaultChecked={!item.is_active}
            onChange={() =>
              handleChangeCheck(
                item.id,
                item.is_active,
                item.priority,
                item.title
              )
            }
            type="checkbox"
          />
          <div
            data-cy="todo-item-priority-indicator"
            className={`ml-[22px] mr-[16px] h-[9px] w-[9px]  rounded-full ${bgBullet(
              item.priority
            )}`}
          ></div>
          <p
            data-cy="todo-item-title"
            className={`text-lg font-medium ${
              !item.is_active && "line-through"
            }`}
          >
            {item.title}
          </p>
          <img
            data-cy="todo-item-edit-button"
            onClick={editHandler}
            width={20}
            height={20}
            className="ml-[16px] object-contain hover:cursor-pointer"
            src={require("../assets/todo-title-edit-button.png")}
            alt="todo-title-edit-button"
          />
        </div>
      </div>
      <div
        data-cy="todo-item-delete-button"
        className="absolute right-[24px]"
        onClick={deleteHandler}
      >
        <svg
          className="h-6 w-6 text-txtGray hover:cursor-pointer hover:text-txtGray/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TodoListItem;
