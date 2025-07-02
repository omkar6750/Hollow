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
            className="flip-card group aspect-[5/6] w-[80vw]  xl:w-full xl:max-w-xs xl:h-auto  rounded-lg"
            tabIndex={0}
        >
            <div className="flip-card-inner relative w-full h-full rounded-lg shadow-lg duration-700 group-hover:rotate-y-180 group-focus-within:rotate-y-180">
                {/* Front of the Card */}
                <div className="flip-card-front absolute w-full h-full">
                    <Image
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                {/* Back of the Card */}
                <div className="flip-card-back absolute w-full h-full rounded-lg bg-black p-4 flex flex-col justify-center items-center">
                    <h3 className="bates text-2xl text-red-500">{title}</h3>
                    <p className="text-sm text-center mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
};
export default FlipCard;
