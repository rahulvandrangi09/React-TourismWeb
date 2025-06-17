import React from "react";

const About = () => {
  return (
    <div>
      <div id="about">
        <div id="left-about">
          <h1>
            incredible <br /> INDIA
          </h1>
          <h3>
            India — a land where ancient traditions meet vibrant modern life.
            From the snow-capped peaks of Kashmir to the sun-kissed shores of
            Kanyakumari, every corner tells a unique story. Explore majestic
            palaces, spiritual temples, diverse cultures, and unmatched cuisine.
            Incredible India awaits you — colorful, soulful, unforgettable.
          </h3>
        </div>
        <div className="carousel-container" id="right-about">
          <div className="carousel-track">
            {[
              {
                img: "./Himalayas.jpg",
                alt: "Himalayas",
                text: "Himalayas",
                link: "https://en.wikipedia.org/wiki/Himalayas",
              },
              {
                img: "./Tirupati.jpg",
                alt: "Tirupati",
                text: "Tirupati",
                link: "https://en.wikipedia.org/wiki/Tirupati",
              },
              {
                img: "./Kedarnath.jpg",
                alt: "Kedarnath",
                text: "Kedarnath",
                link: "https://en.wikipedia.org/wiki/Kedarnath",
              },
              {
                img: "./GoldenTemple.jpg",
                alt: "Golden Temple",
                text: "Golden Temple",
                link: "https://en.wikipedia.org/wiki/Golden_Temple",
              },
              { 
                img: "./Karnataka.jpg",
                alt: "Karnataka",
                text: "Mallalli Waterfalls",
                link: "https://en.wikipedia.org/wiki/Mallalli_Falls",
              },
              {
                img: "./Taj-Mahal.jpg",
                alt: "Taj Mahal",
                text: "Taj-Mahal",
                link: "https://en.wikipedia.org/wiki/Taj_Mahal",
              },
            ].map((card, i) => (
              <div id="image-cards" key={`card-${i}`}>
                <a
                  href={card.link}
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <img src={card.img} alt={card.alt} />
                  <p>{card.text}</p>
                </a>
              </div>
            ))}

            {[
              {
                img: "./Himalayas.jpg",
                alt: "Himalayas",
                text: "Himalayas",
                link: "https://en.wikipedia.org/wiki/Himalayas",
              },
              {
                img: "./Tirupati.jpg",
                alt: "Tirupati",
                text: "Tirupati",
                link: "https://en.wikipedia.org/wiki/Taj_Mahal",
              },
              {
                img: "./Kedarnath.jpg",
                alt: "Kedarnath",
                text: "Kedarnath",
                link: "https://en.wikipedia.org/wiki/Kedarnath",
              },
              {
                img: "./GoldenTemple.jpg",
                alt: "Golden Temple",
                text: "Golden Temple",
                link: "https://en.wikipedia.org/wiki/Himalayas",
              },
              {
                img: "./Karnataka.jpg",
                alt: "Karnataka",
                text: "Mallalli Waterfalls",
                link: "https://en.wikipedia.org/wiki/Taj_Mahal",
              },
              {
                img: "./Taj-Mahal.jpg",
                alt: "Taj Mahal",
                text: "Taj-Mahal",
                link: "https://en.wikipedia.org/wiki/Kedarnath",
              },
            ].map((card, i) => (
              <div id="image-cards" key={`card-dup-${i}`}>
                <a
                  href={card.link}
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <img src={card.img} alt={card.alt} />
                  <p>{card.text}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
