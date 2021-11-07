import { ColumnCategory } from 'components/ColumnItem/column'
import { FC } from 'react'
import { useTaskListContext } from 'services/TaskContext'
import { getRandomName } from 'utils/getRandomWords'
import { getRandomDescription } from '../../utils/getRandomWords'
import styled from 'styled-components'
import { colors } from 'utils/colors'

type Props = {
  category?: ColumnCategory
  className?: string
}

const AddTaskButton: FC<Props> = ({ category = 'todo', className }) => {
  const { addTask } = useTaskListContext()
  const addNewTask = () => {
    addTask({
      id: JSON.stringify(Date.now()),
      name: getRandomName(),
      description: getRandomDescription(),
      category,
    })
  }
  return (
    <button className={className} onClick={addNewTask}>
      Add Task
    </button>
  )
}

export const SolidAddTaskButton = styled(AddTaskButton)`
  padding: 20px;
  background: ${colors.blue};
  color: ${colors.white};
`
export const OutlinedAddTaskButton = styled(AddTaskButton)`
  padding: 20px;
  color: ${colors.blue};
`
