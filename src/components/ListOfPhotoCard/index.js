import React from "react";
import { PhotoCard } from "../PhotoCard/index";
import {} from "./stiles";

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4].map(id => <PhotoCard key={id} />)
      }
    </ul>
  )
};
