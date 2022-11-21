import { Image } from "../../redux/reducers/imagesReducer";

export interface IStandardImageProps {
  onClick: (data: Image) => void;
}