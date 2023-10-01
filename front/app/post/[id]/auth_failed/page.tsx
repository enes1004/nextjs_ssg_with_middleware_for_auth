import { API_HOST } from "@/config/api_host";

export default async function FailedAuth({
  params: { id },
}: {
  params: { id: number };
}) {
  const auth = await fetch(`${API_HOST}/api/post/${id}/auth`, {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  return <>auth failed: {auth.reason}</>;
}
