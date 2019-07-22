import { useState ,useCallback } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import { Button, Layout, Icon, Input, Avatar, Tooltip, Dropdown, Menu} from 'antd';
import { connect } from 'react-redux';
import { logout } from '../store/store';
import Container from './Container';
import axios from 'axios';
import {withRouter} from 'next/router';

const { Header, Content, Footer } = Layout;

const { publicRuntimeConfig } = getConfig();

const githubIconStyle = { 
    color: 'white',
    fontSize: 40,
    display: 'block',
    paddingTop: 10,
    marginRight: 20
};

const footerStyle = {
    textAlign: 'center'
} 

function CustomizedLayout ({ children, user, onLogout, router }) {
    const urlQuery = router.query && router.query.query;
    const [search, setSearch] =  useState(urlQuery || '');
    
    const handleSearchChange = useCallback(event => {
        setSearch(event.target.value)
    }, [setSearch]);

    const handleOnSearch = useCallback(() => {
        router.push(`/search?query=${search}`);
    }, [search]);

    const handleLogout = useCallback(() => {
        onLogout();
    }, [onLogout]);

    const handleGotoOauth = useCallback(e => {
        e.preventDefault();
        axios.get(`/prepare-auth?url=${router.asPath}`).then(resp => {
            if (resp.status === 200) {
                location.href = publicRuntimeConfig.OAUTH_URL;
            } else {
                console.log('prepare auth failed', resp);
            }
        }).catch(e => {
            console.log('prepare auth failed', e);
        })
    }, []);

    const userDropDown = (
        <Menu>
            <Menu.Item>
                <a href="javascript:void(0)" onClick={handleLogout}>
                    Log out
                </a>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout >
            <Header>
                <Container renderer={<div className="header-inner" />}>
                    <div className="header-left">
                        <div className="logo">
                            <Link href="/">
                                <Icon type="github" style={githubIconStyle}/>
                            </Link>
                        </div>
                        <div>
                            <Input.Search 
                                placeholder="search repository"
                                value={search}
                                onChange={handleSearchChange} 
                                onSearch={handleOnSearch}
                            /> 
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="user">
                        {
                            user && user.id ? (
                                <Dropdown overlay={userDropDown}>
                                    <a href="/">
                                        <Avatar size={40} src={user.avatar_url}/>
                                    </a>
                                </Dropdown>
                            ) : (
                                <Tooltip title="click to login">
                                    <a href={ `/prepare-auth?url=${router.asPath}` } >
                                        <Avatar size={40} icon="user"/>
                                    </a>
                                </Tooltip>
                            )
                        }
                            
                        </div>
                    </div>
                </Container>
            </Header>
            <Content>
                <Container renderer={<div />}>
                    {children}    
                </Container>
            </Content>
            <Footer style={footerStyle}>
                Developed by Carson @ 
                <a href="mailto:test@test.com">test@test.com</a>
            </Footer>
            <style jsx>{`
                .header-inner {
                    display: flex;
                    justify-content: space-between
                }
                .header-left {
                    display: flex;
                    justify-content: flex-start;
                }
                .content {
                    color: red;
                }
            `}</style>
            <style jsx global>{`
                #__next {
                    height: 100%;
                }
                .ant-layout {
                    min-height: 100%;
                }
                .ant-layout-header {
                    padding-left: 0;
                    padding-right: 0;
                }
                .ant-layout-content {
                    background: #ffffff;
                }
            `}</style>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomizedLayout));