import React from "react";
import CustomButton from "../CustomButton";
import Refer_Become from "../Refer_Become";
import Image from "next/image";

interface Safe {
	type: string;
	name: string;
	info: string;
}

const Safety = () => {
	const safeProps: Safe[] = [
		{
			type: "CERTIFICATION",
			name: "Vendors on our platform are Food Safety Certified",
			info: "Food safety certified and quality-checked before onboarding.",
		},
		{
			type: "PACKAGING",
			name: "Our vendors are required to make sure your orders are safe",
			info: "Meals are packaged securely to preserve freshness and prevent contamination.",
		},
		{
			type: "VENDOR EDUCATION",
			name: "EatFresh continuous ongoing food safety education",
			info:
				"EatFresh provides continuous food safety guidance and best-practice resources for our chefs.",
		},
	];
	return (
		<div className="py-20 bg-white px-3 sm:px-6 lg:px-10 2xl:px-0" id="safety">
			<div className="max-w-[1400px] w-full mx-auto">
				<div className="flex flex-col gap-2">
					<p className="text-center text-[#1f1f1f] w-fit mx-auto font-medium text-xl">
						Your Food Safety{" "}
					</p>
					<h1 className="text-center text-[#1f1f1f] w-fit mx-auto text-5xl max-w-2xl font-bold">
						The health + safety of our community will always come first{" "}
					</h1>
					<p className="text-center text-[#636364] w-fit mx-auto font-medium text-xl max-w-[750px]">
						Every chef on EatFresh cooks with care, responsibility, and strict hygiene standards. We work
						closely with our vendors to ensure meals are prepared, packaged, and delivered safely — every
						single time.
					</p>
				</div>

				<Refer_Become />
				<div className="rounded-3xl overflow-hidden mt-14 sm:mt-20">
					<Image
						src="/safe.jpg"
						alt=""
						className="object-cover mx-auto rounded-2xl overflow-hidden"
						style={{ overflow: "hidden" }}
						width={1100}
						height={300}
					/>
				</div>

				<div className="flex flex-wrap xl:flex-nowrap justify-center gap-16 md:gap-8 xl:justify-between max-w-[1100px] mx-auto mt-14 sm:mt-20 lg:mt-30">
					{safeProps?.map((d: Safe, index: number) => (
						<div key={index} className="flex flex-col items-center-safe justify-center gap-3">
							<p className="text-center font-medium w-fit mx-auto text-[#1F1F1F] text-base">{d?.type}</p>
							<h1 className="text-center w-fit mx-auto text-[#1F1F1F] text-3xl max-w-[270px] font-bold leading-8">
								{d?.name}
							</h1>
							<p className="text-center font-medium w-fit mx-auto text-[#636364] text-lg max-w-[300px] leading-6">
								{d?.info}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Safety;
