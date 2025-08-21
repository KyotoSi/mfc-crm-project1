import React, { useState } from 'react';
import ActivityCalendar from '../components/ActivityCalendar';
import { trackActivity, getActivity } from '../lib/activityTracker';

export default function Profile() {
  const [activity, setActivity] = useState(getActivity());

  const handleLog = () => {
    trackActivity('action');
    setActivity(getActivity());
  };

  return (
    <div>
      <h1>Профиль сотрудника</h1>
      <button onClick={handleLog}>Записать действие</button>
      <ActivityCalendar data={activity} />
    </div>
  );
}
