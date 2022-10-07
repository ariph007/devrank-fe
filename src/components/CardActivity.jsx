import React from "react";

const CardActivity = ({
  title,
  created,
  id,
  onDelete,
  onClickCard,
  dataCy,
}) => {
  let dateCreated = new Date(created).toLocaleDateString("id-ID", {
    dateStyle: "long",
  });

  return (
    <div
      data-cy={dataCy}
      key={id}
      className="flex h-[150px] w-[150px] cursor-pointer flex-col justify-between rounded-[12px] bg-txtWhite
    px-[17px] py-[17px] shadow-lg transition hover:shadow-2xl md:h-[234px] md:w-[234px] md:px-[26px] md:py-[25px]"
    >
      <div onClick={() => onClickCard(id)} className="h-full w-full">
        <p
          data-cy="activity-item-title"
          className="text-sm font-bold text-txtBlack md:text-lg"
        >
          {title}
        </p>
      </div>
      <div className="flex justify-between ">
        <p
          data-cy="activity-item-date"
          className="flex cursor-default items-center text-[10px] font-medium text-txtGray md:text-sm"
        >
          {dateCreated}
        </p>
        <div data-cy="activity-item-delete-button" onClick={onDelete}>
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
    </div>
  );
};

export default CardActivity;
