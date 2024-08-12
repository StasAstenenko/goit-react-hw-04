import axios from "axios";

async function getImages(query, page) {
  const Base_Url = "https://api.unsplash.com/";
  const End_Point = "search/photos";
  const url = Base_Url + End_Point;
  const params = {
    client_id: "FUB-a8-0LjUWoPGw2m8AhdOKLrfed8RR2vc8ngk164A",
    query: query,
    page: page,
    per_page: 20,
  };
  const { data } = await axios.get(url, { params });
  return data;
}

export default getImages;
