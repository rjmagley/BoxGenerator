import React, { useState } from 'react';

const BoxGenerator = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.colorField.value);
        props.addToList(e.target.colorField.value);
    }

    return (
        <form onSubmit = {handleSubmit }>
            <h1>Add a color</h1>
            <input type="text" name="colorField"/>
            <input type="submit"/>
        </form>
    )
}

export default BoxGenerator;