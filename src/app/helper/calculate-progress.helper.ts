export const calculateProgress = (currentValue: number) => {
  const maxValue = 100;
  const progress = (currentValue / maxValue) * 100;

  if (progress === 100) {
    return progress.toFixed(0) + "%";
  } else {
    return progress.toFixed(1) + "%";
  }
};
