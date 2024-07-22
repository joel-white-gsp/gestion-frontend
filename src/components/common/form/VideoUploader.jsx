import React from 'react';
import styled from 'styled-components'
import Dropzone from 'react-dropzone';
import exportImage from 'assets/export.png';
import deleteImage from 'assets/delete-icon.png';

export default function VideoUploader(props) {
  return (
    <Wrapper>
      {props.label ?
        <div className="label-container">
          <div>*{props.label}</div>
        </div> 
      : ''
      }
      <Dropzone
        onDrop={(acceptedFiles) => {
          props.onChangeFile(acceptedFiles);
        }}
        accept="video/*"
        multiple={false}
      >
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone">
            <div className="dz-message needsclick mt-12" {...getRootProps() }>
              <input {...getInputProps() } />
              <div className="d-flex justify-content-center">
                <img src={exportImage} className="export-img" />
              </div>
              <h4 className="drag-text">
                Drag files or<span> Upload Video</span>
              </h4>
            </div>
          </div>
        )}
      </Dropzone>
      <div className="dropzone-previews" id="file-previews">
        {props.files && props.files.map((image, index) => (
          <div style={{marginBottom: 12}}>
            <a href={image.preview}>
              {image.name}
            </a>
            <img
              src={deleteImage}
              className="cancelIcon"
              style={{
                position: 'static',
                marginLeft: 5
              }}
              onClick={() => props.onDeleteFile(image.name)}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .export-img {
    width: 80px;
  }
  .drag-text {
    font-size: 14px;
    text-align: center;
  }
`
