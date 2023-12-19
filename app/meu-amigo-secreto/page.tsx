"use client";

import GiftCard from "@/components/gitf-card/GiftCard";
import Heading from "@/components/heading/Heading";
import SecretFriendText from "@/components/secret-friend-text/SecretFriendText";

export default function MySecretFriend() {
  const gifts = ["Sapato Caro", "Copo bacana", "Canga de Praia"];
  const isSorted = false;

  return (
    <main className="container mx-auto max-w-xl pt-5">
      <Heading label="Meu Amigo Secreto" />

      <SecretFriendText
        name="Luiza"
        secretFriend="Adriana Siqueira"
        isSorted={isSorted}
      />

      {isSorted && (
        <>
          <h2 className="text-lg font-bold mt-5">
            As dicas para presentear Adriana Siqueira
          </h2>

          <p className="mb-5">
            Seu amigo secreto deu essas três dicas de presente:
          </p>

          <div className="flex flex-col gap-3">
            {gifts.map((gift, i) => (
              <GiftCard key={gift} gift={gift} number={i + 1} />
            ))}
          </div>
        </>
      )}

      <h2 className="text-lg font-bold mt-5">Suas dicas</h2>

      <p className="mb-5">
        Aqui você pode ver as dicas de presentes que você escolheu.
      </p>

      <div className="flex flex-col gap-3">
        {gifts.map((gift, i) => (
          <GiftCard key={gift} gift={gift} number={i + 1} />
        ))}
      </div>
    </main>
  );
}
