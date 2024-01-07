import { Input } from "antd";
import { useState } from "react";
import Movie from "@/components/MovieCard";
import { useSearchMovieQuery } from "@/services/useMovie";

const { Search } = Input;

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, isError } = useSearchMovieQuery(searchValue);

  return (
    <main>
      <section>
        <h1 className="text-2xl text-center font-semibold mb-4">OMDb Movies</h1>
        <div className="flex justify-center">
          <Search
            placeholder="Search movie"
            allowClear
            enterButton
            size="large"
            onSearch={(value) => {
              setSearchValue(value);
            }}
            className="max-w-[325px]"
          />
        </div>
        <Movie isLoading={isLoading} isError={isError} movie={data} />
      </section>
    </main>
  );
}
