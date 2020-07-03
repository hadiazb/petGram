import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard/index";
import { Logo } from "./components/Logo/index";


export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
);
