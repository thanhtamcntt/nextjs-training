import Head from 'next/head'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '2px solid #DDD',
    color: 'red'
};

const Layout = props => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            rel="stylesheet"
            href="//cdn.bootcss.com/spectre.css/0.1.29/spectre.min.css" />
    </Head>
);

export default Layout;