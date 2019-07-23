import { memo, isValidElement } from 'react';
import { withRouter } from 'next/router';
import { Row, Col, List, Pagination } from 'antd';
import Link from 'next/link';

import Repos from '../components/Repos';

const api = require('../lib/api');

const LANGUAGE = [
    'JavaScript',
    'HTML',
    'CSS',
    'TypeScript',
    'Java',
    'Rust',
];

const SORT_TYPES = [
    {
        name: 'Best Match'
    },
    {
        name: 'Most Stars',
        value: 'starts',
        order: 'desc'
    },
    {
        name: 'Fewest Stars',
        value: 'starts',
        order: 'asc'
    },
    {
        name: 'Most Forks',
        value: 'forks',
        order: 'desc'
    },
    {
        name: 'Fewest Forks',
        value: 'forks',
        order: 'asc'
    }
];

/**
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库项目开发主语言
 * page: 分页页面
 */

 const selectedItemStyle = {
     borderLeft: '2px solid #e36209',
     fontWeight: 100, 
 }

function noop() {};

const per_page = 20;

 //memo
 const FilterLink = memo(({ name, query, lang, sort, order, page }) => {
    //avoid re-render
    let queryString = `?query=${ query }`;
    if (lang) queryString += `&lang=${ lang }`;
    if (sort) queryString += `&sort=${ sort }&order=${ order || 'desc' }`;
    if (page) queryString += `&page=${ page }`;

    queryString += `&per_page=${ per_page }`;
    
    /**
     * 1.SEO
     * 2.while click on the 'Best Match', aviod sort and order are null
     */
    return (
        <Link href={ `/search${queryString}` }>
            { isValidElement(name) ? name : <a>{ name }</a>}
        </Link>
    )
 });

function Search({ router, repos }) {
    //get query
    console.log(repos);

    const { ... querys } = router.query;
    const { lang, sort, order, page } = router.query;
    return (
        <div className="root">
            <Row gutter={20}>
                <Col span={6}>
                    <List 
                        bordered
                        header={<span className="list-header">Language</span>}
                        style={{ marginBottom: 20 }}
                        dataSource={LANGUAGE}
                        renderItem={item => {
                            const selected = lang === item;
                            return (
                                <List.Item style={selected ? selectedItemStyle : null}>
                                    { selected ? 
                                        <span>{ item }</span> : 
                                        (
                                            <FilterLink
                                                { ... querys }
                                                lang={item}
                                                name={item}
                                            />  
                                        ) 
                                    }
                                   
                                </List.Item>
                            )
                        }}
                    />
                    <List 
                        bordered
                        header={<span className="list-header">Sorted</span>}
                        dataSource={SORT_TYPES}
                        renderItem={item => {
                            let selected = false;
                            if (item.name === 'Best Match' && !sort) {
                                selected = true;
                            } else if (item.value === sort && item.order === order) {
                                selected = true;
                            } else {
                                selected = false;
                            }
                            return (
                                <List.Item style={selected ? selectedItemStyle : null}>
                                    {
                                        selected ? <span>{ item.name }</span>
                                        : 
                                        (
                                            <FilterLink
                                                { ... querys }
                                                sort={item.value}
                                                order={item.order}
                                                name={item.name}
                                            />               
                                        )
                                    }
                                    
                                </List.Item>
                            )
                        }}
                    />
                </Col>
                <Col span={16}>
                    <h3 className="repos title">{repos.total_count} repositories</h3>
                    {
                        repos.items.map(repo => <Repos repo={repo} key={repo.id}/>)
                    }
                    <div className="pagination">
                        <Pagination 
                            pageSize={ per_page}
                            current={ Number(page) || 1 }
                            total={1000}
                            onChange={noop}
                            itemRender={(page, type, ol) => {
                                const p = type === 'page' ? 
                                    page : (type === 'prev' ? page - 1 : page + 1 );
                                const name = type === 'page' ? page : ol;
                                return (
                                    <FilterLink 
                                        { ... querys } 
                                        page={p} 
                                        name={name}
                                    />
                                )
                            }}
                        />
                    </div>
                </Col>
            </Row>
            <style jsx>{`
                .root {
                    padding: 20px 0; 
                }
                .list-header {
                    font-weight: 800;
                    font-size: 16px;
                }
                .repos.title {
                    border-bottom: 1px solid #eee;
                    font-size: 24px;
                    line-height: 50px;
                }
                .pagination {
                    padding: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

Search.getInitialProps = async ({ ctx }) => {
    const { query, sort, lang, order, page } = ctx.query;
    
    if (!query) {
        return {
            repos: {
                total_count: 0
            }
        }
    }

    // ?q=react+language:javascript&sort=stars&order=desc&page=2;
    let queryString = `?q=${query}`;
    if (lang) queryString += `+language:${lang}`;
    if (sort) queryString += `&sort=${sort}&order=${order || 'desc' }`;
    if (page) queryString += `page=${page}`;

    queryString += `&per_page=${per_page}`;

    const result = await api.request({
        url: `/search/repositories${queryString}`
    }, ctx.req, ctx.res);

    return {
        repos: result.data
    }
}

export default withRouter(Search);