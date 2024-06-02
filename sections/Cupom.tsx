export interface Props {
  code?: string;
  description?: string;
}

export default function Cupom(props: Props) {
  return (
    <div>
      <p>
        Cupom code: <span>{props.code}</span>
      </p>
      <p>{props.description}</p>
    </div>
  );
}
