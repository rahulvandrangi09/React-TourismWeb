import React, { useEffect, useState } from "react";

const WikiDetailsWithImages = ({ place }) => {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!place) return;
    const fetchWikiData = async () => {
      try {
        const summaryRes = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=5&exintro&explaintext&titles=${encodeURIComponent(
            place
          )}&format=json&origin=*`
        );
        const summaryData = await summaryRes.json();
        const pageId = Object.keys(summaryData.query.pages)[0];
        setDescription(summaryData.query.pages[pageId].extract);

        const imagesRes = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
            place
          )}&prop=images&format=json&origin=*`
        );
        const imagesData = await imagesRes.json();
        const imageFiles =
          imagesData.query.pages[pageId]?.images?.filter((img) =>
            img.title.match(/\.(jpg|jpeg|png)$/i)
          ) || [];
        const selected = imageFiles.slice(0, 3);
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
        console.error("Error:", err);
      }
    };
    fetchWikiData();
  }, [place]);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>{place}</h2>
      <p style={{ lineHeight: "1.6", maxHeight: "6em", overflow: "hidden" }}>{description}</p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {images.map((url, idx) => (
          <img key={idx} src={url} alt={`wiki-${idx}`} style={{ width: "30%", borderRadius: "10px" }} />
        ))}
      </div>
    </div>
  );
};

export default WikiDetailsWithImages;
