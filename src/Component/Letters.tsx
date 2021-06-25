import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Letters.css';
import Render from './Render';
import { IoMdRefresh } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiCommentEdit } from 'react-icons/bi';
import LetterAdd from './LetterAdd';
// import { Helmet } from 'react-helmet';
import LetterUpdate from './LetterUpdate';
import { api } from '../config/api';
import { useFetch } from '../config/hook';

export interface Post {
  cmt: Icmt[]
  createdAt: string
  msg: string
  name: string
  __v?: number
  _id: string
}
export interface Icmt {
  cmt: string;
  createdAt: string;
  name: string;
  _id: string;
  removeReply(e: React.MouseEvent<HTMLElement>): void;
}
const Letters = () => {
  const { status, data, error, reRending } = useFetch<Post[]>(api.GET_LETTER);
  console.log(status, data, error);

  const removeLetter = async (e: React.MouseEvent<HTMLElement>) => {
    const url = `${api.DELETE_LETTER}/${e.currentTarget.id}`;
    if (window.confirm('진짜 지울꺼야? 너 편지를 지울꺼니? 진짜로?')) {
      await axios
        .delete(url)
        .then((res) => {
          alert('지워졌어 나쁜놈아');
          reRending()
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };
  //리렌더


  return !data ? (
    <div className="letters-wrapper">
      <LetterAdd />
      <div className="letters-content">
        불러오고 있습니다.
        <div className="wrap">
          {/* <button className="button" >
            <IoMdRefresh />
          </button> */}
        </div>
      </div>
    </div>
  ) : (
    <div className="letters-wrapper">
      <div className="versiontag">v1.1 : Implemented TextEditer</div>
      <LetterAdd reRending={reRending} />
      {data.map((letter) => {
        return (
          <Render
            letter={letter}
            AiOutlineDelete={AiOutlineDelete}
            BiCommentEdit={BiCommentEdit}
            removeLetter={removeLetter}
            LetterUpdate={LetterUpdate}
          />
        );
      })}
    </div>
  );
};

export default Letters;
