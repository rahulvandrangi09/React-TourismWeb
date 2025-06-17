import React, { useState } from "react";
import { preconnect } from "react-dom";

const History = () => {
  const [showMore, setShowMore] = useState(false);

  function toggleMore() {
    setShowMore((prev) => !prev);
  }
  return (
    <div id="main-history">
      <div id="history">
        <h1 id="history-h1">History</h1>
        <div id="inner-history">
          <div id="left-history">
            India’s history is a magnificent saga that spans over 5,000 years,
            marked by the rise of great civilizations, powerful empires,
            spiritual revolutions, and vibrant cultures. 🏺 Ancient
            Civilizations (c. 2500 BCE – 600 BCE) India's story begins with the
            Indus Valley Civilization, one of the world’s earliest urban
            cultures, known for its advanced city planning and drainage systems.
            Soon after, the Vedic Age laid the foundations of Hindu philosophy,
            Sanskrit literature, and social structures.
            <h3 onClick={toggleMore}>Read More</h3>
            {showMore ? (
              <div className="modal-overlay" onClick={toggleMore}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="close-button" onClick={toggleMore}>
                    X
                  </button>
                  <h2>More About India's History</h2>
                  <p>
                    India saw the rise of powerful empires like the Mauryas and
                    Guptas, renowned for their governance, arts, and sciences.
                    The medieval era introduced Islamic sultanates and the
                    mighty Mughal Empire, whose architectural marvels like the
                    Taj Mahal still inspire awe. The colonial period under
                    British rule led to social reform and a powerful freedom
                    movement led by Mahatma Gandhi. In 1947, India achieved
                    independence, marking the beginning of its journey as a
                    democratic republic. Modern India (Post-1947) India gained
                    independence in 1947, emerging as the world's largest
                    democracy. Since then, it has grown into a dynamic nation
                    known for its diversity, technology, culture, and global
                    influence.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div id="right-history">
            <div id="images-history">
              <img src="./kanyakumari.jpg" alt="kanyakumari" />
              <img src="./History-1.jpg" alt="history" />
              <img src="./TamilNadu.jpg" alt="tamilnadu" />
              <img src="./Shivaji.jpg" alt="shivaji" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
