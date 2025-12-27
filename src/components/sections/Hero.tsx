/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
const Hero = () => {
	const notifications = ["/notification.png", "/notification2.png", "/notification3.png"];
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % notifications.length); // cycle
		}, 4000); // 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="bg-[url('/hero-bg.webp')] w-full bg-cover bg-center pt-20 pb-20 lg:pb-0">
			<div className=" w-full flex justify-between max-w-[1400px] mx-auto h-auto px-3 sm:px-6 lg:px-10 2xl:px-0 overflow-hidden lg:pt-2">
				<div className="w-full lg:w-fit lg:mt-16">
					<motion.p
						className="text-white text-[22px] font-medium -tracking-[1px] text-center lg:text-start"
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
					>
						Nigeria’s No 1 Food App
					</motion.p>
					<motion.h1
						className="text-white text-5xl sm:text-6xl xl:text-7xl font-bold leading-12 sm:leading-16 mt-2 text-center lg:text-start"
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
					>
						Your everyday
						<br className="hidden sm:block" /> meals <span className="text-brandRed">freshly made </span>
						<br className="hidden sm:block" />
						just for you
					</motion.h1>

					<motion.div className="flex flex-col sm:flex-row gap-3 mt-10 items-center justify-center w-full sm:w-fit mx-auto lg:mx-0">
						{[
							{ name: "Download for iPhone", icon: "/appstore.png" },
							{ name: "Download for Android", icon: "/play.svg" },
						]?.map((m: any, index: number) => (
							<motion.div
								key={index}
								className="bg-white rounded-full px-4 py-3.5 flex items-center w-full sm:w-fit gap-2.5 cursor-pointer justify-center"
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.3, ease: "easeIn", delay: 0.8 }}
							>
								<div className="w-[21px] h-[20px] relative">
									<Image src={m?.icon} fill alt="" className="object-contain" />
								</div>
								<p className="text-black text-[18px] font-semibold ">{m?.name}</p>
							</motion.div>
						))}
					</motion.div>

					{/* achievements */}
					<motion.div
						className="flex flex-col items-center gap-5 sm:flex-row sm:items-stretch sm:gap-1 mt-16 mx-auto w-fit lg:mx-0"
						initial={{ y: 0, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeIn", delay: 1 }}
					>
						{/* achievement 1 */}
						<div className="flex items-stretch sm:-ml-2">
							<div className="relative w-14 h-auto">
								<Image src="/flower.png" alt="" fill className="object-contain" />
							</div>

							<div className="flex flex-col justify-center items-center gap-1">
								<p className="text-white text-base font-light text-center">4.2 out of 5 rating</p>
								<Image src="/star.svg" alt="" className="object-cover" width={90} height={15} />
								<Image src="/tag.png" alt="" className="object-cover" width={130} height={20} />
							</div>
							<div className="relative w-14 h-auto">
								<Image src="/flower2.png" alt="" fill className="object-contain" />
							</div>
						</div>

						{/* achievement 2 */}

						<div className="flex items-stretch">
							<div className="relative w-14 h-auto">
								<Image src="/flower.png" alt="" fill className="object-contain" />
							</div>

							<div className="flex flex-col justify-center items-center gap-1">
								<p className="text-white text-lg font-semibold text-center mx-auto w-fit">7,000+</p>
								<p className="text-sm font-light text-center mx-auto -mt-1 text-white">
									Meals delivered right
									<br /> to your door
								</p>
							</div>
							<div className="relative w-14 h-auto">
								<Image src="/flower2.png" alt="" fill className="object-contain" />
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					className="hidden lg:block pt-6"
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeIn", delay: 0.4 }}
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={notifications[current]} // important for AnimatePresence
							className="relative w-[350px] h-[80px] -ml-55 -mb-6 xl:-mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							<Image src={notifications[current]} alt="" fill className="object-cover" />
						</motion.div>
					</AnimatePresence>
					<div className="relative w-[420px] h-[540px]">
						<Image src="/phone.png" alt="" fill className="object-contain" />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
