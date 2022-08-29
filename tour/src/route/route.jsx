import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Admin from '../pages/admin';
import NotFoundPage from '../pages/not-found-page';

export default function Routing() {
    return (
        <Routes>
            <Route path='*' element={<NotFoundPage/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/administradores' element={<Admin/>} />
        </Routes>
    );
}