//modify next default configuration
const webpack = require('webpack');
const withCss = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const config = require('./config');

const configs = {
    //编译文件的输出目录
    distDir: 'dest',
    //是否每个路由生成Etag
    generateEtags: true,    
    //页面内容缓存配置
    onDemandEntries: {
        //内容在内存中缓存的时长（ms）
         maxInactiveAge: 25 * 1000,
         //同时缓存多少个页面
         pagesBufferLength: 2,
    },
    //在pages目录下那种后缀的文件会被认为是页面
    pageExtensions: ['jsx', 'js'],
    //配置buildId
    generateBuildId: async () => {
        return null
    },
    webpack(config, options) {
        return config
    }, 
    //修改webpackDevMiddleware配置
    webpackDevMiddleware: config => {
        return config
    },
    env: {
        customKey: 'value'
    },
    //下面要通过 'next/config' 来读取
    //只有在服务端渲染时才会获取的配置
    serverRuntimeConfig: {
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET,
    },
    //在服务端渲染和客户端渲染都可获取的配置
    publicRuntimeConfig: {
        staticFolder: '/static',
    }
}

if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {} ;
}

const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize';
const SCOPE = 'user';

module.exports = withBundleAnalyzer(withCss({
    webpack(config) {
        config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
        return config;
    },
    //在服务端渲染和客户端渲染都可获取的配置
    publicRuntimeConfig: {
       GITHUB_OAUTH_URL: config.GITHUB_OAUTH_URL,
       OAUTH_URL: config.OAUTH_URL
    },
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
         server: {
             analyzerMode: 'static',
             reportFilename: '../bundles/server.html'
         },
         browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html'
        },
    }
}));