import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-red-300">
        {slice.primary.first_name}
      </div>
    </section>
  );
};

export default Hero;
