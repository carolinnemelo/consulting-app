import { CarouselItem, HImpact, HTwo } from "@/components";

type Item = {
  title: string;
  description: string;
}[]

export function CarouselItems({ items }: Item[]) {
  return items.map((item, index) => (
    <CarouselItem key={index}>
      <HImpact>{item.title}</HImpact>
      <HTwo>{item.description}</HTwo>
    </CarouselItem>
  ));
}
