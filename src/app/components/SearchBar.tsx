interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="input-group" style={{ maxWidth: "200px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Search courses..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => onChange("")}
        >
          &times;
        </button>
      )}
    </div>
  );
}
