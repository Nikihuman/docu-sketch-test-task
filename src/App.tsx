import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { fas as icons } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useMemo, useRef, useState } from "react";
import { Ripple } from "./components/Ripple/Ripple";
import { Wrapper } from "./components/Wrapper/Wrapper";

export function App() {
  const iconNames = useMemo(() => Object.keys(icons), []);
  const { current } = useRef<{ queue: number[] }>({
    queue: [],
  });
  const iconsIndexes = current;
  const [isRunning, setIsRunning] = useState(false);
  const [currentIcon, setCurrentIcon] = useState<number>(0);

  const setIcon = useCallback(() => {
    setIsRunning(true);
    setTimeout(() => {
      setCurrentIcon(iconsIndexes.queue.shift() as number);
      if (iconsIndexes.queue.length === 0) {
        setIsRunning(false);
        return;
      }
      setIcon();
    }, 3000);
  }, [iconsIndexes.queue]);

  const changeIcon = useCallback(() => {
    const iconIndex = Math.floor(Math.random() * iconNames.length);
    iconsIndexes.queue.push(iconIndex);
    if (isRunning) {
      return;
    }
    setIcon();
  }, [iconNames.length, iconsIndexes.queue, isRunning, setIcon]);

  return (
    <main className={styles.app}>
      <Wrapper>
        <Button onClick={changeIcon}>Change Icon</Button>
        <Ripple isActive={isRunning} />
        <FontAwesomeIcon icon={icons[iconNames[currentIcon]]} size="4x" />
      </Wrapper>
    </main>
  );
}
