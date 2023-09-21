import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader = async (args: LoaderFunctionArgs) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function ServerSideProtection() {
  return (
    <div>
      <h1>Index route</h1>
      <p>You are signed in!</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
