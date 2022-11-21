import { Image } from "../../redux/reducers/imagesReducer";

export interface IDialogSelectProps {
  image: Image;
  onComeBack: () => void;
}