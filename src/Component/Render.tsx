
import React, { useState } from 'react';
import axios from 'axios';
import './Letters.css';
import { FaReplyd } from 'react-icons/fa';
import { BiHighlight } from 'react-icons/bi';
import { Post } from './Letters'
import ReplyToggle from './replyToggle'

interface props {
  letter: Post;
  removeLetter(e: React.MouseEvent<HTMLElement>): void;
  AiOutlineDelete: any;
  BiCommentEdit: any;
  LetterUpdate: any;
}

const Render = ({
  removeLetter,
  AiOutlineDelete,
  BiCommentEdit,
  letter,
  LetterUpdate,
}: props) => {
  //댓글 쓰기 훅
  const [cmtToggle, setCmtToggle] = useState(false);
  const [revisedMsgToggle, setRevisedMsgToggle] = useState(false);
  const [replytoggle, setReplyToggle] = useState(false);
  const [updateToggle, setUpdateToggle] = useState(false);
  const [reply, setReply] = useState('');


  //댓글쓰기토글

  const revisedToggle = () => {
    setRevisedMsgToggle(!revisedMsgToggle);
  };
  ////댓글 쓰기 토글 함수
  const cmtFucToggle = () => {
    setCmtToggle(!cmtToggle);
  };
  //댓글토글
  const replyToggle = () => {
    setReplyToggle(!replytoggle);
  };
  //수정토글
  const updateLetterToggle = () => {
    setUpdateToggle(!updateToggle);
  };
  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReply(e.target.value);
  };
  const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    e.preventDefault();
    if (!reply || /^\s*$/.test(reply)) {
      alert('쓸 말이 그렇게 없니 도대체?');
      return;
    } else {
      // axios.post(
      //   `https://letters-heroku.herokuapp.com/api/comments/${e.target.id}`,
      //   {
      //     name: localStorage.getItem('name'),
      //     cmt: reply,
      //     createdAt: new Date().toLocaleString(),
      //   }
      // );
      // alert('제출되었습니닷');
      // setReply('');
      // reRending();
    }
  };
  const removeReply = (e: React.MouseEvent<HTMLElement>) => {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // e.preventDefault();
    // let postId = e.target.id.split(',')[0];
    // let cmtId = e.target.id.split(',')[1];
    // if (window.confirm('진짜 댓글 지울꺼야?')) {
    //   axios.delete(
    //     `https://letters-heroku.herokuapp.com/api/comments/${postId}/${cmtId}`
    //   );
    //   alert('삭제되었습니닷');
    //   reRending();
    // } else {
    //   return;
    // }
  };
  return (
    <div className="letters-wrapper">
      {letter.createdAt.toLocaleString()}
      <div className="letter-author">
        {letter.name === '병국'
          ? `${letter.name}이가 수빈이에게`
          : `${letter.name}이가 병국이에게`}
      </div>
      {
        <div className="letters-content" key={letter._id}>
          {!updateToggle ? (
            <div dangerouslySetInnerHTML={{ __html: letter.msg }} />
          ) : (
            <LetterUpdate letter={letter} />
          )}
          <div className="letters-content-wapper">
            <span className="letters-content-delete">
              <AiOutlineDelete
                id={letter._id}
                onClick={(e: React.MouseEvent<HTMLElement>) => removeLetter(e)}
              />
            </span>
            <span className="letters-content-reply" onClick={replyToggle}>
              <FaReplyd id={letter._id} />({letter.cmt.length})
            </span>
            {replytoggle &&
              letter.cmt.map((item) => {
                return <ReplyToggle _id={item._id} cmt={item.cmt} createdAt={item.createdAt} name={item.name} removeReply={removeReply} />
              })}
            <span className="letters-content-modify" onClick={revisedToggle}>
              <BiCommentEdit />
            </span>
            {cmtToggle && (
              <form
                className="letters-reply-form"
                onSubmit={handleReplySubmit}
                id={letter._id}
              >
                <input
                  onChange={handleReplyChange}
                  type="Text"
                  name="name"
                  autoComplete="off"
                  value={reply}
                  placeholder="어떤 댓글을 달꺼니?"
                  required
                />
                <button className="button">제출</button>
              </form>
            )}
            <span>
              <BiHighlight onClick={updateLetterToggle} />
            </span>
          </div>
        </div>
      }
    </div >
  );
};
export default Render;
