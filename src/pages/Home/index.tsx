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
  return (
    <Base>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-slate-50 font-medium text-2xl">Dashboard</h1>

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
            <div className="flex gap-8 items-center">
              <Button onClick={() => setIsPlaying(true)}>Start workout</Button>
              {isPlaying && (
                <Timer
                  duration={10}
                  isPlaying={isPlaying}
                  handleReset={() => setIsPlaying(false)}
                />
              )}
            </div>
          </Card>
        </div>
      </div>
    </Base>
  );
}
