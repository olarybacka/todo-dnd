import { ColumnContainer } from 'components/Columns'
import { Column } from 'components/Columns/column'
import { Container } from './AppContainer.styled'

export const AppContainer = () => {

  const columns: Column[] = [
    { sectionId: 'toDo', name: 'to do' },
    { sectionId: 'inProgress', name: 'in progress' },
    { sectionId: 'review', name: 'review' },
    { sectionId: 'done', name: 'done' },
  ]
  return (
    <Container>
      {columns.map((column) => (
        <ColumnContainer key={column.sectionId} column={column} />
      ))}
    </Container>
  )
}
