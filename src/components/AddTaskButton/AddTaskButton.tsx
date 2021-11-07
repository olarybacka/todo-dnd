import * as S from './AddTaskButton.style'
import { ColumnCategory } from 'components/ColumnItem/column'
import { FC } from 'react'
import { useTaskListContext } from 'services/TaskContext'
import { getRandomName } from 'utils/getRandomWords'

type Props = {
  category?: ColumnCategory
}

export const AddTaskButton: FC<Props> = ({ category = 'todo' }) => {
  const { addTask } = useTaskListContext()
  const addNewTask = () => {
    addTask({
      id: JSON.stringify(Date.now()),
      name: getRandomName(),
      category,
    })
  }
  return <S.Button onClick={addNewTask}>Add Task +</S.Button>
}
