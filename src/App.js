import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCard } from "./container/ListOfPhotoCads";
import { Logo } from "./components/Logo/index";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId}/>
      ) : (
        <Fragment>
          <ListOfCategories  />
          <ListOfPhotoCard categoryId={1} />
        </Fragment>
      )}
    </div>
  );
};
