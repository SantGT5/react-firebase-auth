import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AddToDo } from "./components/AddToDo";
import { AuthContextComponent } from "./context/UserContext";
import PrivateRoutes from "./PrivateRouter/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<AddToDo />} />
          </Route>
        </Routes>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
