
import React from "react"
import Image from "next/image"
import { FaApple } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const foots = [
    {
        heading:"COMPANY",
        list:"",
    },
    {
        heading:"QUICK LINKS",
        list:"",
    },
    {
        heading:"",
        list:"",
    },
]


export default function Footer(){
    return (
        <div className="
        border-t-[1px]
        hidden
        md:block
        bg-black
        mt-8
        ">
            <div className="flex justify-evenly gap-4 bg-blac-900 p-4 ">
                <div className="container-relative">
                    <div className="flex flex-col gap-6 mt-6 md:flex-row md:flex-wrap md:justify-between md:gap-4 lg:flex-nowrap">
                      
                      
                      <div className="mt-6 pr-8 flex items-center gap-4 md:mt-10 md:gap-7">
                        <li><FaFacebook className="mr-4 text-white text-4xl "/> </li>
                        <li><FaLinkedin className="mr-2 text-white text-4xl" /></li>
                        <li><FaPhoneAlt className="mr-4 text-white text-4xl "/> </li>
                        <li><FaEnvelope className="mr-4 text-white text-4xl "/> </li>
                      </div>
                      <div className="text-white pr-20 pl-20  text-sm md:text-lg">
                        <h4 className="font-bold">COMPANY</h4>
                        <ul className="mt-4 w-fit space-y-3">
                            <li className="cursor-pointer underline-offset-2 hover:underline">About us</li>
                            <li className="cursor-pointer underline-offset-2 hover:underline">Privacy policy</li>
                            <li className="cursor-pointer underline-offset-2 hover:underline">Terms & conditions</li>
                            
                        </ul>

                      </div>
                      <div className=" pr-20 pl-20 text-sm md:text-lg">
                        <h4 className="font-bold text-white">QUICK LINKS</h4>
                        <ul className="mt-4 w-fit space-y-3">
                        <li className=" text-white cursor-pointer underline-offset-2 hover:underline">Blog</li>
                            <li className="text-white cursor-pointer underline-offset-2 hover:underline">Media</li>
                            <li className="text-white cursor-pointer underline-offset-2 hover:underline">Careers</li>
                            <li className="text-white cursor-pointer underline-offset-2 hover:underline">Features</li>
                        
                        </ul>
                      </div>
                      <div className=" pr-20 pl-20 space-y-4 md:space-y-6">
                        <h4 className="text-sm text-white font-bold  md:text-lg">DOWLOAD THE APP</h4>
                        <button className="bg-white text-black p-4 justify-center flex md:w-5 rounded-lg border border-black min-w-[200px]">
                        <FaApple className="mr-2"/> Get on App Store
                </button>
                <button className="bg-white text-black p-4 justify-center border border-black flex md:w-5 rounded-lg min-w-[200px]">
                        <FaGooglePlay className="mr-2" /> Get on Google Play 
                </button>

                      </div>


                    </div>
                </div>
                </div>
                
                <div className="flex flex-col p-4 cursor-pointer text-sm text-gray-400">
                © 2024 Bijak | Krishiacharya Technologies Private Limited. 
All Rights Reserved.
                </div>
            </div>
        
      )
}
