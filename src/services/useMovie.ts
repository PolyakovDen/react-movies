import { useQuery } from "@tanstack/react-query";

const fetchSearchMovie = async (movieTitle: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=b08342ba&t=${movieTitle}&plot=full`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const fetchMovie = async (movieID: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=b08342ba&i=${movieID}&plot=full`
  );
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
