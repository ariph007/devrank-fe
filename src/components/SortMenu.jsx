import React from "react";
import sort from "../ultils/menuSort";

const SortMenu = ({ menuSortHandler, activeSort }) => {
  const dataCyHandler = (id) => {
    if (id === 1) {
      return "sort-latest";
    } else if (id === 2) {
      return "sort-oldest";
    } else if (id === 3) {
      return "sort-az";
    } else if (id === 4) {
      return "sort-za";
    } else {
      return "sort-unfinished";
    }
  };

  return (
    <div
      className="absolute top-[60px] z-50 min-h-[260px] min-w-[235px] overflow-hidden rounded-lg 
                border-[1px] border-[#E5E5E5] bg-txtWhite"
    >
      {sort?.map((item) => (
        <div
          data-cy={dataCyHandler(item.id)}
          onClick={() => menuSortHandler(item.id)}
          className="flex h-[52px] w-[235px] cursor-pointer  items-center justify-between 
                      px-[21px] hover:bg-blue-100"
          key={item.id}
        >
          <div data-cy="sort-selection" className="flex">
            <img
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
