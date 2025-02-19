import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-textGreen tracking-wide">@IsoftStudios</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a web developer at iSoft Studios, I specialize in building dynamic, user-friendly websites and applications tailored to client needs. My role involves developing responsive designs, ensuring cross-browser compatibility, and optimizing for speed and SEO. Collaborating with designers and project managers, I focus on creating seamless digital experiences that align with brand goals and deliver functional, efficient solutions using the latest web technologies.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a web developer at iSoft Studios, I specialize in building dynamic, user-friendly websites and applications tailored to client needs. My role involves developing responsive designs, ensuring cross-browser compatibility, and optimizing for speed and SEO. Collaborating with designers and project managers, I focus on creating seamless digital experiences that align with brand goals and deliver functional, efficient solutions using the latest web technologies.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a web developer at iSoft Studios, I specialize in building dynamic, user-friendly websites and applications tailored to client needs. My role involves developing responsive designs, ensuring cross-browser compatibility, and optimizing for speed and SEO. Collaborating with designers and project managers, I focus on creating seamless digital experiences that align with brand goals and deliver functional, efficient solutions using the latest web technologies.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
