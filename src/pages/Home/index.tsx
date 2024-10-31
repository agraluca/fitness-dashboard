import Base from "templates/Base";

import Card from "components/Card";
import LineChart from "components/Chart";
import CheckList from "components/CheckList";
import Button from "components/Button";
import { useTheme } from "stores/themeStore";
import { cn } from "utils/cn";
import Timer from "components/Timer";
import { useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(10);
  return (
    <Base>
      <div className="flex flex-col gap-4 p-4">
        <h1
          className={cn("text-slate-800 font-medium text-2xl", {
            "text-slate-50": theme === "dark",
          })}
        >
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3
                  className={cn("text-slate-800 text-2xl", {
                    "text-slate-50": theme === "dark",
                  })}
                >
                  Workout progress chart
                </h3>
                <p className="text-slate-500">
                  Here you can check all of you daily workouts.
                </p>
              </div>
              <LineChart />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3
                  className={cn("text-slate-800 text-2xl", {
                    "text-slate-50": theme === "dark",
                  })}
                >
                  Daily goals
                </h3>
                <p className="text-slate-500">
                  Here you can check all of you daily workouts.
                </p>
              </div>
              <div className="flex flex-1">
                <CheckList />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <div className="flex flex-col gap-4">
              <h3
                className={cn("text-slate-800 text-2xl", {
                  "text-slate-50": theme === "dark",
                })}
              >
                Workout
              </h3>
              <div className="flex flex-col gap-6 items-center md:items-start justify-center ">
                {isPlaying && (
                  <Timer
                    duration={seconds}
                    isPlaying={isPlaying}
                    handleReset={() => setIsPlaying(false)}
                  />
                )}
                <div className="w-full md:w-[30%] flex flex-col gap-3">
                  <input
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-teal-400"
                    type="number"
                    placeholder="Seconds"
                    value={seconds}
                    onChange={(e) => setSeconds(Number(e.target.value))}
                  />
                  <Button onClick={() => setIsPlaying(true)}>
                    Start workout
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Base>
  );
}
