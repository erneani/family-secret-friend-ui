interface IButton {
  label: string;
  onClick: () => any;
}

export default function Button(args: IButton) {
  return (
    <button
      className="bg-red-400 hover:bg-red-500 px-4 py-2 rounded border-b-4 border-red-600 font-bold"
      onClick={() => args.onClick()}
    >
      {args.label}
    </button>
  );
}
