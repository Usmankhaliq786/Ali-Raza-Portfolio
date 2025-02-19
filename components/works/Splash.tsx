import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Stack Developer
        <span className="text-textGreen tracking-wide">@Upwork</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - presant
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a web development intern working remotely via Upwork, Im actively involved in creating responsive, user-friendly websites for clients while collaborating with skilled professionals. This role allows me to build real-world experience in frontend and backend development, focusing on effective client communication and delivering high-quality work. Through Upwork, Im gaining essential technical skills and understanding project workflows, setting a solid foundation for a future career in web development.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
