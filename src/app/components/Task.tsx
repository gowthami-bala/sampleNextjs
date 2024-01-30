'use client'
import { interfaceTasks } from "../../../Types/tasks"
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FormEventHandler, useState } from "react";
import Model from "./Model";
import { DeleteTodo, EditTodo } from "../../../api";
interface TaskProps{
    task:interfaceTasks
}

const Task:React.FC<TaskProps> = ({task}) => {
    const [formEdit,setFormEdit] = useState(false)
    const [formDelete,setFormDelete] = useState(false)
    const [editId,setEditID] = useState(task.id)
    const [editName,setEditName] = useState(task.Name)
    const [editEmail,setEditEmail] = useState(task.Email)
    console.log(task,"data")
    
    const handleSubmitEdit  : FormEventHandler<HTMLFormElement> = async (e) => {
        // e.preventDefault()
        await EditTodo({
          id: editId,
          Name: editName,
          Email: editEmail,
        })
        setEditID("")
        setEditName("")
        setEditEmail("")
        window.location.reload();
      }

      const handleDelete = async (id:string) =>{
        await DeleteTodo(id)
      }
  return (
    <>
     <tr key={task.id} >
            <td>{task.id}</td>
            <td>{task.Name}</td>
            <td>{task.Email}</td>
            <td className="flex gap-5">
            <FiEdit onClick={()=>setFormEdit(true)} cursor="pointer" size={20} className="text-blue-500"/>
            <Model modalOpen={formEdit} >
        <form onSubmit={handleSubmitEdit}>
          <div>
            <label >ID</label><br />
            <input value={editId} onChange={e => setEditID(e.target.value)} type="text" placeholder="ID" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label>Name</label><br />
            <input value={editName} onChange={e => setEditName(e.target.value)} type="text" placeholder="NAME" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label>Email</label><br />
            <input value={editEmail} onChange={e => setEditEmail(e.target.value)} type="text" placeholder="EMAIL" className="input input-bordered w-full max-w-xs" />
          </div> 
          <br />
          <button className="btn">submit</button>
        </form>
      </Model>
            <label  onClick={()=>handleDelete(task.id)}>  <RiDeleteBin5Line onClick={ ()=>setFormDelete(true)} cursor="pointer" size={20} className="text-red-500" /></label> 
            </td>
            </tr>
    </>
   
            
  )
}

export default Task