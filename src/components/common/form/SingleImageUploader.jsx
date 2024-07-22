import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Upload } from "antd";
import { Row, Col, ValidationNotification, Button } from "components/common";
import { getToken } from "utils/auth";
import { UploadOutlined } from '@ant-design/icons';
import NoImage from "assets/no_image.png";

export default function SingleImageUploader(props) {
  const token = getToken();
  const [previewImg, setPreviewImg] = useState("");

  function beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 20;
    if (!isLt2M) {
      ValidationNotification("Image must smaller than 20MB!");
    }
    return isLt2M;
  }

  function handleRemove() {
    props.onChangeFile({ data: { file: "" } });
  }

  const params = {
    name: 'file',
    action: `${process.env.REACT_APP_API}common/upload_file`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {}
      if (info.file.status === 'done') {
        props.onChangeFile(info.file.response);
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  useEffect(() => {
    if (props.image) {
      setPreviewImg(props.image);
    } else {
      setPreviewImg("");
    }
  }, [props.image]);

  return (
    <Wrapper
      className={`${props.className} p-0 m-0`}
      style={{ width: props.width ? props.width : "auto" }}
    >
      <Row className={"rowThumbnail"}>
        <Col sm={24}>
          <Row className={"mt-0"}>
            {props.label ? (
              <Col span={24} className="label-container">
                <div>*{props.label}</div>
              </Col>
            ) : null}
          </Row>
          <Row className="" gutter={[24, 24]} style={{ marginTop: 3 }}>
            <Col span={24}>
              <div className="upload-container">
                {previewImg ?
                  <img src={previewImg} className="preview-img" />
                  :
                  <img src={NoImage} className="no-preview-img" />
                }
                <Upload
                  {...params}
                  listType="text"
                  accept="image/*"
                  beforeUpload={beforeUpload}
                  customRequest={props.customRequest}
                  onRemove={handleRemove}
                  maxCount={1}
                  multiple={false}
                  className="file-upload"
                >
                  <Button
                    icon={<UploadOutlined />}
                    className="upload-btn"
                  >
                    Upload Image
                  </Button>
                </Upload>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .label-container {
    color: #354052;
    font-size: 14px;
  }
  .upload-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .file-upload {
      width: 100%;
      margin-top: 20px;
      .ant-upload.ant-upload-select.ant-upload-select-text {
        width: 100%;
        .upload-btn {
          width: 100%;
        }
      }
    }
    img {
      width: 100%;
      box-shadow: 3px 4px 4px 0px rgb(0 0 0 / 15%);
    }
    .no-preview-img {
      border: 1px solid #f5f5f5;
      padding: 50px;
      object-fit: contain;
    }
  }
  .rowThumbnail {
    display: block !important;
  }
  .single-image {
    .ant-upload-select,
    .ant-upload-list-picture-card-container {
      width: calc(100% - 16px);
    }
  }
  @media (min-width: 450px) and (max-width: 767px) {
    .upload-container {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      .file-upload {
        margin-top: 0;
        padding-left: 20px;
        width: 50%;
      }
      img {
        width: 50%;
      }
    }
  }
  @media (max-width: 576px) {
    .single-image {
      .ant-upload-select,
      .ant-upload-list-picture-card-container {
        width: 100%;
      }
    }
  }
`;

