export function formatCountdownTime(value: number) {
  return value < 10 ? `0${value}` : value;
}

export function countDownData(countDown: any): Array<{
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

export function calculateDiscountPrice(
  originalPrice: number,
  discountPercentage: number,
): number | null {
  if (
    originalPrice <= 0 ||
    discountPercentage < 0 ||
    discountPercentage > 100
  ) {
    // Handle invalid input values
    console.error(
      'Invalid input values for calculating discounted price.',
    );
    return null;
  }

  const discountAmount: number =
    (originalPrice * discountPercentage) / 100;
  const discountPrice: number = originalPrice - discountAmount;

  return discountPrice;
}
