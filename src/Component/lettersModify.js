import React, { useState } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import {
  EntiryWrapper,
  QuillWrapper,
  StyleButton,
} from "./style/StoryFormstyle";
const EditorBlock = styled.div`
  padding: 5px;
  outline: #6eb584; ;
`;
const LettersModify = (props) => {
  console.log(props);
  const { msg } = props.letter;
  const [textarea, setTextArea] = useState(msg);
  const handleChange = (textarea, msg) => {
    textarea = msg;
    setTextArea(textarea);
    //변환할 값(setTextArea) = setState
  };
  const handleSubmit = (e) => {
    const url = `http://localhost:4001/api/letters/${e.target.id}`;
    e.preventDefault();
    console.log(e);
    if (!textarea || /^\s*$/.test(textarea.msg)) {
      alert("쓸 말이 그렇게 없니 도대체?");
      return;
    } else {
      axios
        .put(url, {
          name: localStorage.getItem("name"),
          msg: textarea,
          createdAt: new Date().toLocaleString(),
        })
        .then((data) => {
          console.log(data);
          alert("제출되었습니닷");
        });
    }

    //setTextArea("");
    //일종의 체이닝 나중에 제출한다음에 뭐가 나올껀지?
    //변환할 값(setTextArea) = setState
  };
  return (
    <EntiryWrapper>
      <EditorBlock className="letter-form">
        <h2>편지수정</h2>
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            value={msg}
            onChange={handleChange}
            placeholder={"어떤 말을 쓰고 싶니?"}
          />
        </QuillWrapper>
        <StyleButton onClick={handleSubmit}>수정</StyleButton>
      </EditorBlock>
    </EntiryWrapper>
  );
};
export default LettersModify;
