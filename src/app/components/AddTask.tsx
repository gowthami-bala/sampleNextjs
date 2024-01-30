'use client'
import { BsPlus } from "react-icons/bs";
import Model from "./Model";
import { FormEventHandler, useState } from "react";
import { addTodo } from "../../../api";
// import { useRouter } from "next/router";

const AddTask = () => {
  // const router = useRouter();
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [Id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // e.preventDefault()
    await addTodo({
      id: Id,
      Name: name,
      Email: email,
    })
    setName("")
    setEmail("")
    // router.refresh();
  }

  return (
    <div>
      <button onClick={() => setModelOpen(true)} className="btn btn-primary w-full">Add Task
        <BsPlus className="ml-2" size={23} /></button>
      <Model modalOpen={modelOpen} >
        <form onSubmit={handleSubmit}>
          <div>
            <label >ID</label><br />
            <input value={Id} onChange={e => setId(e.target.value)} type="text" placeholder="ID" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label>Name</label><br />
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="NAME" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label>Email</label><br />
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="EMAIL" className="input input-bordered w-full max-w-xs" />
          </div><br />
          <button className="btn">submit</button>
        </form>
      </Model>
    </div>
  )
}

export default AddTask