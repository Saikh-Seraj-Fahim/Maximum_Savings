import BrowseCategories from "@/components/BrowseCategories";
import Fashion from "@/components/Fashion";
import Finance from "@/components/Finance";
import HomeAndLifestyle from "@/components/HomeAndLifestyle";
import NavAndHero from "@/components/NavAndHero";
import Travels from "@/components/Travels";

export default function UserLandingPageAfterLogIn() {
    return (
        <div>
            <NavAndHero />
            <BrowseCategories />
            <Fashion />
            <Travels />
            <HomeAndLifestyle />
            <Finance />
        </div>
    );
}
