import React, { useEffect, useState } from "react";

const WikiDetailsWithImages = ({ place }) => {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!place) return;

    const fetchWikiData = async () => {
      try {
        const summaryRes = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&titles=${encodeURIComponent(
            place
          )}&format=json&origin=*`
        );
        const summaryData = await summaryRes.json();
        const pageId = Object.keys(summaryData.query.pages)[0];
        const rawExtract = summaryData.query.pages[pageId]?.extract || "";
        const trimmedExtract = rawExtract.trim();

        const sentences = trimmedExtract.match(/[^.!?]+[.!?]+/g) || [trimmedExtract];
        const firstFewSentences = sentences.slice(0, 4).join(" ").trim();
        setDescription(firstFewSentences);

        const imagesRes = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
            place
          )}&prop=images&format=json&origin=*`
        );
        const imagesData = await imagesRes.json();
        const imagePage = imagesData.query.pages[pageId];

        const imageFiles =
          imagePage?.images?.filter((img) =>
            img.title.match(/\.(jpg|jpeg|png)$/i)
          ) || [];

        const selected = imageFiles.slice(0, 3);
        if (selected.length === 0) return;

        const titles = selected.map((img) => img.title).join("|");

        const fileInfoRes = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
            titles
          )}&prop=imageinfo&iiprop=url&format=json&origin=*`
        );
        const fileInfoData = await fileInfoRes.json();
        const urls = Object.values(fileInfoData.query.pages)
          .map((img) => img.imageinfo?.[0]?.url)
          .filter(Boolean);
        setImages(urls);
      } catch (err) {
        console.error("Error fetching Wikipedia data:", err);
        setDescription("No description available.");
        setImages([]);
      }
    };

    fetchWikiData();
  }, [place]);

  return (
    <div
      style={{ maxWidth: "800px", margin: "auto" }}
      id="Placedetails"
    >
      <h2>{place}</h2>
      <p style={{ lineHeight: "1.6" }}>
        {description || "Loading description..."}
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap"}} id="wiki-images">
        {images.length > 0 ? (
          images.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`wiki-${idx}`}
              style={{ width: "30%", borderRadius: "10px" }}
            />
          ))
        ) : (
          <p>No images available.</p>
        )}
      </div>
    </div>
  );
};

export default WikiDetailsWithImages;
