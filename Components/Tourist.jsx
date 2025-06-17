import React, { useEffect, useState, useRef } from "react";
import WikiDetailsWithImages from "./WikiDetailsWithImages";

const Tourist = () => {
  const [show, setShow] = useState(false);
  const [placeId, setPlaceId] = useState("");
  const [formattedPlace, setFormattedPlace] = useState("");
  const [oldName, setOldName] = useState("");
  const [location, setLocation] = useState("");
  const inputRef = useRef(null);
  function toTitleCase(text) {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const apiKey = import.meta.env.VITE_API_KEY_TOURISM
  function getDetails(formData) {
    const place = formData.get("place");
    const formattedPlace = toTitleCase(place);
    setPlaceId(place);
    setFormattedPlace(formattedPlace);
  }

  function changeInfo() {
    setShow(true);
  }
  const [nearby, setNearby] = useState([]);

  useEffect(() => {
    if (!placeId) return;

    fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
        formattedPlace
      )}&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const feature = data.features[0];
        const coords = feature.geometry.coordinates;
        setOldName(data.query.text);
        setLocation(feature.properties.address_line2);
        console.log("Geoapify geocode result:", data);

        return fetch(
          `https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${coords[1]},${coords[0]},10000
&limit=5&apiKey=${apiKey}`
        );
      })
      .then((res) => res.json())
      .then((data) => {
        const nearbyPlaces = data.features
          .map((place) => place.properties.name)
          .filter((name) => name);
        setNearby(nearbyPlaces);
      })
      .catch((err) =>
        console.error("Error fetching location or nearby places:", err)
      );
  }, [placeId]);

  return (
    <div>
      <div id="tourist">
        <div id="search">
          <h2>Search Your Perfect Getaway — Adventure Awaits! </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              getDetails(formData);
              changeInfo();
              inputRef.current.value = "";
            }}
          >
            <input
              type="text"
              required
              placeholder="e.g. Araku"
              id="name"
              name="place"
              ref={inputRef}
            />
            <button type="submit">Go!!!</button>
          </form>
        </div>
        <div id="details">
          {show && (
            <div id="inner-tourist">
              <div id="left-tourist">
                <div>{oldName}</div>
                <div style={{ marginTop: "10px" }}>
                  {nearby.length > 0 ? (
                    <ul>
                      {nearby.map((place, idx) => (
                        <li key={idx}>{place}</li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
                {formattedPlace && (
                  <div style={{ marginTop: "20px", height: "250px" }}>
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        formattedPlace
                      )}&output=embed`}
                      width="100%"
                      height="100%"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                )}
              </div>
              <div id="right-tourist">
                <WikiDetailsWithImages place={formattedPlace} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tourist;
