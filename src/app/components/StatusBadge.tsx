interface Props {
  status: "open" | "closed";
}

export default function StatusBadge({ status }: Props) {
  if (status === "closed") {
    return <span className="badge bg-danger p-2">Closed</span>;
  }

  return null;
}
