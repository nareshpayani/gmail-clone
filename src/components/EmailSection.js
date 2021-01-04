import React from 'react';
import "../css/EmailSection.css"

function EmailSection({Icon, title, selected, color}) {
    return (
        <div className={`emailSection ${selected && "emailSection--active"}`} 
            style = {{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`,
            }}>
                <Icon></Icon>
                <h4>{title}</h4>
            </div>
    )
}

export default EmailSection;

