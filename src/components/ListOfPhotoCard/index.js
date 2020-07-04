import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map((photos) => (
        <PhotoCard key={photos.id} {...photos} />
      ))}
    </ul>
  );
};


