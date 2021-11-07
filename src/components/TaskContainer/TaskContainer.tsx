import { DragEvent } from 'react'
import * as S from './TaskContainer.styled'
import { Task } from './task';
import { FC } from 'react';

type Props = {
  task: Task
}

const handleDragStart = (e: DragEvent, id: string) => {
  e.dataTransfer.setData('id', id)
}

export const TaskContainer: FC<Props> = ({task}) => {
  return (
    <S.Task draggable onDragStart={e => handleDragStart(e, task.id)}>
      {task.name} 
    </S.Task>
  )
}