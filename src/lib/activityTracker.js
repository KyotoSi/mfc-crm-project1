import { format } from 'date-fns';

const STORAGE_KEY = 'userActivity';

export function trackActivity() {
  const today = format(new Date(), 'yyyy-MM-dd');
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
  data[today] = (data[today] || 0) + 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getActivity() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
}
