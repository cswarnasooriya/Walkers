import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Choose Your Package' subtitle='In your interstings we offer several kind of packages and for you..' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
