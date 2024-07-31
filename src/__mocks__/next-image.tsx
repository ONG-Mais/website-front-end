/* eslint-disable @next/next/no-img-element */

interface ImageProps {
  src: string;
  alt: string;
  [key: string]: any;
}

/**
 * @description Esse mock foi criado substituir todas as chamadas por next/image para uma tag <img>.
 * A razão disso é porque o Jest não é capaz de lidar com o next/image e todos os testes que envolvem o import do mesmo
 * retornam um erro na execução dos tetes.
 *
 * Para que isso , é necessároi alterar o arquivo jest.config para que o jest leia esse script quando encontrar o next/image.
 * O jest.config deve conter:
 * const config: Config = {
 * ...demais configurações...
 * moduleNameMapper: {
 *...demais configurações...
 * "^next/image$": "<rootDir>/src/__mocks__/next-image.tsx", (Podemos ajustar o caminho de acordo com a necessidade)
 * }};
 */
const MockedImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

MockedImage.displayName = "MockedImage";
export default MockedImage;
