import Layout from '../components/MyLayout';

class About extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return <div> <Layout> 
        Next stars: {this.props.stars}
        </Layout> </div>
  }
}

export default About