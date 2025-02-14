import axios from "axios";
import { Image } from "./App.types";

type FetchData = {
  data: {
    total: number;
    total_page: number;
    results: Image[];
  };
};

const KEY = "1X6RII3RoeScRHg5if82ucbsdRGfgCmSu4y1o-_zRdE";

const fetchSearch = async (search: string, page: number) => {
  if (search.trim() === "") {
    return;
  }
  const { data }: FetchData = await axios.get(
    `https://api.unsplash.com/search/photos/?page=${page}&per_page=12&client_id=${KEY}&query=${search}`
  );
  console.log(data);

  return data;
};

export default fetchSearch;
