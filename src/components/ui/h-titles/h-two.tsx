type Props = {
  children: string;
};

export function HTwo({ children }: Props) {
  return (
    <h2 className="mb-8 text-lg text-muted-foreground font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-background">
      {children}
    </h2>
  );
}
