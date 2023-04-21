import { motion } from "framer-motion";
import { textVariant2, textContainer } from "./utils";
export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles?: string;
}) => (
  <motion.p variants={textContainer} className={`${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
