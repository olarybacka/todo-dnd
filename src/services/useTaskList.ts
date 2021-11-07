import { useState } from 'react'
import { Task } from 'components/TaskItem/task'
import { ColumnCategory } from 'components/Columns/column'

const defaultTasks: Task[] = [
  { name: 'task', id: '1', category: 'todo' },
  { name: 'task2', id: '2', category: 'todo' },
  { name: 't33', id: '3', category: 'inProgress' },
]

export type TaskListService = {
  tasks: Task[]
  moveTask: (id: string, category: ColumnCategory) => void
  addTask: (task: Task) => void
}

export const useTaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks)

  const moveTask = (id: string, category: ColumnCategory) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, category: category } : task,
      ),
    )
  }

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }
  return {
    tasks,
    moveTask,
    addTask,
  }
}
