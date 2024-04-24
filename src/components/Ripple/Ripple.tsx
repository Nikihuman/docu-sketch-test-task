import cn from "classnames";
import styles from "./Ripple.module.css";
import { RippleProps } from "./Ripple.props";

export function Ripple({ className, isActive, ...props }: RippleProps) {
  return (
    <div
      className={cn(className, styles.ripple, { [styles.hidden]: !isActive })}
      {...props}
    >
      <div className={cn(styles.block)} />
      <div className={cn(styles.block, styles.secondBlock)} />
    </div>
  );
}
