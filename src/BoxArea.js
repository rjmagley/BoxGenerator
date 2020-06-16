import React, { useState } from 'react';

const BoxArea = (props) => {

    const elements = [];

    var boxNumber = 0;

    for (const color of props.colorList) {
        elements.push(<div key = {boxNumber} className = "colorBox" style={{backgroundColor: color}}></div>);
        boxNumber += 1;
    }

    return (
        <div>
            {elements}
        </div>
    )
}

export default BoxArea;