// tslint:disable no-var-requires
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { Header as HeaderContent } from 'component/header/header';
import { Navigation } from 'component/navigation/navigation'
import { Layout, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export interface IPropsModel {
    config: any[];
}

const Main = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 50px);
    overflow: hidden;
`;

const RouterGuard: React.FC<any> = (props: any) => {
    const { config } = props;
    // const intl = useIntl();
    const { pathname } = window.location;
    const token = '' //localStorage.getItem('token');
    const isLogin = true;//jwtParse(token); // 要作jtw金鑰檢查，是否為正確的token
    const targetRouter = config.find((v: any) => v);

    if (targetRouter && !targetRouter.auth && !isLogin) {
        const { component } = targetRouter;
        return <Route exact={true} path={pathname} component={component} />;
    }
    if (isLogin) {
        // 已登入，就不可以再導向登入頁
        if (pathname === '/login') {
            return <Redirect to='/login' />;
        } else {
            if (targetRouter) {
                const component = (
                    <Fragment>
                        <HeaderContent />
                        <Main>
                            <Navigation />
                            <Route path={pathname} render={(routeProps: any) => <targetRouter.component {...routeProps} />} />
                        </Main>
                    </Fragment>
                    // <Layout>
                    //     <Header style={{padding: '0'}}>
                    //         <HeaderContent />
                    //     </Header>
                    //     <Layout  style={{height: '80vh'}}>
                    //         <Sider >
                    //             <Navigation />
                    //         </Sider>
                    //         <Content>
                    //             <Route path={pathname} render={(routeProps: any) => <targetRouter.component {...routeProps} />} />
                    //         </Content>
                    //     </Layout>
                    //     <Footer>Footer</Footer>
                    // </Layout>
                );
                return component;
            }
        }
    }
    return <Redirect to='/login' />; // 未登入，則一律跳轉至登入頁
};

export default withRouter(RouterGuard);
