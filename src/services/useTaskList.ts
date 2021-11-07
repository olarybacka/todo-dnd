import { useState } from 'react'
import { Task } from 'components/TaskItem/task'
import { ColumnCategory } from 'components/ColumnItem/column'

export type TaskListService = {
  tasks: Task[]
  moveTask: (id: string, category: ColumnCategory) => void
  addTask: (task: Task) => void
}

export const useTaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])

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
