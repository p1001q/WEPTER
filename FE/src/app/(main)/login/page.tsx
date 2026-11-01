import { firstParam } from "@/lib/query";
import { LoginScreen } from "./_components/LoginScreen";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ back?: string | string[] }>;
}) {
  const back = firstParam((await searchParams).back);
  return <LoginScreen key={back} back={back} />;
}
