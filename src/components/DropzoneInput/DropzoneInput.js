import React from 'react';
import Dropzone from 'react-dropzone';

// Use like component in redux-form Field
const DropzoneInput = (field) => {
  const files = field.input.value;
  const { touched, error } = field.meta;

  return (
    <div style={{ display: "flex" }}>
      <Dropzone
        name={field.name}
        accept="image/*"
        // maxSize={2000000}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}>

        <p>
          Dropp some Image here, or click to select files to upload.
       </p>
      </Dropzone>

      {touched && error && <span className="error">{error}</span>}


      {files && Array.isArray(files) && (
        <ul>
          {files.map((file, i) => (
            <div key={i} style={{ width: "200px", height: "200px" }}>
              <img src={file.preview} alt="preview" />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropzoneInput;