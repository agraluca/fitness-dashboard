import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTheme } from "stores/themeStore";
import { cn } from "utils/cn";

type TimerProps = {
  isPlaying: boolean;
  duration: number;
  handleReset: () => void;
};

export default function Timer({
  isPlaying = false,
  duration = 10,
  handleReset,
}: TimerProps) {
  const { theme } = useTheme();
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={duration}
      colors={["#45c11c", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      onComplete={handleReset}
      trailColor="#fff"
    >
      {({ remainingTime }) => (
        <span
          className={cn("text-slate-800", {
            "text-slate-100": theme === "dark",
          })}
        >
          {remainingTime}
        </span>
      )}
    </CountdownCircleTimer>
  );
}
