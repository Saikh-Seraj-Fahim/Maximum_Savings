import { Montserrat } from "next/font/google";
import { Mr_Dafoe } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";

const montSerrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});
const mrDafoe = Mr_Dafoe({
    subsets: ["latin"],
    weight: "400",
});
const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

export default function NavAndHero() {
    return (
        <div>
            <div className="flex items-center justify-center">
                <p className={`text-black ${montSerrat.className} pt-4`}>WELCOME TO MAXIMUMSAVINGS!</p>
            </div>
            <nav className="flex justify-between pl-30 pr-30 pt-10">
                <div className="text-black flex gap-6">
                    <p className={`${mrDafoe.className} text-[#00308F]`}>Logo</p>
                    <p className={`${montSerrat.className}`}>Home</p>
                    <p className={`${montSerrat.className}`}>How It Works</p>
                    <p className={`${montSerrat.className}`}>Discover savings</p>
                    <p className={`${montSerrat.className}`}>About Us</p>
                    <p className={`${montSerrat.className}`}>Add Your business</p>
                    <p className={`${montSerrat.className}`}>FAQS</p>
                </div>
                <div className="flex gap-9">
                    <div className="relative">
                        <Image src="/notification.svg" alt="notification" width={30} height={30} />
                        <p className="absolute w-6 h-6 rounded-full text-center bg-[#FF0000] 
                        -top-1 -right-2">95</p>
                    </div>
                    <p className="text-[#00308F]">Hi,Annie</p>
                    <div className="w-12 h-12 relative">
                        <Image src="/User.jpg" alt="user" fill className="rounded-full object-cover 
                        ring-3 ring-[#00308F]"/>
                    </div>
                </div>
            </nav>

            <div className="relative w-full lg:h-[550px] pt-8 flex flex-col items-center justify-center">
                <video src={"/HomePageVideo.mp4"} autoPlay muted loop controls={false} className="absolute w-full h-full  
                object-cover"/>
                <div className="absolute w-full h-full z-10 bg-gray-800/40" /> {/*Overlay*/}

                <div className="absolute flex flex-col items-center justify-center gap-4 z-30">
                    <h1 className={`text-[#FFFFFF] font-extrabold text-5xl ${interFont.className}`}>Welcome To
                        Exclusive Discounts</h1>
                    <h1 className={`text-[#FFFFFF] font-extrabold text-5xl ${interFont.className}`}>& Savings</h1>
                    <p className={`text-[#FFFFFF] font-medium text-xl ${montSerrat.className}`}>Get access to
                        curated deals across various categories</p>
                    <button className={`ring-2 rounded-lg px-4 py-2 mt-4 ${montSerrat.className}`}>Discover savings</button>
                </div>
            </div>

            <div className="pt-12 flex sm:flex-col lg:flex-row items-center justify-center gap-8">
                <Image src="/1.jpg" alt="1" width={300} height={100} />
                <Image src="/2.jpg" alt="2" width={300} height={100} />
                <Image src="/3.jpg" alt="3" width={300} height={100} />
            </div>
        </div>
    );
}


