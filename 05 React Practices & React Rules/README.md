# React Practices

- React Extentions
  - Eslint (eslint define rules)
  - Prettier
  - React Caveats
    - callback functions
    - Function
    - UseState Hook
    - UseEffect Hook
- img import react
- higher order component react js
- Helper Functions

#### IF You want to render a component on specific click or on Click Specific popup will display.


1. 
```diff
! const [isLoading, setIsLoading] = useState(false);

const onFileChange = async (event) => {
! setIsLoading(true);

  handleLogin();

!  setIsLoading(false);
};


!  {!isLoading ? (
    <ImageDropper htmlFor="filesUpload">
      <>
        <CloudUploadIcon />
        <p>Upload .dae file</p>
      </>
    </ImageDropper>
  ) : (
    <UploadProgressBar />
  );
}
```

2. 
```diff
import React, { useState } from 'react';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
!  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileName = selectedFile.name;
      const fileReader = new FileReader();

      fileReader.onloadstart = () => {
        setUploading(true);
      };

      fileReader.onload = () => {
        const fileContent = fileReader.result;
        // Perform further operations with the file content
        console.log('File uploaded:', fileName, fileContent);
!        setUploading(false);
      };

      fileReader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" accept=".gltf, .jpg, .png" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile || uploading}>
        Upload
      </button>

      {uploading && <ProgressBar />}
    </div>
  );
}

export default FileUploader;

```
