import Image, { StaticImageData } from "next/image";

interface FlipCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div
      className="flip-card group aspect-[5/6] w-[80vw] rounded-lg sm:w-[60vw] xl:h-auto xl:w-full xl:max-w-xs"
      tabIndex={0}
    >
      <div className="flip-card-inner relative h-full w-full rounded-lg shadow-lg duration-700 group-focus-within:rotate-y-180 group-hover:rotate-y-180">
        {/* Front of the Card */}
        <div className="flip-card-front absolute h-full w-full">
          <Image
            src={imageSrc}
            alt={title}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        {/* Back of the Card */}
        <div className="flip-card-back absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-black p-4">
          <h3 className="bates text-2xl text-red-500">{title}</h3>
          <p className="mt-2 text-center text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default FlipCard;
