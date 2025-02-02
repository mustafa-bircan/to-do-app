import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'

function App() {

  return (
    <>
    <Switch>

      <Route path='/' exact>
        <LoginPage />
      </Route>

      <Route path='/UserPage'>
        <UserPage />
      </Route>

      <Route path='/AdminPage'>
        <AdminPage />
      </Route>


    </Switch>
      
      
    </>
  )
}

export default App
