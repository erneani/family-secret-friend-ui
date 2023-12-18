interface IInput {
  label: string;
  placeholder: string;
  hint: string;
}

export default function Input(args: IInput) {
  return (
    <div className="flex flex-col max-w-xl">
      <label htmlFor="form-name">{args.label}</label>
      <input
        type="text"
        className="px-4 py-2 rounded text-black"
        placeholder={args.placeholder}
        required
      />
      <small>{args.hint}</small>
    </div>
  );
}
