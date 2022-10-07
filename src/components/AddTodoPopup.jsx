import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import Button from "./Button";

const AddTodoPopup = ({
  setTodoModal,
  todoModal,
  onConfirmed,
  activity_group_id,
}) => {
  let [isOpen, setIsOpen] = useState(true);
  const [titleTodo, setTitleTodo] = useState("");
  const priorities = [
    { id: 1, name: "Very High", unavailable: false },
    { id: 2, name: "High", unavailable: false },
    { id: 3, name: "Medium", unavailable: false },
    { id: 4, name: "Low", unavailable: true },
    { id: 5, name: "Very Low", unavailable: false },
  ];

  const dataCyHandler = (id) => {
    if (id === 2) {
      return "modal-add-priority-high";
    } else if (id === 3) {
      return "modal-add-priority-medium";
    } else if (id === 4) {
      return "modal-add-priority-low";
    } else if (id === 5) {
      return "modal-add-priority-very-low";
    } else {
      return "modal-add-priority-very-high";
    }
  };

  const bgBullet = (priority) => {
    if (priority === 2) {
      return " bg-[#F8A541]";
    } else if (priority === 3) {
      return " bg-[#00A790]";
    } else if (priority === 4) {
      return " bg-[#428BC1]";
    } else if (priority === 5) {
      return " bg-[#8942C1]";
    } else {
      return " bg-[#ED4C5C]";
    }
  };

  const [selected, setSelected] = useState([]);

  function saveTodo() {
    let prior = null;
    if (selected.id === 1) {
      prior = "very-high";
    } else if (selected.id === 2) {
      prior = "high";
    } else if (selected.id === 3) {
      prior = "normal";
    } else if (selected.id === 4) {
      prior = "low";
    } else if (selected.id === 5) {
      prior = "very-low ";
    } else {
      prior = "very-high";
    }
    const title = document.getElementById("titleName").value;
    setIsOpen(false);
    setTodoModal(!todoModal);
    onConfirmed(activity_group_id, prior, title);
  }

  function closeModal() {
    setTodoModal(!todoModal);
  }

  useEffect(() => {}, [selected]);

  return (
    <div data-cy="modal-add" className="relative">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={saveTodo}>
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
                <Dialog.Panel className="h-[443px] w-[830px] transform  overflow-visible rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="m-0 flex w-full items-center justify-between border-b-[1px] border-[#E5E5E5]">
                    <Dialog.Title
                      as="h3"
                      className="mt-[24px] mb-[19px] px-6 text-lg font-semibold leading-6 text-txtBlack"
                    >
                      <p data-cy="modal-add-title">Tambah List Item</p>
                    </Dialog.Title>
                    <div className="mr-[41px]">
                      <img
                        data-cy="modal-add-close-button"
                        onClick={closeModal}
                        width={24}
                        height={24}
                        className="mt-[40px] mb-[34px] object-contain hover:cursor-pointer"
                        src={require("../assets/modal-add-close-button.png")}
                        alt="modal delete"
                      />
                    </div>
                  </div>
                  <div className="mt-[38px] px-6">
                    <label
                      data-cy="modal-add-name-title"
                      htmlFor="titleName"
                      className="mt-[24px] mb-[9px] p-0 text-left text-xs font-semibold leading-6 text-txtBlack"
                    >
                      NAMA LIST ITEM
                    </label>
                    <input
                      data-cy="modal-add-name-input"
                      type="text"
                      id="titleName"
                      className="mb-[26px] block h-[52px] w-full rounded-lg border border-[#E5E5E5] bg-txtWhite 
                      p-2.5 text-base font-normal  text-txtBlack focus:border-blue-500 focus:outline-blue-500
                       focus:ring-blue-500"
                      placeholder="Tambahkan nama list item"
                      onChange={(e) => setTitleTodo(e.target.value)}
                      required
                    />
                    <label
                      data-cy="modal-add-priority-title"
                      htmlFor="priority"
                      className="mb-[26px]  p-0 text-left text-xs font-semibold leading-6 text-txtBlack"
                    >
                      PRIORITY
                    </label>

                    <Listbox value={selected} onChange={setSelected}>
                      <div className="mt-1 max-w-[205px] ">
                        <Listbox.Button
                          data-cy="modal-add-priority-dropdown"
                          className="relative h-[52px] w-full cursor-default rounded-lg border-[1px]  
                        border-[#E5E5E5] bg-white pl-3 pr-10 text-left focus:outline-none 
                        focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white 
                        focus-visible:ring-opacity-75 focus-visible:ring-offset-2 
                        focus-visible:ring-offset-orange-300 sm:text-sm"
                        >
                          <span className="flex items-center truncate ">
                            <div
                              data-cy="modal-add-priority-item"
                              className="mr-[19px] h-[9px] w-[9px] rounded-full"
                            />
                            {selected.length === 0
                              ? "Pilih Priority"
                              : selected.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <img
                              width={24}
                              height={24}
                              className="mt-[40px] mb-[34px] object-contain"
                              src={require("../assets/tabler_chevron-down.png")}
                              alt="modal delete"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options
                            className="z-100 absolute mt-1  w-[205px] overflow-auto rounded-md bg-white py-1 
                          text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            {priorities.map((priority, priorityIdx) => (
                              <Listbox.Option
                                data-cy={dataCyHandler(priority.id)}
                                key={priorityIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none overflow-auto py-2 px-[17px] ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={priority}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={`mr-[19px] h-[9px] w-[9px] rounded-full ${bgBullet(
                                      priority.id
                                    )}`}
                                  />
                                  <div className="flex w-full justify-between">
                                    <p className="text-left">{priority.name}</p>
                                    {selected.id === priority.id && (
                                      <img
                                        width={18}
                                        height={18}
                                        className="object-contain"
                                        src={require("../assets/tabler_check.png")}
                                        alt="modal delete"
                                      />
                                    )}
                                  </div>
                                </div>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>

                  <div className="mt-[23px]  w-full border-t-[1px] border-[#E5E5E5] px-6 pb-[18px]">
                    <div className="mb-[16px] flex justify-end pt-[18px]">
                      {!titleTodo ? (
                        <Button
                          dataCy="modal-add-save-button"
                          type="simpanDisable"
                        />
                      ) : (
                        <Button
                          dataCy="modal-add-save-button"
                          type="simpan"
                          onClick={saveTodo}
                        />
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddTodoPopup;
