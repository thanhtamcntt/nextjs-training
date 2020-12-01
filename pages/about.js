import Link from 'next/link';
import Layout from '../components/MyLayout';
function About(props) {
  return <div>
    <Layout>
      <h1>Fetch Data from API</h1>
      {
        props.data.map((data, i) => (
          <div>
            <Link as={`/p/${data.id}`} href={`/post?title=${data.title}`}>
              <a key={i}>{data.title}</a>
            </Link>
          </div>
        ))
      }
    </Layout>

  </div>
}

About.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return {
    data
  }
}
export default About;