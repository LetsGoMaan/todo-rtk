import React, {memo, useEffect} from "react"
import {TodolistDomainType} from "features/TodolistsList/todolists/todolists.reducer"
import {tasksThunks} from "features/TodolistsList/tasks/tasks.reducer";
import {useActions} from "common/hooks";
import {AddItemForm} from "common/components"
import {TaskType} from "../../tasks/task.api";
import {FilterTasksButtons} from "./FilterTasksButtons/FilterTasksButtons";
import {Tasks} from "./Tasks/Tasks";
import {TodolistTitle} from "./TodolistTitle/TodolistTitle";

type Props = {
	todolist: TodolistDomainType
	tasks: TaskType[]
}

export const Todolist = memo( ({todolist, tasks}: Props) => {

	const {fetchTasks,addTask} = useActions(tasksThunks)



	useEffect(() => {
		fetchTasks(todolist.id)
	}, [])

	const addTaskCallBack = ((title: string) => {
		return addTask({title,todolistId: todolist.id}).unwrap()
	})

	return <div>
		<TodolistTitle todolist={todolist}/>
		<AddItemForm addItem={addTaskCallBack} disabled={todolist.entityStatus === 'loading'}/>
		<Tasks todolist={todolist} tasks={tasks}/>
		<div style={{paddingTop: '10px'}}>
				<FilterTasksButtons todolist={todolist}/>
		</div>
	</div>
})


