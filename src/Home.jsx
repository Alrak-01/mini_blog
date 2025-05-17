import { useState } from 'react'

const Home = () => {
    
    const [blogs, setBlogs] = useState([
    { title: "Top 10 developers", body: "lorem disco winens....", author: "Walex", id: 1 },
    { title: "Web developement core", body: "lorem disco winens....", author: "Cane", id: 2 },
    { title: "React developer incoming", body: "lorem disco winens....", author: "James", id: 3 }
]);

    return ( 
        <div className="home px-36 pt-10">
            <h1 className="text-2xl font-semibold">Home Page</h1>
            {blogs.map((blog) => (
                <div className="pt-5 hover:shadow-md delay-100 duration-300 transition ease-in-out p-3 rounded-md" key={blog.id}>
                    <h2 className='text-lg text-red-600 font-semibold'> { blog.title } </h2>
                    <p className=''> { blog.author } </p>
                </div>
            ))}
            
        </div>
     );
}
 
export default Home;