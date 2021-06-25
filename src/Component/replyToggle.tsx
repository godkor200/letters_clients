import React from 'react'
import { Icmt } from './Letters'
import { MdSubdirectoryArrowRight } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai'

const ReplyToggle: React.FC<Icmt> = ({ _id, name, createdAt, cmt, removeReply }: Icmt) => {
    return (
        <div>
            <div className="letters-reply-wapper" key={_id}>
                <div className="replyTime">{createdAt}</div>
                <span className="replyComment">
                    <MdSubdirectoryArrowRight />
                    {name}
                </span>
                <div>{cmt}</div>
                <div className="letters-reply-delete" onClick={removeReply} id={_id}>
                    <AiOutlineDelete />
                </div>
            </div>
        </div>
    )
}

export default ReplyToggle
