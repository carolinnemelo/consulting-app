type Props = {
  titleTwo: string
}

export function TitleThree({ titleTwo: titleThree }: Props) {
  return (
    <h2 className="mb-2 px-4 text-md font-semibold tracking-tight">
      {titleThree}
    </h2>
  );
}