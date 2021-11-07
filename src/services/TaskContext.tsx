import { createContext, FC, useContext } from 'react'
import { useTaskList, TaskListService } from './useTaskList'

export const TaskListContext = createContext<TaskListService>(
  {} as TaskListService,
)

export const TaskListProvider: FC = (props) => (
  <TaskListContext.Provider value={useTaskList()}>
    {props.children}
  </TaskListContext.Provider>
)

export const useTaskListContext = () => useContext(TaskListContext)

