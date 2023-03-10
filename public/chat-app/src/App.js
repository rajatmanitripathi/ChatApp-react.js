import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/authcontext';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const{CurrentUser}= useContext(AuthContext)
  
  const ProtectedRoute = ({children})=>{
    if(!CurrentUser){
      return <Navigate to ="/login"/>
    }
    return children;
  }
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/">
          <Route index 
          element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          } 
          />
            <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          </Route>
          </Routes>
         
        
      </BrowserRouter>
   
  );
}

export default App;
