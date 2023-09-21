import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <ul>
      <li>
        <Link to="/client-side">Client Side Demo</Link>
      </li>
      <li>
        <Link to="/server-side">Server Side Demo</Link>
      </li>
    </ul>
  );
}
