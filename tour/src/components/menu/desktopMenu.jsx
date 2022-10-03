import { NavLink } from 'react-router-dom'

export const DesktopMenu = ({ Items, setMenuMobile }) => {

    return (

        <nav className={"main-menu"}>
            <ul>
                <div>
                    {Items.data.map(element =>
                        <li key={element.title}>
                            <i className={element.icon}></i>
                            <NavLink className='link' to={element.url}>{element.title}</NavLink>
                        </li>
                    )}
                </div>
                <div>
                    <li>
                        <i className="fa fa-sign-out"></i>
                        <NavLink className='link' to={""}>Cerrar Sesión</NavLink>
                    </li>
                </div>
                </ul>
        </nav>
    )
}
