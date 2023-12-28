import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCountdownTime(value: number) {
  return value < 10 ? `0${value}` : value;
}

export function countDownData(countDown: any): Array<{
  type: string;
  formatter: (countDown: any) => void;
  hasEntity: boolean;
}> {
  return [
    {
      type: 'Days',
      formatter: formatCountdownTime(countDown.days()),
      hasEntity: true,
    },
    {
      type: 'Hours',
      formatter: formatCountdownTime(countDown.hours()),
      hasEntity: true,
    },
    {
      type: 'Minutes',
      formatter: formatCountdownTime(countDown.minutes()),
      hasEntity: true,
    },
    {
      type: 'Seconds',
      formatter: formatCountdownTime(countDown.seconds()),
      hasEntity: false,
    },
  ];
}
