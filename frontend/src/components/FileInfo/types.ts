export interface File {
    preview?: string;
    name: string;
    size: number;
    path?: string;
    lastModified?: number;
    lastModifiedDate?: Date;
    webkitRelativePath?: string;
}

export interface IFileInfoProps {
    file: File;
    preview?: string;
    onDelete: () => void;
}

export interface IImagePreview {
    src: string;
}