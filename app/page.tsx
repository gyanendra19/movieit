import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import MovieCard from "@/components/MovieCard";
import SearchBox from "@/components/SearchBox";
import { MovieCardProps, filterProps, searchProps } from "@/types";
import { fetchMovie } from "@/utils";

interface HomeProps {
  searchParams: searchProps
}

export default async function Home({ searchParams }: HomeProps) {

  const allMovies = await fetchMovie({
    movie: searchParams.movie
  })
  const isDataEmpty = !Array.isArray(allMovies) || allMovies.length < 1 || !allMovies;

  const filteredMovie = () => {
    let movieAfterFilter;
    if (searchParams.year !== '2024') {
      movieAfterFilter = allMovies.filter((movie: MovieCardProps) => {
        return movie.release_date?.split('-')[0] === searchParams.year
      })
    }

    if (searchParams.rating !== '0') {
      movieAfterFilter = movieAfterFilter ? movieAfterFilter.filter((movie: MovieCardProps) => {
        return movie.vote_average >= Number(searchParams.rating)
      }) : (
        allMovies.filter((movie: MovieCardProps) => {
          return movie.vote_average >= Number(searchParams.rating)
        })
      )
    }

    return movieAfterFilter
  }


  return (
    <main className="w-full h-fit relative">

      <LandingPage />

      <div className="w-10/12 mx-auto">
        <SearchBox />
      </div>

      {!isDataEmpty ? (
        <div className="md:w-[85%] w-11/12 md:flex-row flex-col items-center mx-auto md:py-12 py-8 flex flex-wrap gap-8">
          {searchParams.year === '2024' && searchParams.rating === '0' ? (
            allMovies?.map((movie: MovieCardProps) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          ) : (
            filteredMovie().length >= 1 ? filteredMovie()?.map((movie: MovieCardProps) => (
              <MovieCard key={movie._id} movie={movie} />
            )) : (
              <p className="mt-4 font-bold text-center w-full">No movie with that filter</p>
            )
          )}
        </div>
      ) : (
        <p className="py-10 text-center text-xl font-semibold">{'Search for a movie'}</p>
      )}

      <Footer />

    </main>
  );
}
