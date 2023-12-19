interface IGiftCard {
  number: number;
  gift: string;
}

export default function GiftCard(args: IGiftCard) {
  return (
    <div className="bg-neutral-900 py-3 px-5 rounded">
      {args.number}. {args.gift}
    </div>
  );
}
