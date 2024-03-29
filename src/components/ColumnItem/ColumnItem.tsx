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

  const filteredTasks = tasks.filter(
    (task) => task.category === column.category,
  )

  return (
    <S.Section onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <S.Header>
        <h2>{column.name}</h2>
        <div>
          {filteredTasks.length} task{filteredTasks.length !== 1 && 's'}
        </div>
      </S.Header>
      <S.TasksListContainer>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </S.TasksListContainer>
      <OutlinedAddTaskButton category={column.category} />
    </S.Section>
  )
}
