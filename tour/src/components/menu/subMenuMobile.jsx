import React from 'react'
import { NavLink } from 'react-router-dom'

export const SubMenuMobile = ({Items, setMenu,}) => {
  return (

        <nav className={"main-menu-mobile"}>
        <ul>
            <div>
                {Items.data.map(element =>
                    <li key={element.title}>
                        <i className={element.icon}></i>
                        <span onClick={()=>{setMenu(false)}} className="nav-text">
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
