import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Senior Zoho Developer
        <span className="text-textGreen tracking-wide"></span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have successfully resolved numerous challenges in Zoho CRM, Creator, scripting, customization, automation, API integration, and workflows. 
My expertise in Zoho implementation and consultancy includes:

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
           Zoho One: Administration, implementation, and customization.
 Zoho CRM: API integration, automation, custom functions, and blueprint development.
 Zoho Creator: Design and development of custom business applications.
 Zoho Books: Proficiency in handling accounting statements, reports, multi-currency transactions, and invoice automation.
 Zoho API Programming Services: Skilled in Deluge scripting, REST APIs, RESTful APIs, client scripts, and widgets.
 Additional Zoho Platforms: Experience with Zoho Flow, Zoho Desk, Zoho Inventory, Zoho SalesIQ, and Zoho Campaigns. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated APIs with front-end architecture to automate data fetching and synchronization,
providing users with real-time, dynamic content updates.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
