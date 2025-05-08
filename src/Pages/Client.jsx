import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Envato Customer",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Freelancer",
    text: "This service is amazing! It helped me launch my business quickly and easily.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const stats = [
  { icon: "👥", label: "Happy Customers", value: 850 },
  { icon: "👍", label: "Complete Projects", value: 230 },
  { icon: "📢", label: "Lines Of Code", value: 9450 },
  { icon: "📥", label: "Files Downloaded", value: 780 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "50px 20px", background: "#f8f9fa" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}>
        Testimonials<span style={{ color: "#000" }}>.</span>
      </h2>

      {/* Testimonial */}
      <div>
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px"
          }}
        />
        <p style={{
          maxWidth: "600px",
          margin: "0 auto 20px",
          color: "#6c757d",
          fontSize: "1rem",
          lineHeight: "1.5"
        }}>
          {testimonials[current].text}
        </p>
        <h4 style={{ margin: "10px 0 5px" }}>{testimonials[current].name}</h4>
        <small style={{ color: "#777" }}>{testimonials[current].role}</small>

        {/* Dots */}
        <div style={{ marginTop: "20px" }}>
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: current === index ? "#555" : "#ccc",
                margin: "0 5px",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "60px"
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ padding: "20px", textAlign: "center", minWidth: "150px" }}>
            <div style={{ fontSize: "2rem" }}>{stat.icon}</div>
            <h3 style={{ margin: "10px 0", fontSize: "1.5rem" }}>{stat.value}</h3>
            <p style={{ color: "#6c757d", margin: 0 }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
