import React from "react";
import Download_ShareBtn from "../Download_ShareBtn";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { Mic, MessageCircle, Globe, Heart, Radio, Star, Shuffle } from "lucide-react";
import { motion } from "framer-motion";
import { PiSquaresFourBold } from "react-icons/pi";
import { IconType } from "react-icons";

interface Comm {
	image: string;
	name: string;
	info: string;
	iconLeft: IconType;
	iconRight: IconType;
	iconLeftName: string;
	iconRightName: string;
}

const Communication = () => {
	const commProps: Comm[] = [
		{
			name: "Meals for any category of appetite avaliable",
			info:
				"From soups and stews to rice, pasta, and tubers — there’s something for every craving and lifestyle.",
			image: "/comm-ex.png",
			iconLeft: PiSquaresFourBold,
			iconRight: Globe,
			iconLeftName: "Various Categories",
			iconRightName: "Diverse",
		},
		{
			name: "Your busy week taken care of ",
			info:
				"Order once, eat well all week. EatFresh is built for people who value time, quality, and consistency.",
			image: "/comm2.png",
			iconLeft: Heart,
			iconRight: Radio,
			iconLeftName: "Convinence",
			iconRightName: "Reliable",
		},
		{
			name: "Its like having your personal Chef",
			info: "Send custom requests, or special instructions with notes in each meal specially for you.",
			image: "/comm3.png",
			iconLeft: Star,
			iconRight: Shuffle,
			iconLeftName: "Personalised",
			iconRightName: "Meal Subscription",
		},
	];
	return (
		<div className="py-20 bg-[#191F28] px-3 sm:px-6 lg:px-10 2xl:px-0" id="benefits">
			<div className="max-w-[1400px] w-full mx-auto">
				<div className="flex flex-col gap-2">
					<p className="text-center text-white w-fit mx-auto font-medium text-xl">
						Experience Lifestyle Comfort
					</p>
					<h1 className="text-center text-white w-fit mx-auto text-5xl max-w-lg font-bold">
						Its like having your personal Chef{" "}
					</h1>
					<p className="text-center text-white w-fit mx-auto font-medium text-xl max-w-[800px]">
						Experience the ease of having a chef who understands your taste, values quality ingredients,
						and prepares every meal with attention, care, and consistency.
					</p>
				</div>

				<Download_ShareBtn share_text_color="text-white" />

				<div className="flex flex-wrap xl:flex-nowrap justify-center gap-16 md:gap-8 xl:justify-between max-w-[1100px] mx-auto mt-14 sm:mt-20 lg:mt-30">
					{commProps?.map((d: Comm, index: number) => (
						<motion.div
							key={index}
							className="flex flex-col items-center-safe justify-center gap-4"
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<div className="relative w-full h-[250px] lg:w-[300px] lg:h-[300px] ">
								<Image src={d?.image} fill alt="" className="object-contain" />
							</div>
							<h1 className="text-center w-fit mx-auto text-white text-3xl max-w-[300px] font-semibold leading-8">
								{d?.name}
							</h1>
							<p className="text-center font-medium w-fit mx-auto text-white text-lg max-w-xs">
								{d?.info}
							</p>
							<div className="flex gap-4 mt-5">
								<CustomButton
									name={d?.iconLeftName}
									className="bg-[#2F3A4A] text-white cursor-auto !px-4 !py-5 hover:bg-[#2F3A4A] font-normal! cursor-default"
									left_icon={d?.iconLeft}
									iconClass="size-4"
								/>
								<CustomButton
									name={d?.iconRightName}
									className="bg-[#2F3A4A] text-white cursor-auto !px-4 !py-5 hover:bg-[#2F3A4A] font-normal! cursor-default"
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

export default Communication;
