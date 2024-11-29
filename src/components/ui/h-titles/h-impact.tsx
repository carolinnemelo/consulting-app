type Props = {
  children: string
}

export function HImpact({ children }: Props) {
  return (
    <h1 className="mb-4 text-3xl font-extrabold leading-none md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}