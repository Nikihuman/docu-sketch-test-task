import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { fas as icons } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useRef, useState } from "react";
import { Ripple } from "./components/Ripple/Ripple";
import { Wrapper } from "./components/Wrapper/Wrapper";

export function App() {
  const iconNames = useMemo(() => Object.keys(icons), []);
  const { current } = useRef<{ queue: number[]; isRunning: boolean }>({
    queue: [],
    isRunning: false,
  });
  const [isActiveRipple, setIsActiveRipple] = useState(false);
  const iconsIndexes = current;
  const [currentIcon, setCurrentIcon] = useState<number>(0);

  const changeIcon = () => {
    const iconIndex = Math.floor(Math.random() * iconNames.length);
    iconsIndexes.queue.push(iconIndex);
    if (iconsIndexes.isRunning) {
      return;
    }
    setIcon();
  };

  const setIcon = () => {
    iconsIndexes.isRunning = true;
    setIsActiveRipple(true);
    setTimeout(() => {
      setCurrentIcon(iconsIndexes.queue.shift() as number);
      if (iconsIndexes.queue.length === 0) {
        iconsIndexes.isRunning = false;
        setIsActiveRipple(false);
        return;
      }
      setIcon();
    }, 3000);
  };

  return (
    <main className={styles.app}>
      <Wrapper>
        <Button onClick={changeIcon}>Change Icon</Button>
        <FontAwesomeIcon icon={icons[iconNames[currentIcon]]} size="4x" />
        <Ripple isActive={isActiveRipple} />
      </Wrapper>
    </main>
  );
}
