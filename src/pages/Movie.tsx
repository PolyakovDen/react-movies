import { useParams, useNavigate } from "react-router-dom";
import { useMovieQuery } from "@/services/useMovie";
import { Button } from "antd";

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useMovieQuery(id || "");

  return (
    <section>
      <Button
        type="link"
        className="w-fit"
        size="large"
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Search
      </Button>
      <div className="flex justify-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error fetching movie</div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-center mb-3">
              {data.Title}
            </h1>
            <img src={data.Poster} alt={data.Title} className="mb-3" />
            <div className="max-w-[325px]">
              <p className="mb-3">
                <b>Description:</b>{" "}
                <span className="text-sm leading-3">{data.Plot}</span>
              </p>
              <p className="mb-3">
                <b>Released:</b>{" "}
                <span className="text-sm">{data.Released}</span>
              </p>
              <p className="mb-3">
                <b>Genre:</b> <span className="text-sm">{data.Genre}</span>
              </p>
              <p className="mb-3">
                <b>Runtime:</b> <span className="text-sm">{data.Runtime}</span>
              </p>
              <p className="mb-3">
                <b>Language:</b>{" "}
                <span className="text-sm">{data.Language}</span>
              </p>
              <p className="mb-3">
                <b>Country:</b> <span className="text-sm">{data.Country}</span>
              </p>
              <p className="mb-3">
                <b>Rating IMDb:</b>{" "}
                <span className="text-sm">{data.imdbRating}</span>
              </p>
              <p>
                <b>Votes IMDb:</b>{" "}
                <span className="text-sm">{data.imdbVotes}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
