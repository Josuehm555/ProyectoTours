import './styles.css'
import { useState } from 'react'
import { SubMenuMobile } from './subMenuMobile'
export const MobileMenu = ({  Items }) => {

  const [menu, setMenu] = useState(false);
  const prueba=(e)=>{
  console.log(e);
  }
  return (
    <>
      <div className="fatherBurger">
        <i className={"fa fa-bars"} onClick={() => { setMenu(true) }} ></i>
        {menu &&<SubMenuMobile Items={Items} setMenu={setMenu} > </SubMenuMobile>}
      </div>
    </>
  )
}
