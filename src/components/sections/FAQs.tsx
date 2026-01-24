import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import CustomButton from "../CustomButton";
import { MessageCircle } from "lucide-react";
const FAQs = () => {
	const faqs: { name: string; note: string }[] = [
		{
			name: "What is EatFresh?",
			note:
				"EatFresh is a bulk meal delivery platform that connects you with trusted local chefs who prepare fresh meals in advance and deliver them to you. It’s designed to help you eat well throughout the week without the daily stress of cooking or last-minute food orders.",
		},
		{
			name: "How does ordering on EatFresh work?",
			note:
				"You browse meals from verified chefs, choose your preferred portions and options, place an order, and track it in real time. Meals are prepared in bulk and delivered according to the stated delivery timeline, making weekly meal planning simple and reliable.",
		},
		{
			name: "Are the chefs and kitchens on EatFresh verified?",
			note:
				"Yes. Every chef and kitchen on EatFresh goes through a vetting process that includes food safety checks, quality reviews, and onboarding standards before being approved to sell on the platform.",
		},
		{
			name: "Can I customise my meals?",
			note:
				"Absolutely. You can select portion sizes, spice levels, and other available options depending on the meal. Some chefs also allow special instructions, which you can share directly during your order.",
		},
		{
			name: "How do deliveries work and when will I receive my meals?",
			note:
				"Delivery timelines vary by chef and meal type, but you’ll always see an estimated delivery date before placing an order. You can track your order from preparation to delivery and receive updates at every stage.",
		},
		{
			name: "Is EatFresh suitable for busy schedules or meal planning?",
			note:
				"Yes. EatFresh is built for people who want consistency and convenience. By ordering meals in bulk, you reduce daily decision-making, save time, and always have food ready when you need it.",
		},
		{
			name: "How does EatFresh ensure food quality and safety?",
			note:
				"Food safety is a top priority. Chefs are required to follow strict hygiene standards, use proper packaging, and maintain quality throughout preparation and delivery. EatFresh also provides ongoing food safety guidance to vendors to ensure consistent standards.",
		},
	];

	return (
		<div className="py-20 bg-white px-3 sm:px-6 lg:px-10 2xl:px-0" id="faqs">
			<div className="max-w-[1400px] w-full mx-auto">
				<div className="flex flex-col gap-4">
					<p className="text-center text-brandBlack w-fit mx-auto font-medium text-xl">FAQs </p>
					<h1 className="text-center text-brandBlack w-fit mx-auto text-5xl max-w-md font-bold">
						Likely Questions You May Have{" "}
					</h1>
					<p className="text-center text-brandBlack w-fit mx-auto font-medium text-xl">
						Everything you need to know about ordering, deliveries, vendors, and food safety on EatFresh.
					</p>
					<CustomButton
						name={
							<span>
								Cannot find what you need? <br className="sm:hidden" />
								Send us an email
							</span>
						}
						right_icon={MessageCircle}
						className={`border-2 border-brandRed bg-transparent mx-auto w-full sm:max-w-md
				 text-black
				 hover:bg-brandRed text-base !py-7.5 sm:!py-6`}
						iconClass="hidden sm:block"
					/>
				</div>

				{/* faqs */}
				<Accordion type="single" collapsible className="max-w-[900px] mx-auto mt-14">
					{faqs?.map((n: { name: string; note: string }, index: number) => (
						<AccordionItem value={n?.name} key={index} className="border-b-[1px] border-[#C8CEDE]">
							<AccordionTrigger className="text-lg font-medium! text-black cursor-pointer hover:no-underline">
								{n?.name}
							</AccordionTrigger>
							<AccordionContent className="!font-light">
								<p className="font-light text-black! text-base opacity-50">{n?.note}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FAQs;
