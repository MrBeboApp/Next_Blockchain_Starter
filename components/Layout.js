import React from 'react'
import NavBar from "./NavBar"

 const Layout = (props) => {
    return (
        <div >
            <NavBar/>
            {props.children}

            <h3>Footer</h3>
        </div>
    )
}
export default Layout;