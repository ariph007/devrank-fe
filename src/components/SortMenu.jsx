import React from "react";
import sort from "../ultills/menuSort";

const SortMenu = ({ menuSortHandler, activeSort }) => {
  return (
    <div
      className="absolute top-[60px] min-h-[260px] min-w-[235px] overflow-hidden rounded-lg border-[1px] 
                border-[#E5E5E5] bg-txtWhite"
    >
      {sort?.map((item) => (
        <div
          onClick={() => menuSortHandler(item.id)}
          className="flex h-[52px] w-[235px] cursor-pointer  items-center justify-between 
                      px-[21px] hover:bg-blue-100"
          key={item.id}
        >
          <div className="flex">
            <img
              data-cy="todo-sort-button"
              width={18}
              height={18}
              className="mr-[19px] object-contain hover:cursor-pointer"
              src={item.img}
              alt={item.title}
            />
            <p className="text-base font-normal">{item.title}</p>
          </div>
          {item.id === activeSort && (
            <img
              data-cy="tabler_check"
              width={18}
              height={18}
              className="object-contain"
              src={require("../assets/tabler_check.png")}
              alt="check"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SortMenu;
