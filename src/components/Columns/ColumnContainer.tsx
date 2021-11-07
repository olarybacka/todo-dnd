import { DragEvent } from 'react'
import { TaskContainer } from 'components/TaskContainer'
import { FC } from 'react'
import { Column } from './column'
import { useTaskListContext } from 'services/TaskContext'

import * as S from './Column.styled'

type Props = {
  column: Column
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
}

export const ColumnContainer: FC<Props> = ({ column }) => {
  const { tasks } = useTaskListContext()

  const handleOnDrop = (e: DragEvent) => {
    console.log(e.dataTransfer.getData('id'))
  }

  return (
    <S.Section onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <h2>{column.name}</h2>
      <S.TasksListContainer>
        {tasks
        .filter(task => task.category === column.category)
        .map(task => <TaskContainer key={task.id} task={task}/>)}
      </S.TasksListContainer>
    </S.Section>
  )
}
