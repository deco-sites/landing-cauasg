import type { Temperature } from "../loaders/temperature.ts";

export interface Props {
  location?: string;
  temp: Temperature | null;

  /** @format textarea */
  text?: string;
}

export default function Lugar(props: Props) {
  return (
    <section className="container">
      <p>
        Current temperature in {props.location}:{" "}
        <span className="font-semibold">
          {props.temp && props.temp.celsius}
        </span>
      </p>
      {props.text && <p className="mt-3">{props.text}</p>}
    </section>
  );
}
