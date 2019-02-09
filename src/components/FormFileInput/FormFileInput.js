import React, { Fragment } from 'react';


const FileInput = ({ input: { onChange }, meta: { error } }) => {
  const onInputChange = (e) => {
    console.log('input error', error);
    onChange(e.target.files[0]);
  }

  return (
    <Fragment>
      <input
        type="file"
        onChange={onInputChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </Fragment>
  )
}

export default FileInput