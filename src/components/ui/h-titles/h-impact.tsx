type Props = {
  children: string
}

export function HImpact({ children }: Props) {
  return (
    <h1 className="mb-4 text-4xl font-extrabold leading-none md:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
}