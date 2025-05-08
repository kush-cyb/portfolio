import React from "react";
import about1 from "../Image/image.jpg"
const About = () => {
  return (
    <section style={{ display: "flex", padding: "3rem", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
      
      {/* Left: Image */}
      <div>
        <img
          src={about1} // Make sure this image exists in your public/images folder
          alt="About Me"
          style={{ width: "300px", borderRadius: "10px" }}
        />
      </div>

      {/* Right: Text and Progress Bars */}
      <div style={{ maxWidth: "600px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>About Me.</h2>
        <p style={{ color: "gray", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1rem" }}>
          UI / UX Designer & Web Developer
        </p>
        <p style={{ marginBottom: "2rem", lineHeight: "1.6" }}>
          I am <strong>Jerry Daniels</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s...
        </p>

        {/* Skill: Web Design */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Web Design</label>
          <div style={{ background: "#eee", borderRadius: "5px", overflow: "hidden", height: "20px" }}>
            <div style={{ background: "#000", width: "95%", color: "#fff", textAlign: "right", paddingRight: "5px", lineHeight: "20px" }}>
              95%
            </div>
          </div>
        </div>

        {/* Skill: Branding */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Branding</label>
          <div style={{ background: "#eee", borderRadius: "5px", overflow: "hidden", height: "20px" }}>
            <div style={{ background: "#000", width: "80%", color: "#fff", textAlign: "right", paddingRight: "5px", lineHeight: "20px" }}>
              80%
            </div>
          </div>
        </div>

        {/* Skill: Development */}
        <div style={{ marginBottom: "2rem" }}>
          <label>Development</label>
          <div style={{ background: "#eee", borderRadius: "5px", overflow: "hidden", height: "20px" }}>
            <div style={{ background: "#000", width: "90%", color: "#fff", textAlign: "right", paddingRight: "5px", lineHeight: "20px" }}>
              90%
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button style={{ background: "#000", color: "#fff", padding: "0.6rem 1.2rem", border: "none", cursor: "pointer", borderRadius: "5px" }}>
            Download C.V
          </button>
          <button style={{ background: "#fff", color: "#000", padding: "0.6rem 1.2rem", border: "1px solid #000", cursor: "pointer", borderRadius: "5px" }}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
