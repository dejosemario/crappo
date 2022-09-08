import Image from 'next/image';

export const NextImage = ({ width, height, auto, imgUrl, className, alt }) => {
  return (
    <Image
      alt={alt}
      src={imgUrl}
      className={className}
      width={width}
      height={height}
      layout={`${auto ? 'fill' : 'intrinsic'}`}
    />
  );
};
