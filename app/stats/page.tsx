'use client'
import React from 'react'
import Image from 'next/image'

const stats=[
  {
    caption: "28 States/UT",
    image: "/stats-1.png",
    alt: "stats-1",
  },
  {
    caption: "2000+ Mandis",
    image: "/stats-2.png ",
    alt: "stats-1",
  },
  {
    caption: "200+ Commodities",
    image: "/stats-3.png ",
    alt: "stats-1",
  },
]


export default function Stats(){
    return (
       
          <div className="bg-gray-100  rounded-xl mt-8 text-black">
         <div className="container mx-auto">
          <div className="text-3xl md:text-xl  pt-10 pb-7 text-black text-center">
            Some numbers that matter
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10 md:px-0">
            {stats.map((stat,index) => (
              <div
              key={index}
              className="bg-gray-100 rounded-5xl p-8 "
              >
               
                <div className="text-black text-3xl  text-center font-bold">{stat.caption}</div>
                

              </div>
            ))}
          </div>
         </div>
          </div>
        
      )
}
/* <div>
                  <Image
                  src={stat.image}
                  alt={stat.alt}
                  width={150}
                  height={150}
                  className="object-contain h-20 w-20"

                  />
                </div>
*/