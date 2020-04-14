import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import './navigation.sass';

const menuItem = [
    {
        id: 'menu00',
        name: '資訊總覽',
        icon: null,
        href: '/overView'
    }
];
const pathMap = [
    {path: '/overView', menuId: 'menu00'},
];

export const Navigation: React.FC<any> = (prop: any) => {
    let routeKey = pathMap.find((item: any) => item.path === window.location.pathname)?.menuId;
    const [selectedKey, setSelecctedKey] = useState<any>([routeKey || 'menu00']); // 選單選中
    const [openKey, setOpenKey] = useState<any>([routeKey?.substr(0, 6)] || []); // 選單focus
    useEffect(() => {
        routeKey = pathMap.find((item: any) => item.path === window.location.pathname)?.menuId;
        setSelecctedKey([routeKey || 'menu00']);
        setOpenKey([[routeKey || 'menu00'][0].substr(0, 6)] || []);
    }, [window.location.pathname]);
    return (
        <Layout className='nav' style={{backgroundColor: '#BBFFEE'}}>
            <ul className='drop-down-menu' >
                sider
                {/* {menuItem.map((x: any) => (
                    <li key={x.id} className={openKey[0] === x.id ? 'selected' : ''}>
                        <Link to={{pathname: x.href, state: { prevPath: window.location.pathname }}}>
                            <img src={x.icon} className='menuIcon'/>
                            <br/>
                            {x.name}
                        </Link>
                        <ul>
                            {x.subMenu && x.subMenu.map((y: any) => (
                                <li key={y.id} className={selectedKey === y.id ? 'selected' : ''}>
                                    <Link to={{pathname: y.href, state: { prevPath: window.location.pathname }}}>
                                        {y.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))} */}
            </ul>
        </Layout>
    );
};
