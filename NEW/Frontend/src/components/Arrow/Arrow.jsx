import ImageSlider from "./ImageSlider";
const Arrow = () => {
  const slides = [
    { url: "./images/m3.jpg", title: "project" },
    { url: "./images/m13.png", title: "project" },
    { url: "./images/m6.png", title: "project" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Arrow;
