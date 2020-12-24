import React, { useState } from "react";
import axios from "axios";
import "./Letters.css";
import { FaReplyd } from "react-icons/fa";

const Render = (props) => {
  const [toggle, setToggle] = useState(false);
  const [replytoggle, setReplyToggle] = useState(false);
  const [reply, setReply] = useState("");
  const {
    reRending,
    removeLetter,
    AiOutlineDelete,
    MdModeEdit,
    letter,
  } = props;
  const url = "https://letters-heroku.herokuapp.com/api/letters";
  //수정토글
  const revisedToggle = () => {
    setToggle(!toggle);
  };
  //댓글토글
  const replyToggle = () => {
    setReplyToggle(!replytoggle);
  };
  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };
  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (!reply) {
      alert("쓸 말이 그렇게 없니 도대체?");
      return;
    } else {
      axios
        .post(
          `https://letters-heroku.herokuapp.com/api/comments/${e.target.id}`,
          {
            cmt: reply,
            createdAt: new Date().toLocaleString(),
          }
        )
        .then((data) => {
          console.log(data);
          alert("제출되었습니닷");
          reRending();
        });
    }
  };

  return (
    <div className="letters-wrapper">
      {letter.createdAt.toLocaleString()}
      {
        <div className="letters-content" key={letter._id}>
          {letter.msg}
          <div className="letters-content-wapper">
            <span className="letters-content-delete">
              <AiOutlineDelete
                id={letter._id}
                onClick={(e) => removeLetter(e)}
              />
            </span>
            <span className="letters-content-reply" onClick={replyToggle}>
              <FaReplyd id={letter._id} />
            </span>
            {replytoggle &&
              letter.cmt.map((t) => {
                return (
                  <div className="letters-reply-wapper">
                    <span>{Object.keys(t)}</span>:{" "}
                    <span>{Object.values(t)}</span>
                  </div>
                );
              })}
            <span className="letters-content-modify" onClick={revisedToggle}>
              <MdModeEdit />
            </span>
            {toggle && (
              <form onSubmit={handleReplySubmit} id={letter._id}>
                <input
                  onChange={handleReplyChange}
                  type="Text"
                  placeholder="어떤 댓글을 쓰고 싶니?"
                  value={reply}
                ></input>
                <button>댓글 달기</button>
              </form>
            )}
          </div>
          <div></div>
        </div>
      }
    </div>
  );
};
export default Render;
