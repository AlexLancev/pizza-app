import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    className="product__item"
    speed={2}
    width={290}
    height={500}
    viewBox="0 0 290 500"
    backgroundColor="#fafafa"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="290" height="290" />
    <rect x="0" y="310" rx="10" ry="10" width="290" height="30" />
    <rect x="0" y="360" rx="10" ry="10" width="290" height="70" />
    <rect x="0" y="450" rx="10" ry="10" width="120" height="40" />
    <rect x="210" y="450" rx="10" ry="10" width="80" height="40" />
  </ContentLoader>
);

export { MyLoader };
