export const timeConvert = (createdAt: string) => {
  // const createdAt = "2024-02-29T12:04:57.591Z";
  const date = new Date(createdAt);

  // const options = { month: "short", day: "numeric", year: "numeric" };
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
