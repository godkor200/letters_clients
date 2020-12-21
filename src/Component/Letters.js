import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Letters.css";
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

const Letters = () => {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [toggle, setToggle] = useState(false);
  const _effectMethod = {
    async _getLetter() {
      return await axios.get("http://localhost:4001/api/letters");
    },
  };
  // 화면 시작하자마자 데이터 랜더링하고 시작하기 위해 useEffect 사용
  useEffect(() => {
    _effectMethod._getLetter().then((res) => {
      setData(res.data);
    });
  }, [refresh]);

  const removeLetter = async (e) => {
    console.log("🚀 ~ file: Letters.js ~ line 32 ~ removeLetter ~ e", e);
    const url = `http://localhost:4001/api/letters/${e.target.id}`;
    if (window.confirm("진짜 지울꺼야? 너 편지를 지울꺼니? 진짜로?")) {
      await axios
        .delete(url)
        .then((res) => {
          alert("지워졌어 나쁜놈아");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
    reRending();
  };
  //리렌더
  const reRending = () => {
    setRefresh(!refresh);
  };
  //수정토글
  const revisedToggle = () => {
    setToggle(!toggle);
  };
  return !data ? (
    <div className="letters-wrapper">
      <div className="letters-content">
        편지를 데이터베이스에서 불러오고 있는데 오류가 있으면 안뜰꺼야 새로고침
        해보렴..{" "}
        <div className="wrap">
          <button className="button" onClick={() => reRending()}>
            <IoMdRefresh />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="letters-wrapper">
      <div className="wrap">
        <button className="button" onClick={reRending}>
          <IoMdRefresh />
        </button>
      </div>
      {data.map((letter) => (
        <div className="letters-content" key={letter._id}>
          {letter.msg}
          <div className="letters-content-wapper">
            <span className="letters-content-delete">
              <AiOutlineDelete
                id={letter._id}
                onClick={(e) => removeLetter(e)}
              />
            </span>

            <span className="letters-content-modify" onClick={revisedToggle}>
              <MdModeEdit />
            </span>
            {toggle && (
              <form>
                <input></input>
                <button id={letter._id}>수정</button>
              </form>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Letters;
