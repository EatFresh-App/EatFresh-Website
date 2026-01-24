import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { Mic, MessageCircle, Phone, Smartphone } from "lucide-react";
import Download_ShareBtn from "../Download_ShareBtn";
import { motion } from "framer-motion";
import { LuYoutube } from "react-icons/lu";
import Link from "next/link";
import { IconType } from "react-icons";
import { PiChefHatBold } from "react-icons/pi";
import { FaSearchPlus } from "react-icons/fa";
import { Star, Zap, MapPin, Clock } from "lucide-react";
interface Disc {
	image: string;
	type: string;
	name: string;
	info: string;
	iconLeft: IconType;
	iconRight: IconType;
	iconLeftName: string;
	iconRightName: string;
}
const Discover = () => {
	const discProps: Disc[] = [
		{
			type: "FEEDS",
			name: "Discover vendors in a new way",
			info:
				"Explore chefs and kitchens through real meals, real stories, and real customer experiences.",
			image: "/disc1.png",
			iconLeft: PiChefHatBold,
			iconRight: FaSearchPlus,
			iconLeftName: "Discover Kitchen",
			iconRightName: "Discover Meals",
		},
		{
			type: "CHECKOUT",
			name: "Manage your dietary preference",
			info: "Choose spice levels, portions, and preferences easily — your meals, your way.",
			image: "/disc2.png",
			iconLeft: Star,
			iconRight: Zap,
			iconLeftName: "Personalised",
			iconRightName: "Fast Checkout",
		},
		{
			type: "ORDER DETAIL",
			name: "Track your order easily",
			info: "Follow your meal from preparation to delivery with real-time updates at every stage.",
			image: "/disc3.png",
			iconLeft: MapPin,
			iconRight: Clock,
			iconLeftName: "Track Delivery",
			iconRightName: "Progress Status",
		},
	];
	return (
		<div className="py-20 bg-white px-3 sm:px-6 lg:px-10 2xl:px-0" id="discover">
			<div className="max-w-[1400px] w-full mx-auto">
				<div className="flex flex-col gap-2">
					<p className="text-center text-brandBlack w-fit mx-auto font-medium text-xl">
						Your fridge always stocked
					</p>
					<h1 className="text-center text-brandBlack w-fit mx-auto text-5xl max-w-lg font-bold">
						Discover meals, order, and track in the app{" "}
					</h1>
					<p className="text-center text-brandBlack w-fit mx-auto font-medium text-xl max-w-[800px]">
						From kitchen to doorstep, EatFresh connects you with verified chefs who prepare meals just for
						you. Discover meals, place bulk orders, and track deliveries — all from one simple app.
					</p>
				</div>

				<div className="w-fit mx-auto flex flex-wrap justify-center gap-4 mt-4">
					<Link href="https://onelink.to/qfvgmm" target="_blank">
						<CustomButton
							name="Let’s see what the app is about"
							left_icon={Smartphone}
							className="text-white bg-brandRed hover:bg-transparent hover:text-black border-brandRed border-2 text-base !px-4"
						/>
					</Link>

					<Link href="https://youtu.be/SR__amDl1c8?si=ogKYznd7siev9wpq" target="_blank">
						<CustomButton
							name="Watch the video"
							left_icon={LuYoutube}
							className="text-black bg-transparent hover:bg-brandRed hover:text-white border-brandRed border-2 text-base !px-4"
						/>
					</Link>
				</div>

				<div className="flex flex-wrap xl:flex-nowrap justify-center gap-16 md:gap-8 xl:justify-between max-w-[1100px] mx-auto mt-14 sm:mt-20 lg:mt-30">
					{discProps?.map((d: Disc, index: number) => (
						<motion.div
							key={index}
							className="flex flex-col items-center-safe justify-center gap-4"
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<div className="relative w-[250px] h-[300px] lg:w-[260px] lg:h-[400px] ">
								<Image src={d?.image} fill alt="" className="object-contain" />
							</div>
							<p className="text-center font-medium w-fit mx-auto text-brandGray text-base">{d?.type}</p>
							<h1 className="text-center w-fit mx-auto text-brandGray text-2xl lg:text-3xl max-w-[250px] font-bold leading-6.5 lg:leading-8">
								{d?.name}
							</h1>
							<p className="text-center font-medium w-fit mx-auto text-brandGray text-lg max-w-xs">
								{d?.info}
							</p>
							<div className="flex gap-4 mt-5">
								<CustomButton
									name={d?.iconLeftName}
									className="bg-[#F2F5FA] text-black cursor-auto !px-4 !py-5 hover:bg-[#F2F5FA] hover:text-black! cursor-default font-medium!"
									left_icon={d?.iconLeft}
									iconClass="size-4"
								/>
								<CustomButton
									name={d?.iconRightName}
									className="bg-[#F2F5FA] text-black cursor-auto !px-4 !py-5 hover:bg-[#F2F5FA] hover:text-black! cursor-default font-medium!"
									left_icon={d?.iconRight}
									iconClass="size-4"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Discover;
