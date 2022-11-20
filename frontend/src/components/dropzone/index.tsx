import { Container } from "./styles/Container";
import { DropContainer } from "./styles/DropContainer";
import { FileInfo } from "../FileInfo";
import { removefile } from "../../redux/actions";
import { renderDragMessage } from "./renderDragMessage";
import { useAppDispatch } from "../../redux/hooks";
import { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';
import api from '../../services/api';
import Fab from "@mui/material/Fab";
import SendIcon from '@mui/icons-material/Send';

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
    data.append('file', fileInfo as Blob);

    api.post('/upload', data)
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