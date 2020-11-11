import React from "react"
import { TaskContent } from './styles'

interface TaskProps {
    onRemove(id:number): void
    text: string
    isDone: boolean
    id: number
    isEdit: boolean
}

export const Task = ({
    text,
    isDone,
    id,
    isEdit,
    onRemove
}: TaskProps ) => {
    return (
        <TaskContent onClick={() => onRemove(id)}>{text}</TaskContent>
    )
}