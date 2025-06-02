import React from "react";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;

  return (
    <div className="course">
      <div className="course-card">
        {/* Görselin boyutunu style ile hallediyoruz */}
        <img
          key={id}
          src={image}
          alt={title}
          style={{ width: "225px", height: "200px", objectFit: "cover" }} // objectFit: cover görselin orantısını korur
        />
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h3>{price}</h3>
        <a href={link}>Üye Olmak İçin Tıklayınız</a>
      </div>
    </div>
  );
}

export default Course;
