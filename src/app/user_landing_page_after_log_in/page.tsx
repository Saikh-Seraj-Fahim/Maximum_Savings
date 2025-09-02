import BrowseCategories from "@/components/BrowseCategories";
import Fashion from "@/components/Fashion";
import NavAndHero from "@/components/NavAndHero";
import Travels from "@/components/Travels";

export default function UserLandingPageAfterLogIn() {
    return (
        <div>
            <NavAndHero />
            <BrowseCategories />
            <Fashion />
            <Travels/>
        </div>
    );
}
