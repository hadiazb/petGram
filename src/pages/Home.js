import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCard } from "../container/ListOfPhotoCads";

export const Home = ({ categoryId }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </Fragment>
  );
};
