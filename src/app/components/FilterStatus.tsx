interface Props {
  selected: string;
  onChange: (value: string) => void;
}

export default function FilterStatus({ selected, onChange }: Props) {
  return (
    <div className="input-group" style={{ maxWidth: "200px" }}>
      <select
        className="form-select"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All Statuses</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
      </select>
      {selected !== "All" && (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => onChange("All")}
        >
          &times;
        </button>
      )}
    </div>
  );
}
