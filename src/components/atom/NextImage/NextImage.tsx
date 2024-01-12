import Image from 'next/image';

interface NextImageProps {
    width?: number;
    height?: number;
    auto?: boolean;
    imgUrl: string;
    className?: string;
    alt: string;
}

export const NextImage = ({ width, height, auto, imgUrl, className, alt }: NextImageProps) => {
    return (
        <Image
            alt={alt}
            src={imgUrl}
            className={className}
            width={width}
            height={height}
        />
    );
};

