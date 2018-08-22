import React, { Component, Fragment } from 'react';


class FileInput extends Component {

  onChange = (e) => {
    const { input: { onChange }, meta: {error} } = this.props;
    console.log('input error', error);
    
    onChange(e.target.files[0]);
  }

  render() {
    const { meta: { error} } = this.props;

    return (
      <Fragment>
        <input
          type="file"
          onChange={this.onChange}
        />
        { error && <div className="invalid-feedback">{error}</div> }
      </Fragment>
      )
  }
}

export default FileInput