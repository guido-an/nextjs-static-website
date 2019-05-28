import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
      <li>
            <Link as={`${props.title}`}href={`/post/?title=${props.title}`}>
            <a>{props.title}</a>
            </Link>
         <p>{props.desc}</p>
     </li>
)

const Blog = () => (
<Layout title="My blog">
    <ul>
     <PostLink title='react'/>
     <PostLink title='angular'/>
     <PostLink title='vue'/>
    </ul>
</Layout>
)

export default Blog