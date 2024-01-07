import { useQuery } from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const fetchSearchMovie = async (movieTitle: string) => {
  const params = new URLSearchParams({
    apikey: apiKey || "",
    t: movieTitle,
    plot: "full",
  });

  const url = `${baseUrl}?${params}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const fetchMovie = async (movieID: string) => {
  const params = new URLSearchParams({
    apikey: apiKey || "",
    i: movieID,
    plot: "full",
  });

  const url = `${baseUrl}?${params}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useSearchMovieQuery = (searchValue: string) => {
  return useQuery({
    queryKey: ["movie", searchValue],
    queryFn: () => fetchSearchMovie(searchValue),
    enabled: !!searchValue,
  });
};

const useMovieQuery = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovie(id),
    enabled: !!id,
  });
};

export { useSearchMovieQuery, useMovieQuery };
