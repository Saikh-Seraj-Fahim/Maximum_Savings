import { Inter, Poppins } from "next/font/google";
import Image from "next/image";

const interFont = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"]
});
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"]
});

export default function BlogPage() {
    return (
        <div className="pt-8 pl-12 pr-12">
            <div className={`text-[#00308F] font-extrabold text-3xl ${interFont.className}`}>
                <h1>Connect with a dedicated audience of NHS staff, </h1>
                <h1>emergency and key frontline personnel.</h1>
            </div>
            <p className={`text-[#000000] pt-4 ${poppinsFont.className}`}>Connect with a dedicated audience of NHS staff,
                emergency service workers, and key frontline personnel. By offering exclusive discounts, you’ll not only
                boost brand visibility but also build meaningful loyalty with real customers who appreciate your support.
                Join thousands of businesses already benefiting from our trusted network.</p>

            <div className="pt-6">
                <div className="max-w-[1800px] h-[700px] relative">
                    <Image src="/blog/blog.jpg" alt="blog" fill/>
                </div>
            </div>


        </div>
    );
}
