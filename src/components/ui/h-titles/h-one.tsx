type Props = {
  children: string
}

export function HOne({ children }: Props) {
  return (
    <h1 className="text-2xl font-bold align-middle tracking-tight">
      {children}
    </h1>
  );
}