import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "신민규",
        comment: "안녕하세요. 신민규입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "김민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentElement(props) {
    const comment = props;
    return <Comment name={comment.name} comment={comment.comment} />;
}

function CommentList() {
    return <div>{comments.map(CommentElement)}</div>;
}

export default CommentList;
