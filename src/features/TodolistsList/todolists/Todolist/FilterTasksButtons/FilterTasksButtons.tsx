import React from "react";
import {Button} from "@mui/material";
import {useActions} from "../../../../../common/hooks";
import {FilterValuesType, TodolistDomainType, todolistsActions} from "../../todolists.reducer";


type Props = {
    todolist: TodolistDomainType
}


export const FilterTasksButtons = ({todolist}: Props) => {

    const {changeTodolistFilter} = useActions(todolistsActions)
    const changeFilterHandler = (filter: FilterValuesType) => {
        changeTodolistFilter({filter: filter, id: todolist.id})
    }

    return (
        <>
            <Button variant={todolist.filter === "all" ? "outlined" : "text"}
                    onClick={() => changeFilterHandler("all")}
                    color={"inherit"}>All
            </Button>
            <Button variant={todolist.filter === "active" ? "outlined" : "text"}
                    onClick={() => changeFilterHandler("active")}
                    color={"primary"}>Active
            </Button>
            <Button variant={todolist.filter === "completed" ? "outlined" : "text"}
                    onClick={() => changeFilterHandler("completed")}
                    color={"secondary"}>Completed
            </Button>
        </>
    );
};

