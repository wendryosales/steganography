import { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';
import { FileInfo } from "../FileInfo";
import { File } from "../FileInfo/types";
import { renderDragMessage } from "./renderDragMessage";
import { Container } from "./styles/Container";
import { DropContainer } from "./styles/DropContainer";

const Dropzone = () => {
  const [ fileInfo, setFileInfo ] = useState<File | null>(null);
  const onDrop = useCallback((files: File[]) => {
    setFileInfo(files[0]);
    console.log(files[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(
    {
      onDrop,
      multiple: false,
      accept: {
        'image/bmp': ['.bmp'],
      } 
  })

  return (
    <Container>
      {
        !!fileInfo ? (
          <FileInfo
            file={fileInfo}
            onDelete={() => setFileInfo(null)}/>
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