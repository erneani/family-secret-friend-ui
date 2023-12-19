"use client";

import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="container h-screen w-screen mx-auto flex flex-col justify-center items-center gap-4">
        <Button
          label="Entrar no Amigo Secreto"
          onClick={() => router.push("/ingressar")}
        />
        <Button
          label="Visualizar seu Amigo Secreto"
          onClick={() => router.push("/login")}
        />
      </div>
    </main>
  );
}
