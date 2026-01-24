import React from "react";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FootItem {
	name: string;
	link?: string;
}

interface FootSection {
	name: string;
	items: FootItem[];
}

const Footer = () => {
	const footData: FootSection[] = [
		{
			name: "Get EatFresh",
			items: [
				{
					name: "iPhone",
					link: "/",
				},
				{
					name: "Android",
					link: "/",
				},
			],
		},
		{
			name: "Need help",
			items: [
				{
					name: "EatFresh Commons",
					link:
						"https://benagos.notion.site/EatFresh-Commons-2dc3c9f91dc78061b3d6fe86b5c498a6?source=copy_link",
				},
				{
					name: "Community Guidelines",
					link:
						"https://benagos.notion.site/EatFresh-Community-Guidelines-TOS-2dc3c9f91dc7818c806ec25861954b59?source=copy_link",
				},
				{
					name: "Terms of Service",
					link:
						"https://benagos.notion.site/EatFresh-Terms-Condition-2dc3c9f91dc78131980cf91f315f94b1?source=copy_link",
				},
			],
		},
		{
			name: "Social",
			items: [
				{
					name: "TikTok",
					link: "https://www.tiktok.com/@benagoshq",
				},
				{
					name: "Instagram",
					link: "https://instagram.com/eatfresh_app",
				},
				{
					name: "X(Twitter)",
					link: "https://x.com/eatfresh_app",
				},
				{
					name: "Linkedin",
					link: "https://www.linkedin.com/showcase/eatfreshapp",
				},
			],
		},
		{
			name: "Contact",
			items: [
				{
					name: "Benagos Technologies LimitedLagos, Nigeria",
				},
				{
					name: "eatfresh@benagos.com",
				},
			],
		},
	];

	const altFootData: FootItem[] = [
		{
			name: "Report Kitchen",
			link:
				"https://benagos.notion.site/EatFresh-Support-Channels-2dc3c9f91dc781a8860ad6cce56c0b14?source=copy_link",
		},
		{
			name: "Privacy and Terms",
			link:
				"https://benagos.notion.site/EatFresh-Privacy-2dc3c9f91dc781a3a669d240df47c806?source=copy_link",
		},
		{
			name: "Contact LilyPad",
			link:
				"https://benagos.notion.site/EatFresh-Cookie-Policy-2e73c9f91dc780d6a211f46888946ebb?source=copy_link",
		},
		{
			name: "Brand Guide",
			link:
				"https://benagos.notion.site/EatFresh-Brand-Guide-2e73c9f91dc780dfa622f76dffd03dde?source=copy_link",
		},
	];

	return (
		<div className="bg-[#1D1E1F]">
			<div className="max-w-[1400px] w-full mx-auto px-3 sm:px-6 lg:px-10 2xl:px-0 h-auto">
				<div className="flex flex-col xl:flex-row justify-between w-full gap-10 xl:gap-0">
					<p className="max-w-xs text-sm font-light text-white -tracking-[0.2px]">
						EatFresh is a bulk meal delivery platform connecting people with trusted local chefs. We make
						it easy to eat well, save time, and plan your meals — without compromising freshness or
						quality.
					</p>

					<div className="flex flex-col sm:flex-row gap-8 lg:gap-12 2xl:gap-16">
						{footData?.map((f: FootSection, index: number) => (
							<div key={index}>
								<p className="font-semibold text-[15px] text-[#979797] -tracking-[0.5px]">{f?.name}</p>
								<div className="font-light text-[14px] text-white flex flex-col gap-3 sm:gap-4 mt-4">
									{f?.items?.map((m: FootItem, index: number) => (
										<Link
											href={m?.link ?? "#"}
											key={index}
											className={`${m?.link ? "cursor-pointer" : "cursor-auto"} hover:${
												m.link ? "text-brandRed" : "text-white"
											} transition-all ease-in-out duration-300`}
										>
											<p className="max-w-xs -tracking-[0.2px]">{m?.name}</p>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="max-w-[1400px] w-full mx-auto pb-20 px-3 sm:px-6 lg:px-10 2xl:px-0">
				<hr className="border-white opacity-10 my-10" />

				<p className="text-sm font-light text-[#A8A8A8]">
					EatFresh is a premium meal delivery platform for iOS and Android users connecting people with
					trusted local chefs who take pride in how food is prepared, packaged, and delivered. Built to
					support busy lifestyles without compromising freshness or quality, EatFresh makes it easy to
					plan meals ahead, eat consistently well, and build lasting relationships with chefs you can
					trust.
					<br /> <br />
					Designed and built by Benagos, a product studio focused on creating thoughtful, human-first
					digital experiences, EatFresh reflects a deep belief that good food should be reliable,
					transparent, and made with care. Every detail — from chef onboarding to delivery flow — is
					intentionally crafted to bring clarity, consistency, and confidence back to everyday meals.
				</p>
				<div className="my-10 justify-between w-full flex flex-col md:flex-row md:items-center gap-5">
					<p className="text-white font-light text-sm -tracking-[0.5px]">
						© EatFresh, {new Date().getFullYear()}. A Benagos Product
					</p>
					<div className="flex flex-wrap items-center">
						{altFootData.map((n: FootItem, index: number, arr: FootItem[]) => (
							<Link href={n.link ?? "#"} key={index} className="flex items-center">
								<p className="text-white text-sm font-light hover:text-brandRed ease-in-out transition-all duration-300 -tracking-[0.5px]">
									{n.name}
								</p>
								{index < arr.length - 1 && <Dot className="text-white size-5 mx-1" />}
							</Link>
						))}
					</div>
				</div>
				<div className="w-full mt-10 lg:mt-20">
					<Image
						src="/footer logo.svg"
						width={1200} // your image's natural width
						height={100} // your image's natural height
						alt="Footer Logo"
						className="w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
