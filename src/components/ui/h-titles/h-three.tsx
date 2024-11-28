type Props = {
  children: string;
};

export function HThree({ children }: Props) {
  return (
    <h3 className="text-md lg:text-lg font-semibold">
      {children}
    </h3>
  );
}
