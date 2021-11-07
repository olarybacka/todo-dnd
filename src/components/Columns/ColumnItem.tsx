import { DragEvent } from 'react'
import { TaskItem } from 'components/TaskItem'
import { FC } from 'react'
import { Column } from './column'
import { useTaskListContext } from 'services/TaskContext'
import { AddTaskButton } from 'components/AddTaskButton'

import * as S from './Column.styled'

type Props = {
  column: Column
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
}

export const ColumnItem: FC<Props> = ({ column }) => {
  const { tasks, moveTask } = useTaskListContext()
  console.log({tasks});

  const handleOnDrop = (e: DragEvent) => {
    moveTask(e.dataTransfer.getData('id'), column.category)
  }

  return (
    <S.Section onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <h2>{column.name}</h2>
      <S.TasksListContainer>
        {tasks
          .filter((task) => task.category === column.category)
          .map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
      </S.TasksListContainer>
      <AddTaskButton category={column.category} />
    </S.Section>
  )
}
