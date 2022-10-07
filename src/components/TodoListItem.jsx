import React, { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";

const TodoListItem = ({ item, refresh, handleChangeCheck }) => {
  const [confirmationPopup, setConfirmationPopup] = useState(false);

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
      className="mb-[10px] flex h-[80px] min-w-[100px] cursor-pointer items-center
     justify-between rounded-xl bg-txtWhite px-[28px] shadow-lg hover:bg-txtWhite/30"
    >
      <ConfirmationPopup
        open={confirmationPopup}
        setOpen={setConfirmationPopup}
        todo={item}
        page="detail"
        refresh={refresh}
      />
      <div className="flex items-center justify-center">
        <input
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
          className={`ml-[22px] mr-[16px] h-[9px] w-[9px]  rounded-full ${bgBullet(
            item.priority
          )}`}
        ></div>
        <p
          className={`text-lg font-medium ${!item.is_active && "line-through"}`}
        >
          {item.title}
        </p>
      </div>
      <div onClick={deleteHandler} data-cy="activity-item-delete-button">
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
