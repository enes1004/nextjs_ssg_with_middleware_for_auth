'use client';
import { useEffect, useState } from "react";
import Comment, { CommentProps } from "./Comment";
import { API_HOST } from "@/config/api_host";

const CSRCommentList: React.FC<{postId:number}> = ({postId}) => {
    const [comments,setComments]= useState<CommentProps[] | null >(null);

    useEffect(()=>{
        setTimeout(async ()=>{
            console.log(postId);
            const data = await fetch(`${API_HOST}/api/comment/${postId}`).then(
                (res) => res.json(),
              );
            setComments(data);
        }
        // wait for 2 sec
        ,2000);
    },[postId]);

    return (
    <div style={{padding:'10px'}}>
        <h4><u>コメント</u></h4>
        {
        comments===null
        ?
        <p>Loading </p>
        :
        comments.map((comment:CommentProps)=> 
            <Comment key={comment.id} {...comment}/>
        )}
    </div>
    );
}

export default CSRCommentList;