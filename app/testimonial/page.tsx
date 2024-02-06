


import React from "react"
import Image from "next/image"

const testimonials = [
  {
    image: "/people/rinku.png",
    name:"Rinku Sonker ",
    designation: "Onion buyer , Lucknow",
    description: "Despite being one of the largest buyers across Lucknow's mandi. I still have issues building credibility outside my known areas. Bijak platform helped me build credibilitv pan India, and also procure from other regions of Maharashtra, Rajasthan and Puniab, etc. This helped me increase my turnover by 20-30%."
    ,
    rating:"/people/rating.png",
    alt:"Rinku Sonker",
  },
  {
    image: "/people/neetu.png",
    name:"Neetu bhai",
    designation: "Potato buyer, Gurugram",
    description: "We used to procure from nearby areas of Delhi and Agra. We were paying premium for good quality. Bijak has provided us a large platform to procure at pan-India level with deeper visibility on the guality & timeliness of the subblier.",
    rating:"/people/rating.png",
    alt:"Neetu Bhai",
  },
  {
    image: "/people/pankaj.png",
    name:"Pankaj Tiwari",
    designation: "Potato supplier , Kannauj",
    description: "I had issues supplving to non UP buvers.  But once on-boarded on Biak. I am selling to buyers from Maharashtra and West Bengal who pay a higher price than my existing buvers.",
    rating:"/people/rating.png",
    alt:"Pankaj Tiwari"
  },
]

 
export default function Testimonial(){
  return ( 
    <div className="bg-gradient-to-b from-green-500 to-green-300 rounded-lg text-white mt-8">
      <div className="container mx-auto">
        <div className="text-3xl md:text-5xl  font-bold pt-10 pb-7 text-white text-center">
          Here's what people have to say

        </div>
        <div className="text-xl mt-0 mb-8 text-center">
        Thousands of traders trust Bijak everyday to increase their incomes and improve their lives.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9  px-4 pb-10 md:px-0">
          {testimonials.map((testimonial,index) => (
            <div 
            key={index}
            className="bg-white rounded-xl p-8 hover:scale-105 transform transition-all duration-500 ease-in-out">
           <div className="text-gray-600 mx-4 text-3xl flex justify-center mb-4">
            <Image
            src={testimonial.image}
            alt={testimonial.alt}
            width={150}
            height={150}
            className="object-contain h-20 w-20"
            />


           </div> 
           <div className="text-black text-2xl text-center font-semibold">{testimonial.name}</div>
           <div className="text-black text-center text-sm ">{testimonial.designation}</div>
           <div className="text-gray-600 mx-4 text-3xl flex justify-center ">
            <Image
            src={testimonial.rating}
            alt={testimonial.alt}
            width={350}
            height={350}
            className="object-contain h-20 w-30"
            />


           </div> 

           
           <div className="text-black text-md mt-2 mb-2">{testimonial.description}</div>
          
            </div>
          
          ))}

        </div>


        </div>

      </div>

  )}
