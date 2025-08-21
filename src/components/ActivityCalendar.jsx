import React from 'react';
import { format, subDays, addDays } from 'date-fns';
import './ActivityCalendar.css';

function getLevel(count) {
  if (count >= 4) return 4;
  return count;
}

export default function ActivityCalendar({ data }) {
  const today = new Date();
  const start = subDays(today, 364);
  const days = [];
  for (let d = start; d <= today; d = addDays(d, 1)) {
    const dateStr = format(d, 'yyyy-MM-dd');
    days.push({ date: dateStr, count: data[dateStr] || 0 });
  }
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return (
    <div className="activity-calendar">
      {weeks.map((week, wi) => (
        <div className="week" key={wi}>
          {week.map((day) => (
            <div
              key={day.date}
              className={`day level-${getLevel(day.count)}`}
              title={`${day.date}: ${day.count} actions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
