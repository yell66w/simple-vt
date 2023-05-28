import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  bgColor?: "yellow" | "gray";
  textColor?: "white" | "black";
  children: ReactNode;
  borderColor?: "yellow" | "gray" | "black";
}
const Button = ({
  bgColor = "gray",
  children = "Click Me",
  textColor = "white",
  borderColor,
}: Props) => {
  const btnBorderColor = `border-${borderColor || bgColor}`;
  const btnTextColor = `text-${textColor}`;
  const btnBgColor = `bg-${bgColor}`;

  return (
    <button
      className={`${styles.btn} ${styles[btnBorderColor]} ${styles[btnBgColor]} ${styles[btnTextColor]}`}
    >
      {children}
    </button>
  );
};

export default Button;
