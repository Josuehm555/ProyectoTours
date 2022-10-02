import { NavLink } from 'react-router-dom'

export const DesktopMenu = ({ Items, setMenuMobile }) => {

    return (

        <nav className={"main-menu"}>
            <ul>
                <div className='firstChild'>
                    {Items.data.map(element =>
                        <li key={element.title}>
                            <i className={element.icon}></i>
                            <span onClick={() => { setMenuMobile(true) }} className="nav-text">
                                <NavLink className='link' to={element.url}>{element.title}</NavLink>
                            </span>
                        </li>
                    )}
                </div>
                <div>
                    <li>
                        <i className="fa fa-sign-out"></i>
                        <span className="nav-text">
                            Cerrar Sesión
                        </span>
                    </li>

                </div>

            </ul>
           
        </nav>
    )
}
