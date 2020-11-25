import React from "react";
import axios from "axios";

const removeLetter = (_id) => {
  const url = "https://letters-heroku.herokuapp.com/api/letters";
  if (window.confirm("진짜 지울꺼야? 너 편지를 지울꺼니? 진짜로?")) {
    axios
      .delete(url, {
        data: { id: _id },
      })
      .then((response) => {
        console.log("response", response);
        alert("지워졌어 나쁜놈아");
        //window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
};

export default removeLetter;
