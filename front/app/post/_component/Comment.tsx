import Link from "next/link";

export type CommentProps = {
  id: number;
  content: string;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
  };
};

const Comment: React.FC<CommentProps> = ({ content, user:{name}, id }) => {
  return (
    <div style={{margin:'15px',marginLeft:'40px'}}>
      <h6>by {name}:</h6>
      <p>{content}</p>
    </div>
   );
};

export default Comment;
