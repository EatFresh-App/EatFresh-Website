/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { TbMenu, TbX } from "react-icons/tb";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Navbar = () => {
	// const [activeLang, setActiveLang] = useState("English");
	const [menuOpen, setMenuOpen] = useState(false);
	const [langOpen, setLangOpen] = useState(false);

	const navs = [
		{ name: "Discover", link: "#discover" },
		{ name: "Benefits", link: "#benefits" },
		{ name: "Food Safety", link: "#safety" },
		{ name: "FAQs", link: "#faqs" },
	];

	return (
		<div className="fixed left-0 right-0 py-4 w-full backdrop-blur-md px-3 sm:px-6 lg:px-10 2xl:px-0 z-20 bg-[rgba(25,31,40,0.5)]">
			{/* mobile sidebar */}
			<AnimatePresence mode="wait">
				{menuOpen && (
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 50, opacity: 0 }}
						transition={{ ease: easeInOut, duration: 0.3 }}
						className="fixed left-0 top-0 w-full min-h-screen bg-[rgba(0,0,0,0.7)] z-40 p-2"
					>
						<div className="bg-[#111111] p-4 max-w-md ml-auto min-h-screen">
							<div className="flex flex-row-reverse justify-between items-center w-full">
								<TbX className="text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)} />
								{/* <Select onValueChange={(value: any) => setActiveLang(value)} value={activeLang}>
									<SelectTrigger className="w-fit !bg-[#38424A] rounded-full px-3 py-[22px] focus-visible:ring-0 border-0 border-transparent cursor-pointer flex lg:hidden ">
										<div className="flex items-center gap-[10px]">
											<Globe className="text-white size-4" />
											<p className="text-white text-sm capitalize">{activeLang}</p>
										</div>
									</SelectTrigger>
									<SelectContent
										position="popper"
										className="bg-[#111111] text-white border-0 border-transparent focus-visible:border-0"
									>
										<SelectGroup>
											{[{ name: "English" }, { name: "French" }, { name: "German" }]?.map(
												(l: any, index: number) => (
													<SelectItem
														value={l?.name.toLowerCase()}
														key={index}
														className="hover:bg-[#333333]! hover:text-white! cursor-pointer"
													>
														{l?.name}
													</SelectItem>
												)
											)}
										</SelectGroup>
									</SelectContent>
								</Select> */}
							</div>
							<div className="flex flex-col gap-8 mt-12 md:hidden">
								{navs?.map((n: any, index: number) => (
									<Link href={n?.link} key={index} onClick={() => setMenuOpen(!menuOpen)}>
										<p className="text-white text-end text-xl hover:text-brandGreen transition-all ease-in-out duration-300 ">
											{n?.name}
										</p>
									</Link>
								))}
							</div>

							<div className="mt-10 md:mt-14 flex flex-col gap-4">
								<Link href="#vendor" className="ml-auto w-fit">
									<CustomButton
										name="Become a FreshVendor"
										className="border-brandRed border-2 bg-transparent text-white hover:bg-brandRed text-base font-medium !py-6 "
									/>
								</Link>

								<div className="flex items-center gap-[13px] bg-white rounded-full overflow-hidden h-auto px-5 cursor-pointer w-fit ml-auto py-3">
									<div className="relative w-[22px] h-[22px]">
										<Image src="/appstore.png" fill alt="" style={{ objectFit: "contain" }} />
									</div>
									<div className="relative w-[22px] h-[22px]">
										<Image src="/play.svg" fill alt="" style={{ objectFit: "contain" }} />
									</div>
									<p className="text-lg font-medium text-black ">Download App</p>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* web navbar */}
			<motion.div
				className="max-w-[1400px] w-full mx-auto flex justify-between items-center"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -50, opacity: 0 }}
				transition={{ ease: easeInOut, duration: 0.3 }}
			>
				{/* navs & button */}
				<div className="flex items-center gap-9">
					<div className="w-[134px] h-[23px] relative">
						<Image src="/logo.svg" className="object-contain" alt="" fill />
					</div>
					{/* navs */}
					<div className="md:flex gap-6 items-center hidden">
						{navs?.map((n: any, index: number) => (
							<Link
								key={index}
								href={n.link}
								className="text-white font-normal text-lg hover:text-brandRed transition-all ease-in-out duration-300 "
							>
								{n.name}
							</Link>
						))}
					</div>

					<Link href="#vendor" className="hidden xl:flex">
						<CustomButton
							name="Become a FreshVendor"
							className="border-brandRed border-2 bg-transparent text-white hover:bg-brandRed text-base font-medium !py-5 "
						/>
					</Link>
				</div>

				{/* translate & download */}
				<div className="items-stretch gap-4 flex">
					{/* translate */}
					<div className="relative">
						{/* <div
							className="w-fit !bg-[#38424A] rounded-full px-3 py-3.2 focus-visible:ring-0 border-0 border-transparent cursor-pointer hidden lg:flex"
							onClick={() => setLangOpen(!langOpen)}
						>
							<div className="flex items-center gap-[8px]">
								<Globe className="text-white size-4" />
								<p className="text-white text-sm capitalize">{activeLang}</p>
								<ChevronDown className={`text-white size-4 ${langOpen ? "rotate-180" : "rotate-0"}`} />
							</div>
						</div> */}

						{/* {langOpen && (
							<div className="bg-black rounded-xl p-2 absolute top-14 w-full">
								{[{ name: "English" }, { name: "French" }, { name: "German" }]?.map(
									(l: any, index: number) => (
										<div
											key={index}
											className="hover:bg-[#222222] hover:text-white! cursor-pointer px-2 py-1 transition-all ease-in-out duration-300 rounded-sm"
											onClick={() => {
												setActiveLang(l?.name), setLangOpen(false);
											}}
										>
											{l?.name}
										</div>
									)
								)}
							</div>
						)} */}
					</div>

					{/* download */}
					<div className="xl:flex items-center gap-[13px] py-2.5 bg-white rounded-full overflow-hidden h-auto px-5 cursor-pointer w-fit ml-auto hidden">
						<div className="relative w-[22px] h-[22px]">
							<Image src="/appstore.png" fill alt="" style={{ objectFit: "contain" }} />
						</div>
						<div className="relative w-[22px] h-[22px]">
							<Image src="/play.svg" fill alt="" style={{ objectFit: "contain" }} />
						</div>
						<p className="text-base font-medium text-black ">Download App</p>
					</div>

					{/* menu button */}
					<div
						className="bg-[rgba(255,255,255,0.2)] py-2 sm:py-[10px] px-3 sm:px-4 rounded-full flex gap-2 items-center xl:hidden "
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<AnimatePresence>
							<TbMenu className="text-white text-2xl" />
						</AnimatePresence>
						<p className="text-white text-base sm:text-lg">MENU</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Navbar;
