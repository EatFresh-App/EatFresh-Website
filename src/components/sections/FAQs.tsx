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
			name: "Is my identity really anonymous on LilyPad?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Are my conversations secure on LilyPad",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Can I report inappropriate behavior?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "How are matches made?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Do I need to create an account to use LilyPad?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Is there an age restriction for using LilyPad?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Is LilyPad Free to Use?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
	];

	return (
		<div className="py-20 bg-white px-3 sm:px-6 lg:px-10 2xl:px-0" id="faqs">
			<div className="max-w-[1400px] w-full mx-auto">
				<div className="flex flex-col gap-4">
					<p className="text-center text-brandBlack w-fit mx-auto font-medium text-xl">FAQs </p>
					<h1 className="text-center text-brandBlack w-fit mx-auto text-5xl max-w-lg font-bold">
						Likely Questions You May Have{" "}
					</h1>
					<p className="text-center text-brandBlack w-fit mx-auto font-medium text-xl max-w-3xl">
						LilyPad prioritizes your security and peace of mind. Every conversation is protected with
						end-to-end encryption, and we provide tools to ensure a safe and respectful experience every
						time you connect.
					</p>
					<CustomButton
						name={
							<span>
								Cannot find what you need? <br className="sm:hidden" />
								Send us a message
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
