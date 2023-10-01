import PostNaviLink, { PostNaviLinkProps } from "./_component/PostNaviLink";
import styles from "./layout.module.css";
import LinkRandomizer from "../post/_component/LinkRandomizer";
import { API_HOST } from "@/config/api_host";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: PostNaviLinkProps[] = await fetch(`${API_HOST}/api/post`).then(
    (res) => res.json(),
  );

  return (
    <>
      <header className={styles.header}>ヘッダーです</header>
      {children}

      <div className={styles.navi}>
        <h2 style={{ display: "inline-block", margin: "14px" }}>他の記事</h2>
        <LinkRandomizer layoutClass={styles.flexBox}>
          {links.map((link) => (
            <div key={link.id} className={styles.naviItem}>
              <PostNaviLink {...link} />
            </div>
          ))}
        </LinkRandomizer>
      </div>
    </>
  );
}
