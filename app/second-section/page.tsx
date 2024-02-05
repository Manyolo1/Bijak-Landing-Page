

'use client'
import { FaApple } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa"
import React from "react"
import Image from "next/image"
import SwipeCarousel from "../intuitiveApp/page"





const features = [
    {
        name: "Network",
        description:
          "Access the largest network of reliable and trustworthy agriculture buyers/suppliers.",
        image: "/features_icons/network.png",
        alt: "Customizable",
        color: "blue"
      },
      {
        name: "Alerts & Reminders",
        description:
          "Get instant alerts, pending amount notifications and facility to send payment reminders.",
        image: "/features_icons/bell.png",
        alt: "Customizable",
      },
      {
        name: "Bookkeeping",
        description:
          "Get all agriculture trading transaction details and related documents on your mobile.",
        image: "/features_icons/book-keeping.png",
        alt: "Customizable",
      },
      {
        name: "Payments",
        description:
          "Make quick, safe and real time payments to your partners – anytime from anywhere.",
        image: "/features_icons/payment-method.png",
        alt: "Customizable",
      },
      {
        name: "Bijak Limit",
        description:
          "Quick and real time disbursal of loans to buyers, enabling immediate payment to suppliers.",
        image: "/features_icons/coin.png",
        alt: "Customizable",
      },
      {
        name: "Ratings",
        image: "/features_icons/rate.png",
        description: "Make informed agriculture trade decisions with accurate trade participant ratings that enhance accountability.",
        alt: "Customizable",
      },
    ]


 
export default function SecondSect(){
  return ( 
    <div className="">
        <div className="
md:flex-row
      
flex-col
items-center
flex  justify-center pb-10
        
        ">
            <div className="p-5 justify-center md:w-1/3">
                <div className="
                bg-gradient-to-r
                from-green-600
                to-yellow-300
                bg-clip-text
                text-transparent
                text-4xl
                md:text-4xl
                font-bold
                pb-10
                
                ">
                    Revolutionise your Agri trade with our Intuitive app!

                </div>
                <div className="text-xl mb-8">
                Simple, multilingual app for all agricultural trading needs.

                </div>
                <div className="flex justify-center gap-4">
                <button className="bg-white-500 text-black p-4 justify-center flex md:w-5 rounded-lg border border-black hover:bg-yellow-100 min-w-[200px]">
                        <FaApple className="mr-2"/> Get on App Store
                </button>
                <button className="bg-white-500 text-black p-4 justify-center border border-black flex md:w-5 rounded-lg hover:bg-yellow-100 min-w-[200px]">
                        <FaGooglePlay className="mr-2" /> Get on Google Play 
                </button>
                </div>
                </div>
                

               <SwipeCarousel />
            </div>

            <div className="flex-col items-center justify-center">
                <div className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-l
                from-green-800
                to-green-300
                bg-clip-text
                text-transparent

                
                
                ">
                        Product Features


                </div>

                <div className="grid grid-cols-1 \p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
                    {features.map((feature, index) => (
                        <div
                        key={index}
                        className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
                        >
                            <div className="
                            text-gray-600 text-3xl 
                            ">
                                <Image
                                src={feature.image}
                                alt={feature.alt}
                                width={300}
                                height={300}
                                className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                                />
                                <div>
                                    <div className="text-2xl pb-4 text-black font-semibold

                                    
                                    
                                    ">{
                                    feature.name}
                                    </div>

                                    <div className="text-black  text-lg">
                                        {feature.description}




                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>



  );
}
