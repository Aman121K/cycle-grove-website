"use client"
import Carousel from "@/components/Crousel";
import InfoItem from "@/components/InfoItem";
import SectionHeading from "@/components/SectionHeading";
import { infoItemsData } from "@/data/data";
import { useEffect, useState } from "react";


const slides = [
  { id: 0, image: "/images/slide_1.avif" },
  { id: 1, image: "/images/slide_2.avif" },
  { id: 2, image: "/images/slide_3.png" },
  { id: 3, image: "/images/slide_4.avif" },
  { id: 4, image: "/images/slide_5.avif" },
];

const textItems = [
  {
    id: 0,
    title: "Track your cycle and symptoms",
    description:
      "Figure out what's normal for you with our period and cycle tracker. Spot patterns and know when your period is likely to start so you're always prepared.",
  },
  {
    id: 1,
    title: "Understand your fertility better",
    description:
      "Get daily conception tips from our experts and learn how to read your body's fertility signals with Flo's ovulation tracker.",
  },
  {
    id: 2,
    title: "Follow your pregnancy week by week",
    description:
      "See how your body and baby are changing with our pregnancy tracker. Plus, figure out what you need to do with our weekly checklist.",
  },
  {
    id: 3,
    title: "Share Flo with your partner",
    description:
      "We’ll teach them everything they need to know about your body (and how to better support you) so you don’t have to.",
  },
  {
    id: 4,
    title: "Switch to Anonymous Mode",
    description:
      "Understand your body better with an added layer of privacy. Flo is already encrypted as standard, and we will never sell your data, but no one (not even us) can identify you when you use Anonymous Mode.",
  },
];


export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);


  const handleTextClick = (index: number) => {
    setActiveSlide(index);
  };
  return (
    <>
      <section className="bg-custom-gradient py-16">
        <div className="max-w-[1062px] w-full px-4 sm:px-6 lg:px-0 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <p className="textPrimary font-bold mb-2 text-sm sm:text-base">
              ⭐ Over 7 million 5-star ratings
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold textPrimary mb-4 leading-tight">
              We’re Flo, the world’s #1 women’s health app²
            </h2>
            <p className="text-base sm:text-lg text-secondary mb-6">
              Over 380 million people³ around the world use the Flo app to track
              their periods, ovulation, and pregnancy.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <a
                href="#"
                className="bg-primary text-secondary px-6 py-3 rounded-md shadow-md font-semibold text-sm sm:text-base"
              >
                Download on the App Store
              </a>
              <a
                href="#"
                className="bg-primary text-secondary px-6 py-3 rounded-md shadow-md font-semibold text-sm sm:text-base"
              >
                Get it on Google Play
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/images/app-ss.png"
                alt="Flo App"
                className="w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0"
              />
              <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 bg-accent px-4 py-2 rounded-md shadow-md text-xs sm:text-sm italic textPrimary">
                #1 OB-GYN-recommended period tracker. It’s free to join.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* crousel info section */}

      {/* <section className="my-12">
        <div className="max-w-[1062px] w-full mx-auto">
          <SectionHeading>
            What can you do with the Flo app?
          </SectionHeading>
          <div className="flex flex-col md:flex-row items-start gap-6 p-6">
            <div className="w-full md:w-1/2">
              <Carousel slides={slides} activeSlide={activeSlide} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {textItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleTextClick(index)}
                  className={`p-4 font-medium text-lg rounded-lg border ${activeSlide === index
                      ? "bg-primary text-white border-primary"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="my-16">
        <div className="max-w-[1062px] mx-auto">
          <SectionHeading>
            What can you do with the Flo app?
          </SectionHeading>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 px-4 lg:px-0">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="flex items-center justify-center border-8 border-[hsla(0,19%,87%,0.5)] rounded-[30px] h-[546px] w-[264px] overflow-hidden relative">
                <Carousel slides={slides} activeSlide={activeSlide} />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {textItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleTextClick(index)}
                  className={`p-6 text-left rounded-lg ${activeSlide === index
                    ? "bg-pink-100 border-pink-300"
                    : "hover:bg-gray-50"
                    }`}
                >
                  <h3
                    className={`text-lg font-bold mb-2 text-gray-800 text-2xl font-semibold tracking-[0.07px] leading-[32px]`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${activeSlide === index ? "text-pink-500" : "text-gray-600"
                      }`}
                  >
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-6 justify-center mx-auto max-w-[996px] px-5 box-content">
          <SectionHeading>Why choose Flo?</SectionHeading>
          <div className="flex items-start justify-center w-full flex-wrap">
            {infoItemsData?.map((item) => (
              <InfoItem
                key={item?.id}
                icon={item?.icon}
                firstRowText={item?.firstText}
                secondRowText={item?.secondText}
                link={item?.naviagaion}
                linkText={item?.navigationText}
                afterImage="/images/arrow-right.svg"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-custom-gradient py-16 my-16">
        <div>
          <SectionHeading>Why choose Flo?</SectionHeading>
        </div>
      </section>
    </>
  );
}