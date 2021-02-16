import React from 'react'
import "./SidebarRow.css"
function SidebarRow({ sss, Icon, title }) {
    return (
        <div className={`sidebarRow ${ sss && "selected"}`}>
            <Icon className="sidebarRow_icon"/>
            {/* {Icon} */}
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
    );
}

export default SidebarRow
