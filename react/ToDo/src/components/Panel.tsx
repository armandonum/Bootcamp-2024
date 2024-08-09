import React from "react";

type Props={

    isActive: boolean;
    title: string;
    onShow: ()=> void ;

    children: React.ReactNode;
}

function Panel ({ isActive, title,onShow,children}: Props)
{
    return (

        <div className={`panel ${isActive ? 'active' : ''}`}>
            <h3>{title}</h3>

            {!isActive && <button onClick={onShow}> Show</button>}

            {isActive && <p> {children}</p>}

        </div>
    )
}

export default Panel