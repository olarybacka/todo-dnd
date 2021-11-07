import { TaskContainer } from 'components/TaskContainer'
import { FC } from 'react'
import { Column } from './column'
import { useTaskListContext } from 'services/TaskContext'

import * as S from './Column.styled'

type Props = {
  column: Column
}

export const ColumnContainer: FC<Props> = ({ column }) => {
  const { tasks } = useTaskListContext()

  return (
    <S.Section>
      <h2>{column.name}</h2>
      <S.TasksListContainer>
        {tasks
        .filter(task => task.category === column.category)
        .map(task => <TaskContainer key={task.id} task={task}/>)}
      </S.TasksListContainer>
    </S.Section>
  )
}
