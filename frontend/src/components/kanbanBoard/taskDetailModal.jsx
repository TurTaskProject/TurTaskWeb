import React from "react";
import { FaTasks, FaRegListAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TbChecklist } from "react-icons/tb";

function TaskDetailModal() {

  return (
    <dialog id="task_detail_modal" className="modal">
      <div className="modal-box w-4/5 max-w-3xl">
        {/* Title */}
        <div className="flex flex-col py-2">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg">
              <span className="flex gap-2">{<FaTasks className="my-2" />}Title</span>
            </h3>
            <p className="text-xs">Todo List</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-col py-2 pb-4">
          <div className="flex flex-row space-x-5">
            <div className="dropdown">
              <label tabIndex={0} className="btn-md border-2 rounded-xl m-1 py-1">
                + Add Tags
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>
                    <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                    Item 2
                  </a>
                </li>
                <li>
                  <a>
                    <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                    Item 2
                  </a>
                </li>
                <li>
                  <a>
                    <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                    Item 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-nowrap overflow-x-auto"></div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">
            <span className="flex gap-2">
              <FaRegListAlt className="my-1" />
              Description
            </span>
          </h2>
          <textarea className="textarea w-full" disabled></textarea>
        </div>

        {/* Difficulty, Challenge and Importance */}
        <div className="flex flex-row space-x-3 my-4">
          <div className="flex-1 card shadow border-2 p-2">
            <input type="range" id="difficultySelector" min={0} max="100" value="50" className="range" step="25" />
            <div className="w-full flex justify-between text-xs px-2 space-x-2">
              <span>Easy</span>
              <span>Normal</span>
              <span>Hard</span>
              <span>Very Hard</span>
              <span>Devil</span>
            </div>
          </div>
          <div className="card shadow border-2 p-2">
            <div className="form-control">
              <label className="label cursor-pointer space-x-2">
                <span className="label-text">Challenge</span>
                <input type="checkbox" checked="checked" className="checkbox" />
              </label>
            </div>
          </div>
          <div className="card shadow border-2 p-2">
            <div className="form-control">
              <label className="label cursor-pointer space-x-2">
                <span className="label-text">Important</span>
                <input type="checkbox" checked="checked" className="checkbox" />
              </label>
            </div>
          </div>
        </div>

        {/* Subtask */}
        <div className="flex flex-col pt-2">
          <h2 className="font-bold">
            <span className="flex gap-1">
              <TbChecklist className="my-1" />
              Subtasks
            </span>
          </h2>
          <div className="flex space-x-3 pt-2">
            <input type="text" placeholder="subtask topic" className="input input-bordered flex-1 w-full" />
            <button className="btn">
              <FaPlus />
              Add Subtask
            </button>
          </div>
        </div>

        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
        </form>
      </div>
    </dialog>
  );
}

export default TaskDetailModal;
