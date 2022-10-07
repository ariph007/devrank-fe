import React from "react";

const Button = ({ type, opacity, onClick, loadingComponent, dataCy }) => {
  if (type === "tambah") {
    const bgOpacity = `bg-primary/${opacity} cursor-default`;
    return loadingComponent ? (
      <button
        disabled
        data-cy={dataCy}
        className={`bg- flex h-9 w-24 items-center justify-center rounded-[45px]
        ${bgOpacity} ${
          !opacity && "cursor-wait bg-primary hover:bg-primary/80"
        } transition  md:h-14 md:w-40`}
      >
        <svg
          role="status"
          className="mr-3 inline h-6 w-6 animate-spin text-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-xs font-semibold text-txtWhite md:text-lg">Tambah</p>
      </button>
    ) : (
      <button
        data-cy={dataCy}
        className={`bg- flex h-9 w-24 items-center justify-center rounded-[45px]
        ${bgOpacity} ${
          !opacity && "cursor-pointer bg-primary hover:bg-primary/80"
        } transition  md:h-14 md:w-40`}
        onClick={onClick}
      >
        <span>
          <img
            width={24}
            height={24}
            className="object-contain"
            src={require("../assets/tabler-plus.png")}
            alt="tambahIcon"
          />
        </span>
        <p className="text-xs font-semibold text-txtWhite md:text-lg">Tambah</p>
      </button>
    );
  } else if (type === "simpan") {
    return (
      <button
        data-cy={dataCy}
        className="flex h-9 w-24 cursor-pointer items-center justify-center
      rounded-[45px] bg-primary transition hover:bg-primary/80  md:h-14 md:w-40"
        onClick={onClick}
      >
        <p className="text-xs font-semibold text-txtWhite md:text-lg">Simpan</p>
      </button>
    );
  } else if (type === "batal") {
    return (
      <button
        data-cy={dataCy}
        className="flex h-9 w-24 cursor-pointer items-center justify-center
      rounded-[45px] bg-txtGray transition hover:bg-txtGray/80  md:h-14 md:w-40"
        onClick={onClick}
      >
        <p className="text-xs font-semibold text-txtWhite md:text-lg">Batal</p>
      </button>
    );
  } else if (type === "simpanDisable") {
    return (
      <button
        data-cy={dataCy}
        disabled
        className={`bg- flex h-9 w-24 cursor-not-allowed items-center
    justify-center rounded-[45px] bg-primary/60 transition
     md:h-14 md:w-40`}
      >
        <p className="text-xs font-semibold text-txtWhite md:text-lg">Simpan</p>
      </button>
    );
  } else {
    return loadingComponent ? (
      <button
        data-cy={dataCy}
        disabled
        className="flex h-9 w-24 cursor-not-allowed items-center justify-center
  rounded-[45px] bg-danger transition hover:bg-danger/80  md:h-14 md:w-40"
      >
        <svg
          role="status"
          className="mr-3 inline h-4 w-4 animate-spin text-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-xs font-semibold text-txtWhite md:text-lg">
          Loading...
        </p>
      </button>
    ) : (
      <button
        data-cy={dataCy}
        className="flex h-9 w-24 cursor-pointer items-center justify-center
rounded-[45px] bg-danger transition hover:bg-danger/80  md:h-14 md:w-40"
        onClick={onClick}
      >
        <p className="text-xs font-semibold text-txtWhite md:text-lg">Hapus</p>
      </button>
    );
  }
};

export default Button;
