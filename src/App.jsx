import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function App() {
  const [file, setFile] = useState(null); // State to store the selected file

  // Callback function to handle the file drop
  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0]; // Only one file is allowed
    setFile(selectedFile); // Set the file in state
  }, []);

  // Hook for configuring the dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false, // Only allow a single file
    accept: 'image/*', // Accept only images
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #4CAF50',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <p>Drag 'n' drop a file here, or click to select a file</p>
      )}

      {file && (
        <div style={{ marginTop: '20px' }}>
          <h4>Selected File:</h4>
          <p>{file.name}</p>
          {file.type.startsWith('image/') && (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
            />
          )}
        </div>
      )}
    </div>
  );
}

// explanation
// onDrop: A callback function that is triggered when a file is dropped or selected. It takes
// acceptedFiles as an argument, which contains an array of files. Since we only allow one file, we select the first item (acceptedFiles[0]).
// is a destructuring assignment that extracts specific properties (getRootProps, getInputProps, and isDragActive) from the object returned by the useDropzone hook provided by the react-dropzone library.

// getRootProps(): Sets up the drop zone area.
// getInputProps(): Sets up the hidden input for file selection.
// isDragActive: Indicates if a file is being dragged over the drop zone.

export default App;
