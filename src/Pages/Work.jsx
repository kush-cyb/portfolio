import React, { useState } from "react";
import item1 from "../Image/1.jpg";
import item2 from "../Image/2.jpg";
import item3 from "../Image/3.jpg";
import item4 from "../Image/4.jpg";
import item5 from "../Image/5.jpg";
import item6 from "../Image/6.jpg";

const images = [
  { id: 1, src: item1, category: "Brand" },
  { id: 2, src: item2, category: "Design" },
  { id: 3, src: item3, category: "Graphic" },
  { id: 4, src: item4, category: "Brand" },
  { id: 5, src: item5, category: "Design" },
  { id: 6, src: item6, category: "Graphic" },
];

const filters = ["All", "Brand", "Design", "Graphic"];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered = active === "All"
    ? images
    : images.filter((img) => img.category === active);

  return (
    <div style={{ padding: "40px 20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 600 }}>
        Portfolio<span style={{ color: "#000" }}>.</span>
      </h1>

      {/* Filter Buttons */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        margin: "30px 0"
      }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1rem",
              fontWeight: active === filter ? "bold" : "normal",
              borderBottom: active === filter ? "2px solid black" : "none",
              cursor: "pointer",
              padding: "5px 0"
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {filtered.map((img) => (
          <div
            key={img.id}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer"
            }}
            onMouseEnter={() => setHovered(img.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={img.src}
              alt={`Work ${img.id}`}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {hovered === img.id && (
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontWeight: "bold",
                transition: "0.3s ease"
              }}>
                <div style={{ fontSize: "1rem", marginBottom: "10px" }}>
                  WEB DESIGN
                </div>
                <div style={{ display: "flex", gap: "15px", fontSize: "1.2rem" }}>
                  <span>🔗</span>
                  <span>🔍</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
