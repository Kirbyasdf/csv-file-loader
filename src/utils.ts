export const dateStringToDate = (dateString: string): Date => {
  //'06/10/2018

  const dateArr = dateString.split("/").map((part: string): number => {
    return parseInt(part);
  });

  return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
