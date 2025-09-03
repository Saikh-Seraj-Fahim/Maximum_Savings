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

export default function Finance() {
    return (
        <div className="flex flex-col items-center justify-center pt-22">
            <h1 className={`text-[#000000] font-bold text-5xl ${interFont.className}`}>Finance</h1>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-11">
                {/*Card*/}
                <UserLandingPageCard imageName="fashion1" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />

                <UserLandingPageCard imageName="fashion2" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />

                <UserLandingPageCard imageName="fashion3" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />
            </div>

            <button className={`bg-[#00308F] text-[#FFFFFF] mt-12 px-6 py-2 rounded-sm ${montSerrat.className}`}>
                View All {'>>'}</button>
        </div >
    );
}

