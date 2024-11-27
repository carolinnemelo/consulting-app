type Props = {
  children: string
}

export function HOne({ children }: Props) {
  return (
    <h1 className="my-1 px-4 text-2xl font-semibold align-middle tracking-tight">
      {children}
    </h1>
  );
}