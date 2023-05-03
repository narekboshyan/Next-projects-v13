import React from "react";

type Props = {
 results: any[];
};

const Results: React.FC<Props> = ({ results }) => {
 return (
  <div>
   {results.map((result: any) => (
    <div key={result.id}>{result.original_title}</div>
   ))}
  </div>
 );
};

export default Results;
