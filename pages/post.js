import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Post =  ({router}) => (  //  receive props from previous page oppure: ({url})
     <Layout>
         <h1>{router.query.title}</h1>  
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates esse quia molestias magni, voluptas labore quis optio eos beatae ullam!</p>
    </Layout> 
 )

 export default withRouter(Post) 