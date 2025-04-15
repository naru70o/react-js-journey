// import { UseGeolocation } from "./useGeolocation";
import UseGeolocation from "./useGeolocation";
import { useState } from "react";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  const { isLoading, position, error, getPosition } = UseGeolocation();
  const { lat, lng } = position;
  console.log(position);

  // UseGeolocation(setError, setPosition, setIsLoading);

  function HanleClicker() {
    getPosition();
    setCountClicks((count) => count + 1);
  }

  return (
    <div>
      <button onClick={HanleClicker} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
