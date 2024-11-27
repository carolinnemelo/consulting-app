type Props = {
  children: string
}

export function HImpact({ children }: Props) {
  return (
    <h1 className="text-5xl font-bold align-middle tracking-tight">
      {children}
    </h1>
  );
}