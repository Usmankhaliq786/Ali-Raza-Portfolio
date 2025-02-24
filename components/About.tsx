import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Ali Raza and I enjoy creating things that
            live on the internet. My interest in Data Science after my graduation in 2022 the ability to extract insights from vast amounts of information and transform them into real-world applications excites me. Data Science sits at the intersection of mathematics, programming, and domain expertise.
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up,{" "}
            <span className="text-textGreen">
              a huge corporation, and a student-led design studio.
            </span>
            ExperiencesHobbiesI individual who thrivesupon seeking newchallenges through mycareer as a SoftwareEngineer. Possess stronganalytical skills and criticalthinking skills with a soundtechnical engineeringbackground.{" "}
            <span className="text-textGreen">
              ab natus possimus? Sint, accusamus!
            </span>
          </p>
          <p>
          ExperiencesHobbiesI individual who thrivesupon seeking newchallenges through mycareer as a SoftwareEngineer. Possess stronganalytical skills and criticalthinking skills with a soundtechnical engineeringbackground.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              C++
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Deluge Script
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              HTML5
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
               MYSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              CSS,BootStrap
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Numpay, Pandas, Matplotlib, Searborn
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <div className="relative w-full h-full">
                <Image
                  className="rounded-lg object-cover"
                  src="/assets/images/ali-raza.jpg"
                  alt="Profile Image"
                  fill  // This enables responsive fill to the parent div
                  sizes="(max-width: 768px) 100vw, 50vw" // Adjust this as needed
                />
              </div>
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
