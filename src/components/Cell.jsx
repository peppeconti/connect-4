import React from 'react';
import './Cell.css';

const Cell = ({ color }) => {

    const styles = {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        boxShadow:  '7px -7px 14px #7c7c7c',
        caretColor: 'transparent'
    }

    return (
        <div className={color} style={styles}/>
    )
}

export default Cell;