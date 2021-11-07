import { DragEvent } from 'react'
import { TaskItem } from 'components/TaskItem'
import { FC } from 'react'
import { Column } from './column'
import { useTaskListContext } from 'services/TaskContext'
import { OutlinedAddTaskButton } from 'components/AddTaskButton'

import * as S from './Column.styled'

type Props = {
  column: Column
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
}

export const ColumnItem: FC<Props> = ({ column }) => {
  const { tasks, moveTask } = useTaskListContext()

  const handleOnDrop = (e: DragEvent) => {
    moveTask(e.dataTransfer.getData('id'), column.category)
  }

  return (
    <S.Section onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <S.Header>{column.name}</S.Header>
      <S.TasksListContainer>
        {tasks
          .filter((task) => task.category === column.category)
          .map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
      </S.TasksListContainer>
      <OutlinedAddTaskButton category={column.category} />
    </S.Section>
  )
}