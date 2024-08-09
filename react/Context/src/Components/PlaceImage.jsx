import { useContext } from "react";
import imageContext from "../context/context";
import {getImageUrl} from "../utils";

function PlaceImage({ place, imageSize }) {
   imageSize = useContext(imageContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

export default PlaceImage;
