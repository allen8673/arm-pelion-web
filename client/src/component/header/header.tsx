import React, { useState, useEffect } from 'react';
import { apiCaller } from '../../service/apiCaller';
import './header.sass';

export const Header: React.FC<any> = (props: any) => {
    return <header className='header_title' style={{ background: '#444444' }}>
        Header
        </header>
};
