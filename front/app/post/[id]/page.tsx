import { API_HOST } from "@/config/api_host";
import CSRCommentList from "../_component/CSRCommentList";
import CSRCommentListByIdList from "../_component/CSRCommentListByIdList";

type PostProps = {
  title: string;
  content: string;
  author: string;
  id: number;
};

export async function generateStaticParams() {
  const data: PostProps[] = await fetch(`${API_HOST}/api/post/`).then((res) =>
    res.json(),
  );
  return data.map(({ id }) => ({ id: id.toString() }));
}

export default async function Post({
  params: { id },
}: {
  params: { id: number };
}) {
  const data: PostProps = await fetch(`${API_HOST}/api/post/${id}`).then(
    (res) => res.json(),
  );
  const { title, author, content } = data;

  // SSG＋CSRのデモのため、変な対応
  // コメントのidだけSSGで取って、CSRCommentListByIdListにて、内容データをCSRで取る
  const commentIds = await fetch(`${API_HOST}/api/comment/${id}`).then(
    (res) => res.json(),
  ).then(
    (data) => data.map(({ id }:{id:number}) => id ) 
  );

  return (
    <>
      <h1>
        {title} #{id}
      </h1>
      <h3>by {author}</h3>
      {content}
      <CSRCommentListByIdList commentIds={commentIds} />
    </>
  );
}
