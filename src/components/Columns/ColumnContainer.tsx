import { Section } from './Column.styled'
import { FC } from 'react'
import { Column } from './column'

type Props = {
  column: Column
}

export const ColumnContainer: FC<Props> = ({ column }) => {
  return <Section>{column.name}</Section>
}
