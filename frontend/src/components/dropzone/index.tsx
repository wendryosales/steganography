import SendIcon from '@mui/icons-material/Send';
import Fab from "@mui/material/Fab";
import { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';
import { removefile } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import api from '../../services/api';
import { FileInfo } from "../FileInfo";
import { renderDragMessage } from "./renderDragMessage";
import { Container } from "./styles/Container";
import { DropContainer } from "./styles/DropContainer";

const Dropzone = () => {

  const [ fileInfo, setFileInfo ] = useState<File | null>(null);
  const [ preview, setPreview ] = useState<string>('');

  const dispatch = useAppDispatch();

  const onDrop = useCallback((files: File[]) => {
    const preview = URL.createObjectURL(files[0]);
    setFileInfo(files[0]);
    setPreview(preview);
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
    dispatch(removefile());
  }, [])

  const onSubmitted = () => {
    const data = new FormData();
    data.append('image', fileInfo as Blob);

    api.post("/image/", data);
  }

  return (
    <>
      <Container>
        {
          !!fileInfo ? (
            <FileInfo
              file={fileInfo}
              preview={preview}
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
      {
        !!fileInfo && (
          <Fab  variant="extended" sx={{ mt: 1 }} onClick={onSubmitted}>
            <p> Enviar arquivo </p>
            <SendIcon color="success" sx={{ ml: 1 }} />
          </Fab>
        )
      }
    </>
  )
}

export default Dropzone