export const schedules = () => {
  return Promise.resolve(
    {
      name: "The Avangers",
      id: 123,
    },
    {
      name: "Batman",
      id: 4599,
    }
  );
};

export const titlesCount = (count) => {
  displayTitleCount(count);
  return count;
};
