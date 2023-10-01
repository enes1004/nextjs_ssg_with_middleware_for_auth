import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Link href='/post'><button style={{fontSize:'16px',padding:'5px'}}>Topに戻る</button></Link> 
      <div style={{padding:'10px'}}>
        {children}
      </div>
    </>
  );
}
