import Navbar from "@/components/Navbar";
import Communication from "@/components/sections/Communication";
import Discover from "@/components/sections/Discover";
import FAQs from "@/components/sections/FAQs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Safety from "@/components/sections/Safety";
import Subfooter from "@/components/sections/Subfooter";
import Vendors from "@/components/sections/Vendors";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="pt-19">
				<Hero />
				<Discover />
				<Communication />
				<Safety />
				<Vendors />
				<FAQs />
				<Subfooter />
				<Footer />
			</div>
		</>
	);
}
