import { filterProps } from "@/types";
import axios from "axios";

export const fetchMovie = async(filters: filterProps) => {
    const results = await axios({
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/search',
        params: {
          query: `${filters.movie}`
        },
        headers: {
          'X-RapidAPI-Key': '7fcdb6044emshab7fce7ba97264cp1f2c69jsn2eb3df2e2c36',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
      })

      return results.data.contents
}