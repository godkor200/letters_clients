import React from "react";
import useAxios from "axios-hooks";
import "./Letters.css";
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const Letters = () => {
  const [{ data, loading, error, respones }, refetch] = useAxios({
    method: "GET",
    url: "https://letters-heroku.herokuapp.com/api/letters",
  });

  const removeLetter = (_id) => {
    if (window.confirm("진짜 지울꺼야? 너 편지를 지울꺼니? 진짜로?")) {
      return;
    }
  };

  return loading || error ? (
    <div className="letters-wrapper">
      <div className="letters-content">
        편지를 데이터베이스에서 불러오고 있는데 오류가 있으면 안뜰꺼야 새로고침
        해보렴..{" "}
        <div class="wrap">
          <button class="button" onClick={refetch}>
            <IoMdRefresh />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="letters-wrapper">
      <div class="wrap">
        <button class="button" onClick={refetch}>
          <IoMdRefresh />
        </button>
      </div>
      {data.map((letter) => (
        <div className="letters-content" key={letter._id}>
          {letter.msg}
          <div className="letters-content-wapper">
            <span className="letters-content-delete">
              <AiOutlineDelete onClick={() => removeLetter(letter._id)} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Letters;
