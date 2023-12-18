interface IHeading {
  label: string;
}

export default function Heading(args: IHeading) {
  return <h1 className="font-bold text-2xl">{args.label}</h1>;
}
