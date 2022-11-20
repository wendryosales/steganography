import { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';
import { FileInfo } from "../FileInfo";
import { File } from "../FileInfo/types";
import { renderDragMessage } from "./renderDragMessage";
import { Container } from "./styles/Container";
import { DropContainer } from "./styles/DropContainer";
import { IDropzoneProps, IFiles } from "./types";

const Dropzone = ({ setHasFile }: IDropzoneProps) => {

  const [ fileInfo, setFileInfo ] = useState<File | null>(null);

  const onDrop = useCallback((files: IFiles) => {
    const preview = URL.createObjectURL(files[0] as unknown as MediaSource);
    setFileInfo({
      preview,
      name: files[0].name,
      size: files[0].size,
    });
    setHasFile(true);
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(
    {
      onDrop,
      multiple: false,
      accept: {
        'image/bmp': ['.bmp'],
      } 
  })

  const onDelete = useCallback(() => {
    setFileInfo(null);
    setHasFile(false);
  }, [])

  return (
    <Container>
      {
        !!fileInfo ? (
          <FileInfo
            file={fileInfo}
            onDelete={onDelete}/>
          
        ) : (
          <DropContainer
            {...getRootProps()} 
            isDragActive={isDragActive} 
            isDragReject={isDragReject}>
            <input {...getInputProps()} />
            {
              renderDragMessage(isDragActive, isDragReject)
            }
          </DropContainer>
        )
      }
    </Container>
  )
}

export default Dropzone