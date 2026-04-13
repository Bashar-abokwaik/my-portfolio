/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { fadeSlide } from "../../animations/variants";
import { fadeIn } from "../../animations/variants";
import { slideUp } from "../../animations/variants";
import { slideInLeft } from "../../animations/variants";
import { slideInUp } from "../../animations/variants";
import { scaleInDown } from "../../animations/variants";
import { scaleUp } from "../../animations/variants";
import { popIn } from "../../animations/variants";

const variantsMap = {
  fadeSlide: fadeSlide,
  fadeIn: fadeIn,
  slideUp: slideUp,
  slideInLeft: slideInLeft,
  slideInUp: slideInUp,
  scaleInDown: scaleInDown,
  scaleUp: scaleUp,
  popIn: popIn,
};

export default function Reveal({ children, type = "fadeIn" }) {
  return (
    <motion.div
      variants={variantsMap[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
