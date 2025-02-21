type Props = {
  size: string;
  stroke: string;
  fill: string;
  show: boolean;
};

export default function Loader({ size, fill, stroke, show }: Props) {
  return (
    show && (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" height={"35px"}>
        <circle fill={fill} stroke={stroke} strokeWidth="15" r={size} cx="45" cy="35">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1"
            values="35;65;35;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle fill={fill} stroke={stroke} strokeWidth="15" r={size} cx="90" cy="35">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1"
            values="35;65;35;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle fill={fill} stroke={stroke} strokeWidth="15" r={size} cx="135" cy="35">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1"
            values="35;65;35;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>
    )
  );
}
