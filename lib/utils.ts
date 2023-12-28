import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCountdownTime(value: number) {
  return value < 10 ? `0${value}` : value;
}

export function countDownData(countDown): Array<{
  type: string;
  formatter: string;
  hasColon: boolean;
}> {
  return [
    {
      type: 'Days',
      formatter: formatCountdownTime(countDown.days()) as string,
      hasColon: true,
    },
    {
      type: 'Hours',
      formatter: formatCountdownTime(countDown.hours()) as string,
      hasColon: true,
    },
    {
      type: 'Minutes',
      formatter: formatCountdownTime(countDown.minutes()) as string,
      hasColon: true,
    },
    {
      type: 'Seconds',
      formatter: formatCountdownTime(countDown.seconds()) as string,
      hasColon: false,
    },
  ];
}
