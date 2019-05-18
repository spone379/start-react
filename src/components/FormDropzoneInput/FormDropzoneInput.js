import React from 'react';
import Dropzone from 'react-dropzone'; // works with version "^4.2.13"


const DropzoneInput = (field) => {
  const files = field.input.value;
  const { touched, error } = field.meta;
  const styleDiv = { width: "200px", height: "200px", marginLeft: "15px" };

  const preloadPhoto = () => {
    if (!files) {
      return (
        <div style={styleDiv}>
          <img src={field.preloadAva} alt="preview" />
        </div>
      )
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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

      {preloadPhoto()}
      {files && Array.isArray(files) && (
        <>
          {files.map((file, i) => (
            <div key={i} style={styleDiv}>
              <img src={file.preview} alt="preview" />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default DropzoneInput;