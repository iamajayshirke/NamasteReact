import { useState } from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";
const RestoCard = ({ restoData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultCardStyle = {
    width: "300px",
    padding: "15px",
    margin: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "white",
    transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };

  const hoveredCardStyle = {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-5px)", // Slightly move the card up
  };

  const cardStyle = isHovered
    ? { ...defaultCardStyle, ...hoveredCardStyle }
    : defaultCardStyle;

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={()=> {console.log(restoData,"Rest Data")}}
    >
      <img
        src={`${SWIGGY_IMG_URL}${restoData?.info?.cloudinaryImageId}`} // Replace with a real image URL
        alt={restoData?.info?.name}
        style={{
          width: "100%",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{restoData?.info?.name}</h3>
        <p>{restoData?.info?.cuisines?.join(", ")}</p>
        <p>
          ⭐ {restoData?.info?.avgRating} •{" "}
          {restoData?.info?.sla?.slaString}
        </p>
      </div>
    </div>
  );
};

export default RestoCard;
