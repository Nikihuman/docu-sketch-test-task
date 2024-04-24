import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(className, styles.button)} {...props}>
      {children}
    </button>
  );
}
