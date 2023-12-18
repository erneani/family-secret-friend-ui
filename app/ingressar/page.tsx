"use client";

import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";
import Input from "@/components/input/Input";

export default function JoinSecretFriend() {
  return (
    <main>
      <div className="container mx-auto max-w-xl pt-5">
        <Heading label="Ingressar no Amigo Secreto" />

        <form action="post" className="flex flex-col gap-y-2 mt-5">
          <Input
            hint="O nome que será sorteado."
            label="Seu nome"
            placeholder="Insira seu nome aqui"
          />
          <Input
            hint="Uma senha pequena, só pra que ninguém veja quem você sorteou."
            label="Sua senha"
            placeholder="Insira sua senha aqui"
          />
        </form>

        <h2 className="text-lg font-bold mt-5">Suas dicas para presente</h2>

        <p>
          As três dicas que auxiliam quem te sorteou a escolher seus presentes!
        </p>

        <form action="" className="mt-3 flex flex-col gap-y-2 mb-5">
          <Input
            hint="Exemplo: uma camisa social."
            label="Primeira dica"
            placeholder="Sua primeira dica de presente"
          />
          <Input
            hint="Exemplo: um short de exercício."
            label="Segunda dica"
            placeholder="Sua segunda dica de presente"
          />
          <Input
            hint="Exemplo: um copo bacana."
            label="Terceira dica"
            placeholder="Sua terceira dica de presente"
          />
        </form>

        <Button
          label="Ingressar!"
          onClick={() => console.log("Ingressei!")}
          block
        />
      </div>
    </main>
  );
}
