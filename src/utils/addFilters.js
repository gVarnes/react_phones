//Function is filtering and adding by condition new Set only with current filters

export const addFilters = (goods, condition) => {
  return Array.from(
    new Set(
      goods.map((item) => {
        return item[condition];
      })
    )
  );
};
