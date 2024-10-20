import Header from "@/components/layout/Header";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { Me, Concepcion } from "@/assets";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <section className="container mx-auto py-24 flex items-center justify-center">
          <div className="w-2/4">
            <h2 className="font-bold text-6xl">
              Hi there,
              <span className="text-gray-800">I&apos;m </span>
              <span className="font-title text-pink-flamingo-600 font-black">
                Nicolas
              </span>
              ,<br />
              <span className="text-gray-800">a passionate </span>
              <span className="font-title text-pink-flamingo-600 font-black">
                FullStack Developer
              </span>
              <br />
              <div className="flex items-center gap-8 pt-4 child:rounded-full">
                <FaNodeJs className="text-3xl text-green-500" />
                <BiLogoTypescript className="text-3xl text-blue-500" />
                <RiNextjsFill className="text-3xl text-black" />
                <FaReact className="text-3xl text-blue-400" />
              </div>
            </h2>
          </div>
          <div>
            <div className="max-w-md rounded-full bg-pink-flamingo-700 shadow-md">
              <Image
                src={Me}
                alt="Nicolas"
                className="shadow-inner rounded-full"
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="container mx-auto py-24 flex items-center justify-evenly">
          <div className="">
            <Image
              src={Concepcion}
              alt="Plaza de independencia de Concepcion, Chile"
              className="rounded-xl shadow-xl max-w-xl aspect-square h-auto object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
            <p className="text-lg text-gray-800 leading-8">
              👋 I&apos;m a dedicated FullStack Developer from Concepción, Chile
              🌍, with over 2 years of experience building dynamic web
              applications 💻. Currently working at{" "}
              <span className="font-bold text-pink-flamingo-600">
                Spiritory.com
              </span>
              , I focus on crafting seamless user experiences and scalable
              backend solutions 🚀. I&apos;m passionate about learning new
              technologies 🧠, enhancing my coding skills, and turning creative
              ideas into reality ✨. Whether it&apos;s designing sleek
              interfaces 🎨 or architecting robust backends 🛠️, I love solving
              challenges and bringing projects to life.
            </p>
          </div>
          
        </section>
      </div>
    </>
  );
}
