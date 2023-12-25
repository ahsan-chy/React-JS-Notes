import { useState } from "react";

function ApiCallLive() {
  const [product, setProduct] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //- Fetch API Data
  let handleInputChange = async (e) => {
    const value = e.target.value;
    setProduct(e.target.value);
    if (value.trim() !== "") {
      try {
        let response = await fetch(`https://fakestoreapi.com/products`);
        let data = await response.json();

        // + Filter and return the searched product data.
        const filterData = data.filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
        );
        setData(filterData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    } else {
      setProduct(null);
    }
  };

  // - Set Error if there is Something wrong
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h2>MY Day 1 - API Challange</h2>
      <div>
        <input
          type="text"
          placeholder="Search Product..."
          value={product}
          onChange={handleInputChange}
        />
      </div>

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
        {/* {console.log("data", data)} */}
      </div>
    </>
  );
}

export default ApiCallLive;
