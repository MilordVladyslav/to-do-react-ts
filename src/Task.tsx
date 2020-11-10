import React from "react"
import { TaskContent } from './styles'

interface TaskProps {
    text: string
    isDone: boolean
    id: string | number
    isEdit: boolean
}

export const Task = ({
    text,
    isDone,
    id,
    isEdit
}: TaskProps ) => {
    return (
        <TaskContent>{text}</TaskContent>
    )
}