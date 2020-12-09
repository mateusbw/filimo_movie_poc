import React from "react";
import { useSelector } from "react-redux";
import TitleList from "../../components/TitleList/TitleList";
import { Page } from "../../layouts/Page";
import { myWishlist } from "../../store/modules/user/userSelectors";

const MyWishlist = () => {
  const movies = useSelector(myWishlist);
  return (
    <Page>
      <h1 className="heading">My Wishlist</h1>
      <TitleList movies={movies} />
    </Page>
  );
};

export default MyWishlist;
