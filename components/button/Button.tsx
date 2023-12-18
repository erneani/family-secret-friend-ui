interface IButton {
  label: string;
  onClick: () => any;
  block?: boolean;
}

export default function Button(args: IButton) {
  let styles = `bg-red-400 hover:bg-red-500 px-4 py-2 rounded border-b-4 border-red-600 font-bold`;

  if (args.block) styles += " w-full max-w-xl";

  return (
    <button className={styles} onClick={() => args.onClick()}>
      {args.label}
    </button>
  );
}
