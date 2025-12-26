import React from "react";
import Refer_Become from "../Refer_Become";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { Mic, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
interface Vend {
	image: string;
	type: string;
	name: string;
	info: string;
}

const Vendors = () => {
	const vendProps: Vend[] = [
		{
			type: "DELIVERY GUARANTEED",
			name: "Own your business, Deliver your way",
			info:
				"Our offerings are flexible so you can customize them to your needs. Get started with your delivery people",
			image: "/vend1.svg",
		},
		{
			type: "VISIBILITY",
			name: "Boost your visibility & Unlock new growth",
			info: "Stand out with in-app marketing to reach even more customers and increase sales.",
			image: "/vend2.jpg",
		},
		{
			type: "ORDER MANAGEMENT",
			name: "Connect with customers",
			info:
				"Turn customers into regulars with actionable data insights, respond to reviews or offer a loyalty program.",
			image: "/vend3.jpg",
		},
	];

	return (
		<div className="py-20 bg-brandLightRed px-3 sm:px-6 lg:px-10 2xl:px-0" id="vendor">
			<div className="max-w-[1400px] w-full mx-auto">
				<div className="flex flex-col gap-2">
					<p className="text-center text-white w-fit mx-auto font-medium text-xl">Kitchen / Vendors </p>
					<h1 className="text-center text-white w-fit mx-auto text-5xl max-w-2xl font-bold">
						Why roll with us as a FreshVendor?{" "}
					</h1>
					<p className="text-center text-white w-fit mx-auto font-medium text-lg max-w-3xl">
						Break down barriers and connect with people from all corners of the globe. LilyPad lets you
						dive into unique, unfiltered conversations, no matter where you are or who you’re hoping
					</p>
				</div>

				<Refer_Become recommend_text_color="text-white" fresh_vendor_text_color_hover="text-white" />

				<div className="flex flex-wrap xl:flex-nowrap justify-center gap-16 md:gap-8 xl:justify-between max-w-[1100px] mx-auto mt-14 sm:mt-20 lg:mt-30">
					{vendProps?.map((d: Vend, index: number) => (
						<motion.div
							key={index}
							className="flex flex-col items-center justify-center gap-4"
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<div className="relative w-full lg:w-[250px] h-[200px] lg:h-[250px] rounded-xl overflow-hidden">
								<Image src={d?.image} fill alt="" className="object-cover overflow-hidden" />
							</div>
							<p className="text-center font-medium w-fit mx-auto text-white text-base">{d?.type}</p>
							<h1 className="text-center w-fit mx-auto text-white text-2xl lg:text-3xl max-w-[280px] font-bold leading-6.5 lg:leading-8">
								{d?.name}
							</h1>
							<p className="text-center font-normal w-fit mx-auto text-white text-lg max-w-[300px] mb-5">
								{d?.info}
							</p>
							<div className="flex gap-4 mt-auto">
								<CustomButton
									name="Audio Conversation"
									className="bg-[rgba(255,255,255,0.2)] text-white cursor-auto !px-4 !py-5 hover:bg-[rgba(255,255,255,0.2)] hover:text-white cursor-default font-normal!"
									left_icon={Mic}
									iconClass="size-4"
								/>
								<CustomButton
									name="Messaging"
									className="bg-[rgba(255,255,255,0.2)] text-white cursor-auto !px-4 !py-5 hover:bg-[rgba(255,255,255,0.2)] hover:text-white cursor-default font-normal!"
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

export default Vendors;
