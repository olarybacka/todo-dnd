import { FC } from 'react'
import styled from 'styled-components'
import { ColumnCategory } from 'components/ColumnItem/column'
import { useTaskListContext } from 'services/TaskContext'
import { getRandomName, getRandomDescription } from 'utils/getRandomWords'
import { colors } from 'utils/colors'

type Props = {
  category?: ColumnCategory
  className?: string
}

const AddTaskButton: FC<Props> = ({ category = 'todo', className }) => {
  const { addTask } = useTaskListContext()
  const handleClick = () => {
    addTask({
      id: JSON.stringify(Date.now()),
      name: getRandomName(),
      description: getRandomDescription(),
      category,
    })
  }
  return (
    <button className={className} onClick={handleClick}>
      Add Task
    </button>
  )
}

export const SolidAddTaskButton = styled(AddTaskButton)`
  padding: 0 45px;
  background: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
`
export const OutlinedAddTaskButton = styled(AddTaskButton)`
  padding: 10px;
  color: ${colors.blue};
  background: ${colors.lightGray};
  border: 1px solid ${colors.gray};
  font-weight: bold;
`
