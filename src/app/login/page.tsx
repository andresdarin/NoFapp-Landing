import Link from "next/link";
import { APP_URL } from "@/lib/site";

export default function LoginPage() {
  return (
    <main>
      <h1>Login placeholder</h1>
      <p>Replace this page with real authentication connected via NEXT_PUBLIC_APP_URL ({APP_URL}).</p>
      <nav>
        <Link href="/register">Register</Link>{" · "}
        <Link href="/">Back home</Link>
      </nav>
    </main>
  );
}
