import cn from "classnames";
import styles from "./Wrapper.module.css";
import { WrapperProps } from "./Wrapper.props";

export function Wrapper({ className, children, ...props }: WrapperProps) {
  return (
    <div className={cn(className, styles.wrapper)} {...props}>
      {children}
    </div>
  );
}
