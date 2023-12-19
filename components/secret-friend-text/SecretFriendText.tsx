interface ISecretFriendText {
  name: string;
  secretFriend: string;
  isSorted: boolean;
}

export default function SecretFriendText(args: ISecretFriendText) {
  if (!args.isSorted)
    return (
      <p className="mt-5">
        Olá <span className="text-red-500 font-bold">{args.name}</span>! Seu
        amigo secreto ainda não foi sorteado.
      </p>
    );

  return (
    <p className="mt-5">
      Olá <span className="text-red-500 font-bold">{args.name}!</span> Seu amigo
      secreto é{" "}
      <span className="text-green-400 font-bold">{args.secretFriend}!</span>
    </p>
  );
}
