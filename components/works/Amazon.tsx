import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        web Design
        <span className="text-textGreen tracking-wide">@Upwork</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I specialize in Zoho CRM, Zoho Creator, and the full Zoho suite, helping businesses automate processes, streamline workflows, and build custom solutions that drive growth and efficiency.


Zoho One Implementation : Set up and optimize your Zoho ecosystem.
Workflow Automation : Automate tasks and processes to save time.
Customization & Integration : Tailor Zoho apps to fit your business needs.
Process Management Blueprints : Design structured workflows for efficiency.
Custom Development : Build unique solutions using Deluge & Client Scripts.
Data Migration : Seamlessly transfer your data with accuracy.
Training & Ongoing Support: Get expert guidance for smooth operations.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
