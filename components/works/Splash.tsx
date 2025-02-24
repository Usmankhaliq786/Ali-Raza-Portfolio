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
        Zoho Developer
        <span className="text-textGreen tracking-wide">@Techloyce</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2022 - Mar 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a Zoho Developer at Techloyce:

Customized Zoho solutions for clients, improving efficiency and reducing costs.
Collaborated across teams to design and implement applications using Zoho Creator and Zoho CRM.
Analyzed and improved client processes for better business performance.
Integrated Zoho One with other software to ensure data consistency.
Provided training and ongoing support to enhance user proficiency.
Demonstrated strong problem-solving skills to resolve technical issues promptly.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
