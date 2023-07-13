import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function Upload() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      // Logic to handle file upload
      if (selectedFile) {
        // Perform the upload operation here
        console.log('Uploading file:', selectedFile);
      }
    };
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    return (
      <div>
        
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Button variant="contained" onClick={handleButtonClick}
        sx={{ 
          width: '22vh',
          backgroundColor: 'background.paper',
          color: 'black',
          textTransform: 'none',
          boxShadow: 10,
          borderRadius: 10,
          p: '16px 14px',
          m: 0.5,
          border: '0px solid rgba(218 14 14 / 42%)',
          borderWidth: 0,

          '&:hover': {
            backgroundColor: 'background.paper',
            boxShadow: 10,
          },
        }}
        >
          <Typography 
            style={{
                fontSize: '19px',
                letterSpacing: '0em',
                textAlign: 'center', 
              }}
          >Selecionar Imagem</Typography>
        </Button>
      </div>
    );
  }

export default Upload;