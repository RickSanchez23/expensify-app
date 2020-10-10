export const getVisibleExpenses = (
  expenses,
  { text, startDate, endDate, sortBy }
) => {
  return expenses
    .filter((item) => {
      const textFilterMatch = item.description
        .toLowerCase()
        .includes(text.toString());
      const startDateMatch =
        typeof startDate !== "number" || item.createAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || item.createAt <= endDate;
      return textFilterMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createAt < b.createAt ? 1 : -1;
      } else {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
