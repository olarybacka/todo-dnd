import { Task } from 'components/Task'
import { FC } from 'react'
import { Column } from './column'
import * as S from './Column.styled'

type Props = {
  column: Column
}

export const ColumnContainer: FC<Props> = ({ column }) => {
  return (
    <S.Section>
      <h2>{column.name}</h2>
      <S.TasksContainer>
        <Task />
        <Task />
        <Task />
      </S.TasksContainer>
    </S.Section>
  )
}
