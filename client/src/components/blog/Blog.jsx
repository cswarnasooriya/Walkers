import React from "react"
import Back from "../common/Back"
import RecentCardnew from "../home/recent/RecentCardNew"
import "../home/recent/recent.css"
import img from "../images/services_A.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Services' title='Our Services' cover={img} />
        <div className='container recent'>
          <RecentCardnew />
        </div>
      </section>
    </>
  )
}

export default Blog
