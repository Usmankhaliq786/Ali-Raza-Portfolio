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
            href="https://islandsdottir.is/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/assets/images/ali-pro1.PNG"
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
              <h3 className="text-2xl font-bold"> Islandsdottir S.L.</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            We at Yay had submitted a couple of grant applications without success. We got in touch with Thorunn, she helped us update the application and we were awarded the grant. She is very professional and patient. It's not always easy to get entrepreneurs to sit down and create business plans and budgets, but Thorunn manages to do that successfully.
              <span className="text-textGreen"> O-auth</span> It also makes life a lot more fun. <span className="text-textGreen"> Stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Zoho CRM</li>
              <li>Zoho Books</li>
              <li>Zoho Forms</li>
              <li>Zoho Writers</li>
              <li>Zoho Sign</li>
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
          <a className="w-full xl:w-1/2 h-auto relative group" href="https://realtree.ae/" target="_blank">
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/assets/images/ali-pro2.PNG"
                alt="cyberImg"
                width={500}
                height={300}
              /> 
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">Realtree Properties</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            As the premier estate agents in Dubai, we offer an unrivalled collection of properties in highly sought-after communities and areas. Our goal is to assist you in finding the perfect property that meets all your requirements.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Zoho CRM</li>
              <li>Zoho Books</li>
              <li>Zoho Analytics</li>
              <li>Zoho Forms</li>
              <li>Zoho Campaigns</li>
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
