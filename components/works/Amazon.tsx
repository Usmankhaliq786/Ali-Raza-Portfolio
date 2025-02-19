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
        <span className="text-textGreen tracking-wide">@Amazon</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2020 - Dec 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Design Mockups: Create layout and visual mockups using tools like Figma, Sketch, or Adobe XD.
Responsive Design: Ensure designs look great on all devices—mobile, tablet, and desktop.
UI/UX Focus: Prioritize user experience and interface design for intuitive, attractive layouts.
Brand Consistency: Align designs with brand colors, fonts, and style guidelines.
Prototyping: Develop interactive prototypes to show functionality and flow.
HTML/CSS Coding: Implement designs using clean, semantic HTML and CSS.
SEO Basics: Optimize design for SEO with fast loading, mobile-friendliness, and accessibility.
Testing: Check design on multiple browsers/devices and fix any layout issues.
Client Collaboration: Communicate regularly with clients for feedback and revisions.
These steps ensure professional, functional, and visually appealing websites.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
