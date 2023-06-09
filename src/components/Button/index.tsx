import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  bgColor?: "yellow" | "gray";
  textColor?: "white" | "black";
  children: ReactNode;
  borderColor?: "yellow" | "gray" | "black";
  variant?: "rounded" | "default";
  onClick?: () => void;
}
const Button = ({
  bgColor = "gray",
  children = "Click Me",
  textColor = "white",
  variant = "default",
  borderColor,
  onClick,
}: Props) => {
  const btnBorderColor = `border-${borderColor || bgColor}`;
  const btnTextColor = `text-${textColor}`;
  const btnBgColor = `bg-${bgColor}`;
  const btnVariant = `btn-${variant}`;

  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[btnBorderColor]} ${styles[btnBgColor]} ${styles[btnTextColor]} ${styles[btnVariant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
