type Props = {
  pageTitle: string;
};

export function PageTitle({pageTitle}: Props) {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-3">{pageTitle}</h1>
}
