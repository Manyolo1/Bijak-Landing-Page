
import Image from "next/image"

export default function FirstSect(){
    return (
        <section className="md:py-20 mx-4 py-18 bg-gradient-to-r from gray-00 to gray-200 spacey-10">
            <div className="text-6xl flex justify-center md:px-20 p-10
            text-gradient
            bg-gradient-to-r
            from-green-600
            to-yellow-300
            bg-clip-text
            text-transparent
            font-bold
            "
            > Optimise through Accountability
            </div>
            <p className="text-lg md:text-xl md-10
            text-black
            text-center
            
            ">
                India’s most trusted agriculture trading platform that helps mandi traders across India to buy/sell top-quality agricultural commodities with 30,000+ reliable traders at the best rates. Get end-to-end Agri trade services such as advance payment facility, Bijak limit, daily mandi bhav from 2,000+ mandis & more.
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="bg-green-500 text-white  px-10 py-4 rounded-lg text-lg mt-4 font-bold">
                        Get Started
                    </button>
                    <button className="bg-gray-400 text-white px-10 py-4 rounded-lg mt-4 text-lg font-bold  hover:bg-gray-800 active:border active:border-lime-400 rounded-md duration-100 p-2">
                        Learn More
                    </button>
                    
                </div>
                <section className="flex justify-center  md:py-20">
                    <div style={{width: "100%" , height:"100%"}} className="pt-10">
                    <Image src="/mandi.png" width={200} height={200} className="rounded-xl"layout="responsive" alt={"hero_image"} />
                    </div>
                </section>

        </section>
      )
}