"use client";

import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";
import Input from "@/components/input/Input";

export default function Login() {
  return (
    <main className="container mx-auto max-w-xl mt-5">
      <Heading label="Ver seu Amigo Secreto" />

      <div className="mt-5 flex flex-col gap-3">
        <Input
          label="Usuário"
          hint="Seu nome de usuário."
          placeholder="Exemplo: vinicius_ernani"
        />
        <Input
          label="Senha"
          hint="Sua senha. Ela tem no máximo 6 dígitos."
          placeholder="Insira sua senha aqui"
        />
        <Button
          label="Ver amigo secreto"
          onClick={() => console.log("making login")}
          block
        />
      </div>
    </main>
  );
}
