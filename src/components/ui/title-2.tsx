type Props = {
  titleThree: string
}

export function TitleThree({ titleThree }: Props) {
  return (
    <h2 className="my-1 px-4 text-md font-semibold align-middle tracking-tight">
      {titleThree}
    </h2>
  );
}