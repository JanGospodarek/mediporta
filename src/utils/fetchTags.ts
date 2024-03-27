const fetchTags = async (
  page: number,
  itemsPerPage: number,
  order: "desc" | "asc",
  sort: "popularity" | "name"
) => {
  let orderBy: typeof sort | "popular" = sort;
  if (orderBy === "popularity") orderBy = "popular";
  const res = await fetch(
    `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${itemsPerPage}&order=${order}&sort=${orderBy}&site=stackoverflow`
  );
  const data = await res.json();
  return data.items;
};
export default fetchTags;
