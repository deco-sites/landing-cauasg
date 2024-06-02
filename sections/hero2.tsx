interface Props {
  /**
   * @description The description of name.
   */

  /** @format textarea */
  text: string;
}

export default function Section({ text = "Capy" }: Props) {
  return <div className="mb-6">{text}</div>;
}
