type Props = {
  children: string;
};

export function HTwo({ children }: Props) {
  return (
    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
      {children}
    </h2>
  );
}
