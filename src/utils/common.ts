export const calculateExperience = () => {
  const currentDate = new Date();
  const dateStarted = new Date("2020/07/01");

  const total =
    (currentDate.valueOf() - dateStarted.valueOf()) /
    (1000 * 60 * 60 * 24 * 365);

  const years = Math.floor(total);

  return `${years}${total - years > 0 ? "+" : ""}`;
};

export const isRouteActive = (
  path: string,
  currentActivePath: string
): boolean => currentActivePath === path;
