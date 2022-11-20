import { messageColors } from "./UploadMessage";

export interface IDropContainerProps {
    isDragActive: boolean;
    isDragReject: boolean;
}


export interface IUploadMessage {
    type?: keyof typeof messageColors;
}