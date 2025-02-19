import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Stack Developer
        <span className="text-textGreen tracking-wide">@ArfaTower</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2021 - Aug 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a web development intern working at Arfa Tower, I’m gaining hands-on experience in designing and coding websites while collaborating with a professional team. My responsibilities include developing responsive layouts, enhancing user experiences, and learning best practices for frontend and backend development. This internship is providing me with valuable industry insights and technical skills, preparing me for a full-time role in web development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a web development intern working at Arfa Tower, I’m gaining hands-on experience in designing and coding websites while collaborating with a professional team. My responsibilities include developing responsive layouts, enhancing user experiences, and learning best practices for frontend and backend development. This internship is providing me with valuable industry insights and technical skills, preparing me for a full-time role in web development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a web development intern working at Arfa Tower, I’m gaining hands-on experience in designing and coding websites while collaborating with a professional team. My responsibilities include developing responsive layouts, enhancing user experiences, and learning best practices for frontend and backend development. This internship is providing me with valuable industry insights and technical skills, preparing me for a full-time role in web development.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
