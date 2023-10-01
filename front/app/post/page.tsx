import { API_HOST } from "@/config/api_host";
import PostNaviLink, { PostNaviLinkProps } from "./_component/PostNaviLink";

export default async function Home() {
  const links: PostNaviLinkProps[] = await fetch(`${API_HOST}/api/post`).then(
    (res) => res.json(),
  );

  return (
    <>
      <h1>ポストホームページです</h1>
      <div
        style={{ display: "flex", padding: "10px", flexDirection: "column" }}
      >
        {links.map((link) => (
          <div
            style={{
              margin: "10px",
              padding: "5px",
              backgroundColor: "#eeeeee",
            }}
            key={link.id}
          >
            <PostNaviLink {...link} />
          </div>
        ))}
      </div>
    </>
  );
}
