import { ColumnItem } from 'components/ColumnItem'
import { Column } from 'components/ColumnItem/column'
import * as S from './AppContainer.styled'
import { SolidAddTaskButton } from 'components/AddTaskButton'

export const AppContainer = () => {
  const columns: Column[] = [
    { category: 'todo', name: 'to do' },
    { category: 'inProgress', name: 'in progress' },
    { category: 'review', name: 'review' },
    { category: 'done', name: 'done' },
  ]
  return (
    <div>
      <S.Header>
        <h1>Project tasks </h1>
        <SolidAddTaskButton />
      </S.Header>
      <S.Container>
        {columns.map((column) => (
          <ColumnItem key={column.category} column={column} />
        ))}
      </S.Container>
    </div>
  )
}
