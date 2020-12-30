import React from 'react'
import "../css/SidebarOptions.css";


function SidebarOptions({Icon, title, number, selected}) {
    return (
        <div className={`sidebarOptions ${selected && "sidebarOptions--active"}`}>
            <Icon className="sidebarOptions__Icon" />
            <h3 className="sidebarOptions__title">{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOptions;
