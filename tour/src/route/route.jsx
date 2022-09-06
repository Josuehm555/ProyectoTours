import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Admin from '../pages/admin';
import NotFoundPage from '../pages/not-found-page';
import Galery from '../pages/galery';
import Subcategory from '../pages/subcategories';
import Promotions from '../pages/promotions';

export default function Routing() {
    return (
        <Routes>
            <Route path='*' element={<NotFoundPage/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/administradores' element={<Admin/>} />
            <Route path='/galeria' element={<Galery/>} />
            <Route path='/subcategoria' element={<Subcategory/>} />
            <Route path='/promociones' element={<Promotions/>} />
        </Routes>
    );
}