import {useEffect, useState} from 'react'
import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./constants/routes";
import {Lobby} from "./pages/Lobby";
import {Room} from "./pages/Room";

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.lobby} element={<Lobby/>}/>
                <Route path={routes.room} element={<Room/>}/>
                <Route path="*" element={<Navigate to={routes.lobby}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
