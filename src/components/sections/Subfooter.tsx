import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Sub {
	name: string;
	icon: string;
}
const Subfooter = () => {
	const subFooter: Sub[] = [
		{ name: "Download for iPhone", icon: "/appstore.png" },
		{ name: "Download for Android", icon: "/play.svg" },
	];
	return (
		<div className="py-20 bg-[#1D1E1F] px-3 sm:px-6 lg:px-10 2xl:px-0">
			<div className="max-w-[1400px] w-full mx-auto bg-[#1D1E1F]">
				<div className="flex flex-col gap-2">
					<p className="text-center text-white w-fit mx-auto font-medium text-xl">Get EatFresh </p>
					<h1 className="text-center text-white w-fit mx-auto text-5xl max-w-lg font-bold">
						Your favourite meal, delivered fresh.{" "}
					</h1>
				</div>
				<div className="flex flex-col sm:flex-row gap-6 mt-10 mb-20 items-center justify-center w-fit mx-auto">
					{subFooter?.map((m: Sub, index: number) => (
						<div
							key={index}
							className="bg-white rounded-full px-4 py-3 flex items-center w-full sm:w-fit gap-2.5 cursor-pointer justify-center"
						>
							<div className="w-[21px] h-[20px] relative">
								<Image src={m?.icon} fill alt="" className="object-contain" />
							</div>
							<p className="text-black text-[18px] font-semibold ">{m?.name}</p>
						</div>
					))}
				</div>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true }}
				>
					<Image
						src="/phone2.png"
						width={1000}
						height={300}
						className="object-cover mx-auto mt-10"
						alt=""
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Subfooter;
