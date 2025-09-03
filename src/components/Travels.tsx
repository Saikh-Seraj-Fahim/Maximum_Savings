// import Image from "next/image";
// import { Inter } from "next/font/google";
// import { Montserrat } from "next/font/google";

// const interFont = Inter({
//     subsets: ["latin"],
//     weight: ["400", "500", "600", "700", "800", "900"]
// });
// const montSerrat = Montserrat({
//     subsets: ["latin"],
//     weight: ["400", "500", "600", "700", "800", "900"]
// });

// export default function Travels() {
//     return (
//         <div className="flex flex-col items-center justify-center pt-22">
//             <h1 className={`text-[#000000] font-extrabold text-5xl ${interFont.className}`}>Travels</h1>

//             <div className="flex items-center justify-center gap-8 pt-11">
//                 {/*Card*/}
//                 <div className="w-[352px] h-[313px] border-2 z-30">
//                     <div className="w-full h-[60%]">
//                         <Image src="/black_friday.jpg" alt="black_friday" width={352} height={246} />
//                     </div>
//                     <div className="w-full h-[40%] pl-6">
//                         <p className={`text-[#000000] font-bold pt-2 ${interFont.className}`}>Paucek and
//                             Lage – <span className="font-normal">Happy World Rainforest Day</span> 🌿</p>
//                         <div className="flex gap-5 pt-4">
//                             <button className="text-[#747474] ring-2 px-4 py-1">Redeem {'>>'}</button>
//                             <button className="text-[#747474] ring-2 px-4 py-1"><Image src="/badge.svg" alt="badge"
//                                 width={20} height={20} /></button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-[352px] h-[313px] border-2 z-30">
//                     <div className="w-full h-[60%]">
//                         <Image src="/black_friday.jpg" alt="black_friday" width={352} height={246} />
//                     </div>
//                     <div className="w-full h-[40%] pl-6">
//                         <p className={`text-[#000000] font-bold pt-2 ${interFont.className}`}>Paucek and
//                             Lage – <span className="font-normal">Happy World Rainforest Day</span> 🌿</p>
//                         <div className="flex gap-5 pt-4">
//                             <button className="text-[#747474] ring-2 px-4 py-1">Redeem {'>>'}</button>
//                             <button className="text-[#747474] ring-2 px-4 py-1"><Image src="/badge.svg" alt="badge"
//                                 width={20} height={20} /></button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-[352px] h-[313px] border-2 z-30">
//                     <div className="w-full h-[60%]">
//                         <Image src="/autumn_fashion_sale.jpg" alt="autumn_fashion_sale" width={352} height={246} />
//                     </div>
//                     <div className="w-full h-[40%] pl-6">
//                         <p className={`text-[#000000] font-bold pt-2 ${interFont.className}`}>Paucek and
//                             Lage – <span className="font-normal">Happy World Rainforest Day</span> 🌿</p>
//                         <div className="flex gap-5 pt-4">
//                             <button className="text-[#747474] ring-2 px-4 py-1">Redeem {'>>'}</button>
//                             <button className="text-[#747474] ring-2 px-4 py-1"><Image src="/badge.svg" alt="badge"
//                                 width={20} height={20} /></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <button className={`bg-[#00308F] text-[#FFFFFF] mt-12 px-6 py-2 rounded-sm ${montSerrat.className}`}>
//                 View All {'>>'}</button>
//         </div >
//     );
// }





import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import UserLandingPageCard from "./UserLandingPageCard";

const interFont = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"]
});
const montSerrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"]
});

export default function Travels() {
    return (
        <div className="flex flex-col items-center justify-center pt-22">
            <h1 className={`text-[#000000] font-bold text-5xl ${interFont.className}`}>Travels</h1>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-11">
                {/*Card*/}
                <UserLandingPageCard imageName="black_friday" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />

                <UserLandingPageCard imageName="rainforest_day" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />

                <UserLandingPageCard imageName="autumn_fashion_sale" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />
            </div>

            <button className={`bg-[#00308F] text-[#FFFFFF] mt-12 px-6 py-2 rounded-sm ${montSerrat.className}`}>
                View All {'>>'}</button>
        </div >
    );
}