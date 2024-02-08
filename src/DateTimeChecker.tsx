import { Rehearsal, rehearsals } from "./data";

export const DateTimeChecker = () => {
  const now = new Date();
  const checkInThreshold = 15 * 60 * 1000; // 15 min
  const canCheckIn: boolean = rehearsals.reduce(
    (acc: boolean, curr: Rehearsal) => {
      const inCheckIn = curr.dateTime.getTime() - now.getTime() <= checkInThreshold;
      return inCheckIn || acc;
    },
    false
  );

  const nextRehearsal: Rehearsal = rehearsals.reduce(
    (acc: Rehearsal, curr: Rehearsal) => {
      const timeDifference = curr.dateTime.getTime() - now.getTime();
      if (timeDifference > 0 && timeDifference < acc.dateTime.getTime() - now.getTime()) {
        return curr;
      }
      return acc;
    },
    rehearsals[0]
  );

  return <div>
    <div>
      Is it during a check-in time? {canCheckIn ? 'Yes' : 'No'}
    </div>
    <div>
      Next rehearsal is {nextRehearsal.dateTime.toLocaleDateString()} at {nextRehearsal.dateTime.toLocaleTimeString()}
    </div>
  </div>
}