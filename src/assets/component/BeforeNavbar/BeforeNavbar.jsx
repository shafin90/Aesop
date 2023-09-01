import { useEffect, useState } from 'react';
import './BeforeNavbar.css'


const BeforeNavbar = ({ bgColor, normalText, linkedText, textColor, linkedTextColor, linkedTextFontWeight }) => {

    



    // styling the component
    const divStyle = {
        backgroundColor: bgColor,
        width: '100vw',
        height: '41px',
        color: textColor,
        fontSize: '14.55px'
    }
    const linkedTextStyle={
        color:linkedTextColor,
        fontWeight:linkedTextFontWeight
    }

    return (
        <div style={divStyle} className='d-flex justify-content-center align-items-center'>
            <p className='mb-0 d-flex justify-content-center align-items-center'>{normalText}<a className='ms-3 link-style' style={linkedTextStyle} href='#'>{linkedText}</a></p>
        </div>
    );
};

export default BeforeNavbar;