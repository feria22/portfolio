import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation(props) {
    const links = props.links

    return (
        <ul className="flex-container space-around">
            {links.map((el, index) => <li  key={index}><NavLink activeClassName="active--link" to={el.adres} >{el.link}</NavLink></li>)}
        </ul>
    )
}
export default Navigation;