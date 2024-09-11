import React, { useCallback } from 'react'; // Import React and useCallback hook
import { useDropzone } from 'react-dropzone'; // Import useDropzone hook from react-dropzone library

// Define a functional component named MyDropzone
function App() {
  // Define the onDrop callback function to handle files when dropped
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles); // Log the array of accepted files to the console
    // You can add logic here to handle the files (e.g., upload them or display previews)
  }, []); // Empty dependency array ensures that the function is created only once

  // Destructure necessary props and state from the useDropzone hook
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, // Set the onDrop function to handle file drops
    multiple: false, // Optional: Allow only a single file to be dropped or selected
    accept: 'image/*' // Optional: Accept only files with image MIME types (e.g., png, jpg, gif)
  });

  return (
    // Define the drop zone area and spread the props returned by getRootProps()
    <div 
      {...getRootProps()} // Spread the props from getRootProps() to set up drag-and-drop events
      style={{ 
        border: '2px dashed #4CAF50', // Style: Green dashed border
        padding: '20px', // Style: Add padding inside the drop zone
        textAlign: 'center', // Style: Center the text
        borderRadius: '8px', // Style: Rounded corners
        cursor: 'pointer' // Style: Pointer cursor on hover
      }}
    >
      {/* Define the hidden input field and spread the props returned by getInputProps() */}
      <input {...getInputProps()} /> {/* Spread the props from getInputProps() to handle file selection */}
      
      {/* Conditional rendering based on whether a file is being dragged over the drop zone */}
      {isDragActive ? ( // Check if a file is being dragged over the drop zone
        <p>Drop the file here...</p> // Show this message when dragging a file over the drop zone
      ) : (
        <p>Drag 'n' drop a file here, or click to select a file</p> // Show this message when not dragging a file
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
