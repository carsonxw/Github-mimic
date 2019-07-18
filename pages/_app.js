import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import testHoc from '../lib/with-redux';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';

import Router from 'next/router';
import Link from 'next/link';
import PageLoading from '../components/Page-loading';

import axios from 'axios';

class MyApp extends App {
    state = {
        context: 'value',
        loading: false
    }

    startLoading = () => {
        this.setState({
            loading: true
        });
    }

    stopLoading = () => {
        this.setState({
            loading: false
        });
    }

    componentDidMount() {
        Router.events.on('routeChangeStart', this.startLoading);
        Router.events.on('routeChangeComplete', this.stopLoading);
        Router.events.on('routeChangeError', this.startLoading);

        axios.get('/github/search/repositories?q=react').then(resp => 
            console.log(resp.data)
        )
    }

    componentWillUnmount() {
        Router.events.off('routeChangeStart');
        Router.events.off('routeChangeComplete');
        Router.events.off('routeChangeError');
    }

    //self-defined MyApp
    //http request here
    static async getInitialProps(ctx) {
        const { Component } = ctx;
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps
        }
    } 

    render() {
        const { Component , pageProps , reduxStore} = this.props;
        const { loading } = this.state;
        return (
            <Container >
                <Provider store={reduxStore}>
                    { loading ? <PageLoading /> : null }
                    <Layout>
                        <Link href='/'><a>Index</a></Link>
                        <Link href='detail'><a>detail</a></Link>
                        <Component { ...pageProps } />
                    </Layout>
                </Provider>      
            </Container>
            
        )
    }
}

export default testHoc(MyApp);