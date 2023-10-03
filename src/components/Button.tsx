type ButtonProps = {
  source: string;
  children: string;
};

export default function Button({ source, children }: ButtonProps) {
  return (
    <a href={source} target="_blank">
      {children}
    </a>
  );
}
