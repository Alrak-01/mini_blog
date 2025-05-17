import React from 'react'

const BlogList = ({ blogs, title }) => {

  return (
    <div className='blog-list'>
        <p className='font-semibold text-lg pt-5'> {title} </p>
        {blogs.map((blog) => (
            <div className="pt-5 hover:shadow-md delay-100 duration-300 transition ease-in-out p-3 rounded-md" key={blog.id}>
                <h2 className='text-lg text-red-600 font-semibold'> { blog.title } </h2>
                <p className=''> { blog.author } </p>
                {/* <button className='bg-gray-200 rounded-md py-1 px-1 text-sm my-2 hover:bg-red-600 hover:text-white delay-100 duration-300 transition' onClick={() => handleDelete(blog.id)}>Delete Me</button> */}
            </div>
        ))}
    </div>
  )
}

export default BlogList