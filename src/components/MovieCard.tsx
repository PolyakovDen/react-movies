import MovieData from "@/types/Movie";
import { Card, Empty, Spin, Alert } from "antd";
import { useNavigate } from "react-router-dom";

export default function MovieCard({
  isLoading = false,
  isError = false,
  movie,
}: {
  isLoading?: boolean;
  isError?: boolean;
  movie: MovieData;
}) {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    if (movie && movie.imdbID) {
      navigate(`/movie/${movie.imdbID}`);
    }
  };

  return (
    <>
      <div className="flex w-full justify-center mt-10">
        {movie && movie.Title && (
          <Card
            hoverable
            title={movie.Title}
            style={{ width: 325 }}
            cover={
              <img
                alt={movie.Title}
                src={
                  movie.Poster && movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://m.media-amazon.com/images/M/MV5BNDE4OTk4MTk0M15BMl5BanBnXkFtZTgwODQ4MTg0MzI@._V1_SX300.jpg"
                }
                className="max-h-[400px]"
              />
            }
            onClick={handleMovieClick}
          >
            <div>
              <p>
                <b>Year</b>: {movie.Year}
              </p>
              <p>
                <b>Country</b>: {movie.Country}
              </p>
            </div>
          </Card>
        )}
        {isLoading && <Spin size="large" />}
        {isError && (
          <Alert
            type="error"
            message="Error"
            description="Sorry, something wrong. Please, try again!"
          />
        )}
        {!isLoading && !isError && movie && !movie.Title && (
          <Empty
            description={
              <span className="font-sm font-bold">
                Movie not found. Please, try again!
              </span>
            }
          />
        )}
      </div>
    </>
  );
}
