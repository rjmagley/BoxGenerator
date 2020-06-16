import React, { useState } from 'react';

const BoxArea = (props) => {

    const elements = [];

    for (const color of props.colorList) {
        elements.push(<div style="background-color: {color}"></div>)
    }

    return (
        <div>
            {elements}
        </div>
    )
}

export default BoxArea;