import React from 'react'

const BlogList = ({ blogs, title }) => {
// const blogs = props.blogs;
// const title = props.title;



  return (
    <div>
        <p className='font-semibold text-lg pt-5'> {title} </p>
        {blogs.map((blog) => (
            <div className="pt-5 hover:shadow-md delay-100 duration-300 transition ease-in-out p-3 rounded-md" key={blog.id}>
                <h2 className='text-lg text-red-600 font-semibold'> { blog.title } </h2>
                <p className=''> { blog.author } </p>
            </div>
        ))}
    </div>
  )
}

export default BlogList