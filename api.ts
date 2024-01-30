import { interfaceTasks } from "./Types/tasks";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async() : Promise<interfaceTasks[]> =>{
    const res  = await fetch(`${baseUrl}/tasks`,{cache:'no-cache'});
    const todos = await res.json();
    console.log(todos);
    return todos;
}

export const addTodo = async(todo : interfaceTasks)  : Promise<interfaceTasks>=>{
    const res = await fetch(`${baseUrl}/tasks`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    });
    const newTodo = await res.json();
    return newTodo;
}

export const EditTodo = async(todo : interfaceTasks)  : Promise<interfaceTasks>=>{
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    });
    const updateTodo = await res.json();
    return updateTodo;
}

export const DeleteTodo = async(id: string)  : Promise<void>=>{
    await fetch(`${baseUrl}/tasks/${id}`,{
        method: 'DELETE'
    });
}