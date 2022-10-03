import React from 'react'
import {NavLink} from 'react-router-dom'
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const SubMenuMobile = ({ Items, setMenu, menu }) => {
    return (
        <>
            <div className='menu-all'>
                <nav className={"main-menu-mobile"}>
                <div>
                <FontAwesomeIcon onClick={() => { setMenu(false) }} className='fa-xmarkMe' icon={faXmark} />
                </div>
                    <ul>          
                        <div>
                            {Items.data.map(element =>
                                <li key={element.title}>
                                    <i className={element.icon}></i>
                                    <NavLink onClick={() => { setMenu(false) }} className='link' to={element.url}>{element.title}</NavLink>
                                </li>
                            )}
                        </div>
                        <div>
                            <li>
                                <i onClick={() => { setMenu(false) }} className="fa fa-sign-out"></i>
                                <NavLink onClick={() => { setMenu(false) }} className='link' to={""}>Cerrar Sesión</NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
                <div onClick={() => { setMenu(false) }} className='transparent'></div>
            </div>
        </>
    )
}
