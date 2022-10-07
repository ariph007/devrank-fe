import React from "react";

const Header = () => {
  return (
    <header
      data-cy="header-background"
      className="flex h-[105px] items-center bg-primary px-[13%] xl:px-[8%]"
    >
      <p
        data-cy="header-title"
        className="w-full pt-1 text-2xl font-bold text-txtWhite"
      >
        TO DO LIST APP
      </p>
    </header>
  );
};

export default Header;
