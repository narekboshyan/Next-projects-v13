import Results from "@/components/templates/Results";
import React from "react";

const SearchBar = async ({ params }: { params: any }) => {
 const res = await fetch(
  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`,
  {
   next: {
    revalidate: 10000,
   },
  }
 );

 if (!res.ok) {
  throw new Error("Error fetching data");
 }

 const { results } = await res.json();

 return (
  <div>
   {results.length === 0 ? (
    <h1 className="text-center pt-6 ">No results found</h1>
   ) : (
    <Results results={results} />
   )}
  </div>
 );
};

export default SearchBar;
