type Props = {
  titleTwo: string
}

export function TitleTwo({titleTwo}:Props){
  return <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">{titleTwo}</h2>
}