import React from "react";

const Header = () => {
  return (
    <header
      className="flex h-[105px] items-center bg-primary px-[13%] xl:px-[8%]"
      data-cy="header-background"
    >
      <p
        className="w-full pt-1 text-2xl font-bold text-txtWhite"
        data-cy="header-title"
      >
        TO DO LIST APP
      </p>
    </header>
  );
};

export default Header;
