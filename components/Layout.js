import Link from "next/link";
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'




const Layout = ({ children, title }) => (
  <div className="root">
      <Head>
           <link rel="stylesheets" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
      </Head>
    <header>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/hireme"><a>Hire me</a></Link>
        <Link href="/blog"><a>Blog</a></Link>

    </header>
    <h1>{title}</h1>
    {children}
    <footer>copyright: {new Date().getFullYear()}</footer>
    <style jsx> {`
        .root{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        header{
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1em;
            font-size: 1.2rem;
            background: indigo
        }
        header a {
            color: #fff;
            text-decoration: none;
        }
        header a:hover{
            color: lightgrey
        }
        footer {
            padding: 1em
        }
        `}
    </style>
   
  </div>
);

export default Layout;
