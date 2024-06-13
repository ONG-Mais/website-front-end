import "./style.css";
interface BannerProps {
  image: string;
  title?: string;
  text?: string;
  height?: string;
  absolute?: boolean;
}

export default function Banner({ image, title, text, height, absolute }: BannerProps) {
  return (
    <div
      className={`flex h-2/3 w-full -z-10 overflow-hidden bg-neutral-900 ${
        absolute ? "absolute top-0 left-0" : ""
      } ${height}`}
    >
      <div
        className="banner w-full -mt-r21 bg-cover relative flex justify-center items-end opacity-95 "
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="z-40 text-neutral-0 p-16 flex flex-col gap-8 font-Mulish text-center">
          <h3 className="text-4xl font-bold">{title}</h3>
          <p className="text-2xl">{text}</p>
        </div>
      </div>
    </div>
  );
}
