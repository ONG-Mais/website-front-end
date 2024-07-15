/* eslint-disable @next/next/no-img-element */

interface ImageProps {
  src: string;
  alt: string;
  [key: string]: any;
}

const MockedImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

MockedImage.displayName = "MockedImage";
export default MockedImage;
