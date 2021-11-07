import { ColumnItem } from 'components/ColumnItem'
import { Column } from 'components/ColumnItem/column'
import * as S from './AppContainer.styled'

export const AppContainer = () => {

  const columns: Column[] = [
    { category: 'todo', name: 'to do' },
    { category: 'inProgress', name: 'in progress' },
    { category: 'review', name: 'review' },
    { category: 'done', name: 'done' },
  ]
  return (
    <S.Container>
      {columns.map((column) => (
        <ColumnItem key={column.category} column={column} />
      ))}
    </S.Container>
  )
}
