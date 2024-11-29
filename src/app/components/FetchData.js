import { useState, useEffect } from "react";

const FetchData = () => {
  const [first, setfirst] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    console.log("This is my console", result);
    setfirst(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>This is My some Dummy Users </h3>
      <ol>
        {first.map((Data, i) => (
          <li key={i}>{Data.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default FetchData;
