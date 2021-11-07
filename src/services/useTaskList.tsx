import { useState } from 'react'
import { Task } from 'components/TaskContainer/task'

const defaultTasks: Task[] = [
  { name: 'task', id: '1', category: 'todo' },
  { name: 'task2', id: '2', category: 'todo' },
  { name: 't33', id: '3', category: 'inProgress' },
]

export type TaskListService = {
  tasks: Task[]
}

export const useTaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks)

  return {
    tasks
  }
}
