import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={duration}
      colors={["#45c11c", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      onComplete={handleReset}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
}
