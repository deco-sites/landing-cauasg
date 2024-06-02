export interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <h1 className="text-4xl font-semibold text-center container">{title}</h1>
  );
}
