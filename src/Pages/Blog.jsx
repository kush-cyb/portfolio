import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import post1Image from '../Image/2 (1).jpg';
import post2Image from '../Image/3 (1).jpg';
import post3Image from '../Image/4 (1).jpg';
import post4Image from '../Image/1 (2).jpg';

const blogPosts = [
  {
    id: 1,
    category: "Trends",
    title: "Master These Awesome New Skills in March 2018",
    image: post1Image,
    link: "#",
  },
  {
    id: 2,
    category: "Themeforest",
    title: "The 20 Best Lightroom Presets You Need to Know About",
    image: post2Image,
    link: "#",
  },
  {
    id: 3,
    category: "Trends",
    title: "Best Design Items to Appeal to the Millennial Generation",
    image: post3Image,
    link: "#",
  },
  {
    id: 4,
    category: "Trends",
    title: "Top WordPress Themes and Plugins for Hotels, Travel, and",
    image: post4Image,
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <div style={{ padding: "50px 20px", background: "#f8f9fa" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "40px", textAlign: "center" }}>
        Our Blog<span style={{ color: "#000" }}>.</span>
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div style={{
              width: "100%",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              borderRadius: "4px",
              overflow: "hidden",
              textAlign: "left",
            }}>
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ padding: "15px" }}>
                <small style={{ color: "#888" }}>{post.category}</small>
                <h4 style={{ fontSize: "1rem", margin: "10px 0", fontWeight: "bold" }}>
                  {post.title}
                </h4>
                <a href={post.link} style={{ color: "#000", textDecoration: "underline", fontSize: "0.9rem" }}>
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSection;
