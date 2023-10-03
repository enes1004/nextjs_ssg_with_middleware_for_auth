'use client';
import { useEffect, useState } from "react";
import Comment, { CommentProps } from "./Comment";
import { API_HOST } from "@/config/api_host";

const CSRCommentListByIdList: React.FC<{commentIds:number[]}> = ({commentIds}) => {
    const [comments,setComments]= useState<CommentProps[] | null >(null);

    useEffect(()=>{
        setTimeout(async ()=>{
            const data = await fetch(`${API_HOST}/api/comment?commentIds=${commentIds.join(',')}`).then(
                (res) => res.json(),
              );
            setComments(data);
        }
        // wait for 2 sec
        ,2000);
    },[commentIds]);

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

export default CSRCommentListByIdList;