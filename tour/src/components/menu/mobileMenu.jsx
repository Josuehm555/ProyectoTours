import './styles.css'
import { useState } from 'react'
import { IconBurger } from './iconBurger'
import {SubMenuMobile} from './subMenuMobile'
import { faBars  } from '@fortawesome/free-solid-svg-icons';
export const MobileMenu = ({setMenuMobile, Items}) => {

  const [menu, setMenu] = useState(false);

  return (
    <div className="fatherBurger">
      
      <i  className={"fa fa-bars"}  onClick={()=>{setMenu(true) } } ></i>
      {menu && <SubMenuMobile Items={Items} setMenu={setMenu} > </SubMenuMobile> }
    </div>
  )
}
