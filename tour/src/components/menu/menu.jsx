import { MobileMenu } from './mobileMenu'
import { DesktopMenu } from './desktopMenu'
import './styles.css'

export default function Menu({ Items }) {

    return (
        <>
            <MobileMenu Items={Items} className={"main-mobile"}/>
            <DesktopMenu Items={Items}/>
        </>
    );
}
