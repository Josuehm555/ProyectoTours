import { useState } from 'react';
import { MobileMenu } from './mobileMenu'
import { DesktopMenu } from './desktopMenu'
import './styles.css'

export default function Menu({ Items }) {

    const [MenuMobile, setMenuMobile] = useState(true)


    return (
        <>
            <MobileMenu Items={Items} setMenuMobile={setMenuMobile} className={"main-mobile"} />
            <DesktopMenu Items={Items} setMenuMobile={setMenuMobile} />
        </>
    );
}
