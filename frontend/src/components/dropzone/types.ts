export interface IDropzoneProps {
  setHasFile: (hasFile: boolean) => void;
}

interface TFile { 
  name: string;
  size: number
}

export type IFiles = TFile[]