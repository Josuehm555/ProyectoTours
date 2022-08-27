import { NavLink } from 'react-router-dom'
import './styles.css'


export default function Menu({Items}) {

    return (
        <>
            <div className="area"/>
            <nav className="main-menu">
                <ul>
                    {Items.data.map(element =>
                        <li key={element.title}>
                            <i className={element.icon}></i>
                            <span className="nav-text">
                                <NavLink className='link' to={element.url}>{element.title}</NavLink>
                            </span>
                        </li>
                    )}
                </ul>

                <ul className="logout">
                    <li>
                        <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Cerrar Sesión
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );
}