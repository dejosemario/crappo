import Image from 'next/image';

interface NextImageProps {
    width?: number | any;
    height?: number | any;
    auto?: boolean;
    imgUrl: string | any;
    className?: string;
    alt: string;
    priority?: boolean;
}

export const NextImage = ({ width, height, auto, imgUrl, className, alt, priority}: NextImageProps) => {
    return (
        <Image
            alt={alt}
            src={imgUrl}
            className={className}
            width={width}
            height={height}
            priority={priority}
        />
    );
};

