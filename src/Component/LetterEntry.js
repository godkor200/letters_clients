import React from "react";
import Letters from "./Letters";
import LetterAdd from "./LetterAdd";
import "../App.css";
import { Helmet } from "react-helmet";
const LetterEntry = () => {
  return (
    <div className="body-warpper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>편지쓰기</title>
      </Helmet>
      <LetterAdd />
      <Letters />
    </div>
  );
};
export default LetterEntry;
