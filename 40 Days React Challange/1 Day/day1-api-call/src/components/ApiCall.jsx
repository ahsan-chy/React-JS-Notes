import { useState } from "react";

function ApiCall() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //- Fetch API Data
  let getData = async () => {
    try {
      let response = await fetch(`https://fakestoreapi.com/products`);
      let data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // - Set Error if there is Something wrong
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h2>MY Day 1 - API Challange</h2>

      <button onClick={getData}>Get API DATA</button>

      <div>
        {/* // + Preloader to set if data is not fetched */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ol>
              {data &&
                data.map((data) => (
                  <li key={data.id}>
                    <span>{data.title}</span>{" "}
                  </li>
                ))}
            </ol>
          </div>
        )}
        {console.log("data", data)}
      </div>
    </>
  );
}

export default ApiCall;
