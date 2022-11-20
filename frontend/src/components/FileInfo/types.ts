export interface File {
    preview: string;
    name: string;
    size: number;
}

export interface IFileInfoProps {
    file: File;
    onDelete: () => void;
}

export interface IImagePreview {
    src: string;
}