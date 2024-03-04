import UserContextProvider from "./context/UserContextProvider"
import Login from "./component/Login"
import Profile from "./component/Profile"
import UserContext from "./context/UserContext"

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with chai and share is important</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
