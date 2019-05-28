import Layout from "../components/Layout";
import { Component } from "react";
import fetch from  'isomorphic-unfetch'

class About extends Component {

  static async getInitialProps() { 
    const res = await fetch('https://api.github.com/users/reedbarger') // wait for resolution of fetch call and we store the response on the variable 'res'
    const data = await res.json()     // store the data received in data 
   
      return{ user: data }  // getInitialProps() must return an object 
      
  }


  render() {
    const { user } = this.props // destructuring user from props
    return (
      <Layout>
     <p>{user.name}</p>
        <p>a javascript programmer</p>
        <img src={user.avatar_url} />
      </Layout>
    );
  }
}


export default About;
