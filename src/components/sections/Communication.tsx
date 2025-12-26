import React from "react";
import Download_ShareBtn from "../Download_ShareBtn";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { Mic, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
interface Comm {
	image: string;
	name: string;
	info: string;
}

const Communication = () => {
	const commProps: Comm[] = [
		{
			name: "Meals for any category of appetite avaliable",
			info:
				"Taste the flavours of the world with our wide selection of restaurants — discover hidden gems.",
			image: "/comm-ex.png",
		},
		{
			name: "Your busy week taken care of ",
			info:
				"Tap, tap, done! Place the order with just a few clicks and pay with your preferred method.",
			image: "/comm2.png",
		},
		{
			name: "Its like having your personal Chef",
			info:
				"Follow your order’s journey from store to door. Stay updated at every stage with real-time notifications.",
			image: "/comm3.png",
		},
	];
	return (
		<div className="py-20 bg-[#191F28] px-3 sm:px-6 lg:px-10 2xl:px-0" id="benefits">
			<div className="max-w-[1400px] w-full mx-auto">
				<div className="flex flex-col gap-2">
					<p className="text-center text-white w-fit mx-auto font-medium text-xl">
						Instant Communication
					</p>
					<h1 className="text-center text-white w-fit mx-auto text-5xl max-w-lg font-bold">
						Its like having your personal Chef
					</h1>
					<p className="text-center text-white w-fit mx-auto font-medium text-xl max-w-3xl">
						Break down barriers and connect with people from all corners of the globe. LilyPad lets you
						dive into unique, unfiltered conversations, no matter where you are or who you’re hoping
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
									name="Audio Conversation"
									className="bg-[#2F3A4A] text-white cursor-auto !px-4 !py-5 hover:bg-[#2F3A4A] font-normal! cursor-default"
									left_icon={Mic}
									iconClass="size-4"
								/>
								<CustomButton
									name="Messaging"
									className="bg-[#2F3A4A] text-white cursor-auto !px-4 !py-5 hover:bg-[#2F3A4A] font-normal! cursor-default"
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

export default Communication;
