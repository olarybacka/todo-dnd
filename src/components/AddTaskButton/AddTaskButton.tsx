import * as S from './AddTaskButton.style'
import { ColumnCategory } from 'components/Columns/column'
import { FC } from 'react'
import { useTaskListContext } from 'services/TaskContext'

type Props = {
  category?: ColumnCategory
}

export const AddTaskButton: FC<Props> = ({ category = 'todo' }) => {
  const { addTask } = useTaskListContext()
  const addNewTask = () => {
    addTask({
      id: JSON.stringify(Date.now()),
      name: 'Task name',
      category,
    })
  }
  return <S.Button onClick={addNewTask}>Add Task +</S.Button>
}
