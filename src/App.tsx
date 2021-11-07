import { AppContainer } from 'components/AppContainer'
import { TaskListProvider } from 'services/TaskContext'

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
