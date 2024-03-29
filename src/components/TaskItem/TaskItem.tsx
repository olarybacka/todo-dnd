import { DragEvent, FC } from 'react'
import { Task } from './task'
import { getInitials } from 'utils/getInitials'
import * as S from './TaskItem.styled'

type Props = {
  task: Task
}

const handleDragStart = (e: DragEvent, id: string) => {
  e.dataTransfer.setData('id', id)
}

export const TaskItem: FC<Props> = ({ task }) => {
  return (
    <S.Task draggable onDragStart={(e) => handleDragStart(e, task.id)}>
      <S.Header>
        {task.name}
        <S.Avatar>{getInitials(task.name)}</S.Avatar>
      </S.Header>
      <S.Body>{task.description}</S.Body>
    </S.Task>
  )
}
