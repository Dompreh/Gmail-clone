import React from 'react'
import "./SidebarOptions.css"

function SidebarOptions({Icon, title, number, selected}) {
  return (
    <div className={`sidebar_options ${selected && "sidebarOpactive"}`}>
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOptions