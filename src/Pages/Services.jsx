import React from "react";
import { FaLaptopCode, FaBullhorn, FaCode, FaPaintBrush, FaMobileAlt, FaCameraRetro } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Web Design",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    icon: <FaBullhorn size={40} />,
    title: "Branding",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    icon: <FaCode size={40} />,
    title: "Development",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: "Creative Design",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Fully Responsive",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    icon: <FaCameraRetro size={40} />,
    title: "Retina Ready",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever",
  },
];

const Services = () => {
  return (
    <section>
      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}>
        Services.
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              padding: "2rem",
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#f2f2f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
              }}
            >
              {service.icon}
            </div>
            <h3 style={{ fontWeight: "bold" }}>{service.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
