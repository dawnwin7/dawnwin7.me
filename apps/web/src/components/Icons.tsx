type IconProps = { class?: string };

const arrowPaths = {
  "up-right": "M6 18 18 6M6 6h12v12",
  "down-right": "M6 6 18 18M6 18h12V6",
  up: "M12 20V4m-7 7 7-7 7 7",
  down: "M12 4v16m-7-7 7 7 7-7",
};

export function ArrowIcon(props: IconProps & { direction?: keyof typeof arrowPaths }) {
  return (
    <svg
      class={`inline-block shrink-0 align-middle ${props.class ?? ""}`}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d={arrowPaths[props.direction ?? "up-right"]} />
    </svg>
  );
}

export function RemixIcon(props: IconProps) {
  return (
    <svg
      class={`inline-block shrink-0 align-middle ${props.class ?? ""}`}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M20 7v5h-5M20 12a8 8 0 1 0-2.34 5.66" />
    </svg>
  );
}
