import React from "react";
import useMeasure from "react-use-measure";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Animate } from "../animations/ScrollAnimator";

const SingleSection = ({
  title,
  description,
  className,
  imgURL,
  txtPosition,
}: {
  title: string;
  description: string[];
  className?: string | string[];
  imgURL: string;
  txtPosition?: "left" | "right";
}) => {
  const [container, { height }] = useMeasure();
  console.log("debug", height);
  return (
    <Animate.FadeUp>
      <div
        className={`relative  border-yellow-500 mb-8 md:hidden  ${className}`}
        style={{ minHeight: `${height + 225}px` }}
      >
        <img
          src={imgURL}
          className="rounded-[50px] object-cover  w-full h-[22rem] px-2 absolute z-10"
        />
        <div
          className=" h-fit bg-[#EDEDED]  rounded-[40px] absolute w-full top-[14rem] pt-[9rem] pb-8"
          ref={container}
        >
          <div className=" text-[#234222] px-4 flex flex-col gap-6">
            <h1 className="font-semibold text-4xl  text-[#0071BD]">{title}</h1>
            <div className="text-xl leading-normal ">
              {description.map((item, _x) => (
                <div className="flex items-start  gap-3 my-1" key={_x}>
                  <div className="mt-1">
                    <HiOutlineArrowNarrowRight size={24} />{" "}
                  </div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex h-full w-full justify-between  bg-[#EDEDED]  rounded-[80px] p-5  ">
        <div
          className={`text-[#234222] w-full    ${
            txtPosition === "right" && "order-last"
          } `}
        >
          <div className="flex flex-col gap-4 justify-center  h-full  px-16 ">
            <h1 className="font-semibold text-5xl text-[#0071BD] leading-[3.4rem]">
              {title}
            </h1>
            <div className="text-lg leading-normal">
              {description.map((item, _x) => (
                <div className="flex   gap-3 items-start my-2" key={_x}>
                  <div className="mt-1">
                    <HiOutlineArrowNarrowRight size={24} />
                  </div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full ">
          <img
            src={imgURL}
            className="rounded-[80px] object-cover h-[25rem]  w-full   "
          />
        </div>
      </div>
    </Animate.FadeUp>
  );
};

const AreaOfExpertiseSection = () => {
  return (
    <section className="py-20  bg-white" id="solutions">
      <div className="custom-container">
        <div>
          <Animate.FadeUp className="text-[2.9rem] md:text-8xl leading-[4rem] md:leading-[7rem] text-transparent bg-clip-text font-bold bg-gradient-to-l from-[#306FB7] to-[#2A4125] px-6 sm:px-0 ">
            Our Services
          </Animate.FadeUp>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-12 md:gap-20 ">
          <SingleSection
            title="WAN and Leased Line Services"
            imgURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697883086/bsl-website/spectrum-fibre/SFC_4_xbrcye.png"
            description={[
              "Enjoy dedicated, secure point-to-point and wide area network connections for all bandwidth needs.",
            ]}
          />

          <SingleSection
            title="Cross-Border Connectivity"
            imgURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697883527/bsl-website/spectrum-fibre/cros-border_aflfxu.png"
            txtPosition={"right"}
            description={[
              "Unlock new frontiers with Spectrum Fibre’s Cross-Border Connectivity. Seamlessly link West African nations and neighboring countries, facilitating efficient bulk data transfer",
            ]}
          />
          <SingleSection
            title="Metro and Backbone Services"
            imgURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697883527/bsl-website/spectrum-fibre/metro_zt5jvy.png"
            description={[
              "Elevate your network with Spectrum Fibre’s Metro and Backbone Services, delivering seamless, high-speed connectivity within urban areas and across regions.",
            ]}
          />
          <SingleSection
            title="Internet Services"
            imgURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697883525/bsl-website/spectrum-fibre/internet_m94vn9.png"
            txtPosition={"right"}
            description={[
              "Experience lightning-fast internet services, backed by a robust fiber-optic network, ensure seamless connectivity for homes, businesses, and government entities.",
            ]}
          />
          <SingleSection
            title="Dark Fiber"
            imgURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697883526/bsl-website/spectrum-fibre/dark-fibre_xngm9z.png"
            description={[
              "Take control of your network infrastructure with Spectrum Fibre’s Dark Fiber solutions. Enjoy dedicated, flexible fiber-optic connectivity, and round-the-clock technical support.",
            ]}
          />
          <SingleSection
            title="SD-WAN Services"
            imgURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697883526/bsl-website/spectrum-fibre/sd-wan_o0elb3.png"
            description={[
              "Elevate your network’s performance and flexibility with Spectrum Fibre’s tailored SD-WAN Solutions.",
            ]}
            txtPosition={"right"}
          />
          <SingleSection
            title="Open Access Data Centers"
            imgURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697883527/bsl-website/spectrum-fibre/open-acceess_xbu4iq.png"
            description={[
              "Unlock the power of secure, reliable, and efficient IT infrastructure with Spectrum Fibre’s Data Center Colocation Services",
            ]}
          />
          <SingleSection
            title="Customized Connectivity Services"
            imgURL="https://res.cloudinary.com/diek2uivi/image/upload/v1689604343/bsl-website/spectrum-fibre/software_cwjqib.jpg"
            description={[
              "Experience unparalleled, tailored connectivity with Spectrum Fibre’s Customized Connectivity Services, leveraging a variety of mediums such as Fiber, VSAT, Microwave, and more to deliver the perfect solution for your unique requirements.",
            ]}
            txtPosition={"right"}
          />
        </div>
      </div>
    </section>
  );
};

export default AreaOfExpertiseSection;
