import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const DetailsUser = () => {
  const data = useSelector((state) => state.user.data.users);
  const { id } = useParams()

  const userCarts = data.filter((item) => {
    return item.id == id;
  });


  return <div>
  </div>;
};

export default DetailsUser;
