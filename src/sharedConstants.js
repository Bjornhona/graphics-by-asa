const calculateYears = (startDateString) => {
  const startDate = new Date(startDateString);
  const today = new Date();
  const diffInMs = today.getTime() - startDate.getTime();
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(0, Math.floor(years));
};

export const numberOfYearsDeveloperExperience = calculateYears('2018-11-01');
export const numberOfYearsDesignExperience = calculateYears('2010-01-01');
