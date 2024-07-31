import BlogLists from './BlogLists';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
 

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div>}
      {blogs && <BlogLists blogs={blogs} title="All Blogs" ></BlogLists> }
    </div>
  );
}
 
export default Home;