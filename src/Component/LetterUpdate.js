import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import axios from 'axios';
import {
  EntiryWrapper,
  QuillWrapper,
  StyleButton,
} from './style/StoryFormstyle';
const EditorBlock = styled.div`
  padding: 15px;
  outline: #6eb584; ;
`;
export const LetterUpdate = (props) => {
  const { _id, msg } = props.letter;
  const [textarea, setTextArea] = useState(msg);
  const handleChange = (textarea) => {
    setTextArea(textarea);
    //변환할 값(setTextArea) = setState
  };
  const handleSubmit = (e) => {
    const url = `https://letters-heroku.herokuapp.com/api/letters/${e.target.id}`;
    e.preventDefault();
    console.log('dasdasdas', e.target.value);
    if (!textarea || /^\s*$/.test(textarea.msg)) {
      alert('쓸 말이 그렇게 없니 도대체?');
      return;
    } else {
      axios
        .put(url, {
          name: localStorage.getItem('name'),
          msg: textarea,
          createdAt: new Date().toLocaleString(),
        })
        .then((data) => {
          console.log(data);
          alert('제출되었습니닷');
          //reRending();
        });
    }

    setTextArea('');
    //일종의 체이닝 나중에 제출한다음에 뭐가 나올껀지?
    //변환할 값(setTextArea) = setState
  };
  console.log('🚀', props.letter);

  return (
    <EntiryWrapper>
      <EditorBlock className="letter-form">
        <h2>편지 수정하기</h2>
        <QuillWrapper>
          <ReactQuill theme="snow" value={textarea} onChange={handleChange} />
        </QuillWrapper>
        <StyleButton onClick={handleSubmit} id={_id}>
          수정
        </StyleButton>
      </EditorBlock>
    </EntiryWrapper>
  );
};
