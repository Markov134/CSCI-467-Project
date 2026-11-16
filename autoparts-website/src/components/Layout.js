import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Layout({ links, logoLink }) {
    return (
        <>
            <NavBar links={links} logoLink={logoLink} />
            <Outlet />
        </>
    )
}

export default Layout
