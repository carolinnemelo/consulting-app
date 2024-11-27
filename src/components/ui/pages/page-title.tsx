type Props = {
  pageTitle: string;
};

export function PageTitle({pageTitle}: Props) {
  return <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl pb-3">{pageTitle}</h1>
}
