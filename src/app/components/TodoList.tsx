'use client'
import { useState } from "react";
import { interfaceTasks } from "../../../Types/tasks"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Model from "./Model";
import Task from "./Task";

interface TodoListProps{
  tasks: interfaceTasks[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
 


  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
         <th>Email</th>
         <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => <Task key={task.id} task={task}/>)}
      </tbody>
    </table>
  </div>
  )
}

export default TodoList