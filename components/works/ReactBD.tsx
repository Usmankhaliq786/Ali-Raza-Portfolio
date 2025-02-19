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
      Zoho Developer
        <span className="text-textGreen tracking-wide">@Technology Castle</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        sep 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Having 2+ years of experiencein software development inSalesforce.Commerce Cloud andSalesforce OMS & SalesforceOmni Channel in PWAheadless.Experience developingweb/desktop client/serverapplications
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Streamlined front-end development processes by building reusable components and
implementing best practices for consistent and efficient code, reducing manual adjustments
and improving workflow.
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
