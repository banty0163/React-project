
import './App.css'
import Userlogin from './Components/User/Userlogin.jsx'
import LoginPage from './Components/LoginPage/LoginPage.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
function App() {


  return (
   
    <UserContextProvider>
    
        <LoginPage/>
        <Userlogin/>
    </UserContextProvider>
  
  )
}

export default App
