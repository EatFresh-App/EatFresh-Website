import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Share2, Users } from "lucide-react";
import Link from "next/link";

interface BtnProps {
	share_text_color?: string;
}

const Download_ShareBtn = ({ share_text_color }: BtnProps) => {
	return (
		<Link href="https://onelink.to/qfvgmm" target="_blank">
			<div className="flex flex-col lg:flex-row gap-4 w-fit mx-auto mt-9">
				<div className="flex items-center justify-center gap-[13px] bg-[#2A2C2F] rounded-full overflow-hidden h-auto px-5 cursor-pointer w-full lg:w-fit ml-auto py-4 lg:py-0">
					<div className="relative w-[22px] h-[22px]">
						<Image src="/appstore.png" fill alt="" style={{ objectFit: "contain" }} />
					</div>
					<div className="relative w-[22px] h-[22px]">
						<Image src="/play.svg" fill alt="" style={{ objectFit: "contain" }} />
					</div>
					<p className="text-base font-medium text-white ">Download App</p>
				</div>
				<CustomButton
					name="Share App to Friends"
					left_icon={Users}
					right_icon={Share2}
					className={`border-2 border-brandRed ${
						share_text_color ?? "text-black"
					} hover:bg-brandRed text-base`}
				/>
			</div>
		</Link>
	);
};

export default Download_ShareBtn;
