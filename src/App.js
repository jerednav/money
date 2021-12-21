import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";

//pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={user ? <Home /> : <Login />} />
            <Route path='/login' element={user ? <Home /> : <Login />} />
            <Route path='/signup' element={user ? <Home /> : <Signup />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
