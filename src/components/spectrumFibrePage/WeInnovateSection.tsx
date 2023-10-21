import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const SingleComponent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Animate.ScaleIn className="w-full border border-[#306FB7] px-6 lg:px-8 rounded-[40px] h-full  flex justify-start flex-col text-left py-10 lg:py-12 gap-10">
      <div className="   w-full h-[8rem] flex items-center">
        <h1 className="text-[#0071BD] font-bold text-3xl  md:text-center">
          {title}
        </h1>
      </div>
      <div className="paragraphText1 text-[#234222]  h-full flex justify-start items-start w-full ">
        <div className="lg:text-center">{description}</div>
      </div>
    </Animate.ScaleIn>
  );
};

const WeInnovateSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="custom-container flex flex-col gap-10 lg:gap-24">
        <Animate.FadeUp className="text-[#0071BD] text-4xl md:text-7xl font-bold leading-snug md:text-center">
          We innovate to empower through;
        </Animate.FadeUp>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <SingleComponent
            title="Ghanaian Ownership and expertise"
            description="We are a proudly independent Ghanaian company. A demonstration of
        Public Private Partnership (PPP) at work in Ghana to transform the lives
        of Ghanaians."
          />
          <SingleComponent
            title="A Unique network"
            description="As a single network, we offer more reliability with next generation network design that comes with multiple rings for redundancy, faster connections, and tighter security than other available networks on the market."
          />
          <SingleComponent
            title="A Rich Solutions Portfolio"
            description="We provide dependable, affordable, and accessible solutions through innovation and customization for businesses of all sizes to drive growth through ICT solutions."
          />
        </div>
      </div>
    </section>
  );
};

export default WeInnovateSection;
