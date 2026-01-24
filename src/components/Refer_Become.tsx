import React from "react";
import { ChefHat, ArrowUpRight } from "lucide-react";
import CustomButton from "./CustomButton";
import { PiChefHatBold } from "react-icons/pi";
import Link from "next/link";

interface Button {
	recommend_text_color?: string;
	fresh_vendor_text_color_hover?: string;
}
const Refer_Become = ({ recommend_text_color, fresh_vendor_text_color_hover }: Button) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 w-fit mx-auto mt-9">
			<CustomButton
				name="Become a FreshVendor"
				left_icon={PiChefHatBold}
				className={`bg-brandRed border-2 border-brandRed text-white hover:bg-transparent ${
					fresh_vendor_text_color_hover ?? "hover:text-black"
				}  text-base`}
			/>
			<Link href="https://forms.gle/udi5LTx9PKvfVojPA" target="_blank">
				<CustomButton
					name="Recommend someone as a vendor"
					right_icon={ArrowUpRight}
					className={`border-2 border-brandRed bg-transparent ${
						recommend_text_color ?? "text-black"
					} hover:bg-brandRed text-base`}
				/>
			</Link>
		</div>
	);
};

export default Refer_Become;
