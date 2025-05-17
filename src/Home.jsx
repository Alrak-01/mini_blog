import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
    { title: "Top 10 developers", body: "lorem disco winens....", author: "Walex", id: 1 },
    { title: "Web developement core", body: "lorem disco winens....", author: "Cane", id: 2 },
    { title: "React developer incoming", body: "lorem disco winens....", author: "James", id: 3 }
]);

    return ( 
        <div className="home px-36 pt-10">
            <h1 className="text-2xl font-semibold">Home Page</h1>
           <BlogList blogs={ blogs } title="All Blogs!" />
            
        </div>
     );
}
 
export default Home;