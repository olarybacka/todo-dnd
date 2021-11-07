import { AppContainer } from 'components/AppContainer'
import { TaskListProvider } from 'services/TaskContext'
import './App.css'

function App() {
  return (
    <div className="App">
      <TaskListProvider>
        <AppContainer />
      </TaskListProvider>
    </div>
  )
}

export default App
