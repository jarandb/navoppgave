// The date has to be of any type, because it can be a string or a date
export const diffInDays = (oldestDate: any, newestDate: any) => {
  const newDate: Date =
    typeof newestDate === "string" ? new Date(newestDate) : newestDate;
  const jobPosting: Date =
    typeof oldestDate === "string" ? new Date(oldestDate) : oldestDate;
  const difference: number = newDate.getTime() - jobPosting.getTime();
  const days: number = Math.ceil(difference / (1000 * 3600 * 24));
  return days;
};
