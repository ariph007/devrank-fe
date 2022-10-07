import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AlertActivity = ({ alertComponent, setAlertComponent }) => {
  function closeModal() {
    setAlertComponent(false);
  }

  return (
    <Transition appear show={alertComponent} as={Fragment}>
      <Dialog
        data-cy="=modal-information"
        as="div"
        className="relative z-10"
        onClose={closeModal}
      >
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
                className=" h-[58px] w-[490px] max-w-md transform overflow-hidden
              rounded-2xl bg-white px-[40px] text-left align-middle shadow-xl transition-all 2xl:px-[62px]"
              >
                <div
                  data-cy="modal-information"
                  className=" flex h-full w-full items-center "
                >
                  <img
                    data-cy="modal-information-icon"
                    width={24}
                    height={24}
                    className="object-contain"
                    src={require("../assets/modal-information-icon.png")}
                    alt="information icon"
                  />
                  <p
                    data-cy="modal-information-title"
                    className="pl-[10px] text-center text-lg font-medium text-txtBlack "
                  >
                    Activity berhasil dihapus
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AlertActivity;
