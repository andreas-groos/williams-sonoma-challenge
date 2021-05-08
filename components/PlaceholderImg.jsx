import React from "react";
import Img from "next/image";

export default function PlaceholderImg() {
  return (
    <Img
      src="/thumbnail.png"
      alt="placeholder image"
      height={363}
      width={363}
    />
  );
}
