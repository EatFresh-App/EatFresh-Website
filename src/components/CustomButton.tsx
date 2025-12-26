/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "./ui/button";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
interface ButtonProps {
	name?: string | any;
	left_icon?: IconType;
	right_icon?: IconType;
	className?: string;
	iconClass?: string;
}

const CustomButton = ({
	name,
	left_icon,
	right_icon,
	className,
	iconClass,
	...rest
}: ButtonProps) => {
	const LeftIcon: IconType | any = left_icon;
	const RightIcon: IconType | any = right_icon;
	const base = `bg-transparent rounded-full text-white text-[15px] !px-5 !py-6 cursor-pointer hover:text-white transition-all ease-in-out duration-400 font-semibold`;
	return (
		<Button className={cn(base, className)} {...rest}>
			{left_icon && <LeftIcon className={cn("size-5 shrink-0", iconClass)} />}
			<span>{name}</span>
			{right_icon && <RightIcon className={cn("size-5 shrink-0", iconClass)} />}
		</Button>
	);
};

export default CustomButton;
