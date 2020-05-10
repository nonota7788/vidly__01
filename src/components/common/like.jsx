import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//isLiked: boolean
//onLike: fuc
const Like = ({ isLiked, onLike }) => {
  return (
    <FontAwesomeIcon
      icon={isLiked ? "heart" : ["far", "heart"]}
      onClick={onLike}
    />
  );
};

export default Like;
