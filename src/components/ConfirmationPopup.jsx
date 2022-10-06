import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import ActivityService from "../services/activity";

const ConfirmationPopup = ({
  open,
  setOpen,
  selectedActivity,
  refresh,
  setConfirmationPopup,
}) => {
  function closeModal() {
    setOpen(false);
  }

  const [loading, setLoading] = useState(false);
  const onDeleteActivity = async (id) => {
    setLoading(true);
    console.log(loading);
    await ActivityService.deleteActivity(id);
    setLoading(false);
    setOpen(false);
    setConfirmationPopup(true);
    refresh();
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="h-[355px] w-[490px] max-w-md transform overflow-hidden 
              rounded-2xl bg-white px-[40px] text-left align-middle shadow-xl transition-all 2xl:px-[62px]"
              >
                <div
                  data-cy="modal-delete"
                  className="mt-2 flex flex-col items-center justify-center"
                >
                  <img
                    data-cy="modal-delete-icon"
                    width={84}
                    height={84}
                    className="mt-[40px] mb-[34px] object-contain"
                    src={require("../assets/modal-delete-icon.png")}
                    alt="modal delete"
                  />
                  <p
                    data-cy="modal-delete-title"
                    className="text-center text-lg font-medium text-txtBlack "
                  >
                    Apakah anda yakin ingin menghapus ?
                  </p>
                  <p className="text-lg font-bold"> "{selectedActivity[1]}"?</p>
                </div>

                <div className="mt-4 flex justify-between gap-x-5">
                  <Button type="batal" onClick={closeModal} />
                  <Button
                    type="hapus"
                    loadingComponent={loading}
                    onClick={() => onDeleteActivity(selectedActivity[0])}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConfirmationPopup;
