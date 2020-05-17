import _ from "lodash";

export const paginate = (items, pageNumber, itemsPerPage) => {
  const start = (pageNumber - 1) * itemsPerPage;
  return _(items).slice(start).take(itemsPerPage).value();
};
