import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil.jsx';

import { ProtectedRoute } from "./components/Verivicacao/ProtectedRoute.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            
                <Route path="/home" element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } />
                <Route path="/minha_conta" element={
                        <ProtectedRoute>
                            <Perfil />
                        </ProtectedRoute>
                    } />
        </Routes>
    );
}

export default App;