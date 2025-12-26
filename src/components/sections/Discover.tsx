import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { Mic, MessageCircle } from "lucide-react";
import Download_ShareBtn from "../Download_ShareBtn";
import { motion } from "framer-motion";
interface Disc {
	image: string;
	type: string;
	name: string;
	info: string;
}
const Discover = () => {
	const discProps: Disc[] = [
		{
			type: "FEEDS",
			name: "Discover vendors in a new way",
			info:
				"Taste the flavours of the world with our wide selection of restaurants — discover hidden gems.",
			image: "/disc1.png",
		},
		{
			type: "CHECKOUT",
			name: "Manage your dietary preference",
			info:
				"Tap, tap, done! Place the order with just a few clicks and pay with your preferred method.",
			image: "/disc2.png",
		},
		{
			type: "ORDER DETAIL",
			name: "Track your order easily",
			info:
				"Follow your order’s journey from store to door. Stay updated at every stage with real-time notifications.",
			image: "/disc3.png",
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
					<p className="text-center text-brandBlack w-fit mx-auto font-medium text-xl max-w-3xl">
						Break down barriers and connect with people from all corners of the globe. LilyPad lets you
						dive into unique, unfiltered conversations, no matter where you are or who you’re hoping{" "}
					</p>
				</div>

				<Download_ShareBtn />

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
									name="Audio Conversation"
									className="bg-[#F2F5FA] text-black cursor-auto !px-4 !py-5 hover:bg-[#F2F5FA] hover:text-black! cursor-default font-normal!"
									left_icon={Mic}
									iconClass="size-4"
								/>
								<CustomButton
									name="Messaging"
									className="bg-[#F2F5FA] text-black cursor-auto !px-4 !py-5 hover:bg-[#F2F5FA] hover:text-black! cursor-default font-normal!"
									left_icon={MessageCircle}
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
