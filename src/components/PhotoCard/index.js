import React, { useEffect, useRef } from "react";
import { ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element = useRef(null);

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      console.log(entries);
    })
    observer.observe(element.current)
  }, [element])

  return (
    <article ref={element}>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={DEFAULT_IMAGE} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size="32px" /> {likes} likes!!!
      </Button>
    </article>
  );
};
