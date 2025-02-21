import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      
      
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://us.oliviaburton.com/us/home/?country=PK"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/assets/images/noorShop.png"
                alt="amazonImg"
                width={500}
                height={300}
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold"> Olivia Burton</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Optimism is a practice. It empowers us to navigate the hard stuff while choosing to focus more energy on the good stuff.
              <span className="text-textGreen"> O-auth</span> It also makes life a lot more fun. <span className="text-textGreen"> Stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Third Party Integration</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-textGreen duration-300" href="" target="_blank">
                <TbBrandGithub />
              </a>
              <a className="hover:text-textGreen duration-300" href="" target="_blank">
                <AiOutlineYoutube />
              </a>
              <a className="hover:text-textGreen duration-300" href="" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a className="w-full xl:w-1/2 h-auto relative group" href="https://www.noormohmmad.com/" target="_blank">
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/assets/images/cyberBlog.png"
                alt="cyberImg"
                width={500}
                height={300}
              /> */
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">MVMT</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Worked on enhancing the MVMT website, focusing on performance optimization, UI/UX improvements, and seamless e-commerce functionality.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Sanity</li>
              <li>React Hook Form</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-textGreen duration-300" href="https://github.com/Usmankhaliq786/" target="_blank">
                <TbBrandGithub />
              </a>
              <a className="hover:text-textGreen duration-300" href="" target="_blank">
                <AiOutlineYoutube />
              </a>
              <a className="hover:text-textGreen duration-300" href="" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
