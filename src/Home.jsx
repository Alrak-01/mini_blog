import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);

    // const handleDelete = (id) => {
    // const newBlog = blogs.filter(blog => blog.id !== id);
    // setBlogs(newBlog);
    // };

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, []);

    return ( 
        <div className="home px-36 pt-10">
            <h1 className="text-2xl font-semibold">Home Page</h1>
           {blogs && <BlogList blogs={ blogs } title="All Blogs!"/>}
           
        </div>
     );
}
 
export default Home;