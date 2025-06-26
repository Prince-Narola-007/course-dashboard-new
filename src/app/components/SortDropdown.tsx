export type SortField = "title" | "code" | "";

interface Props {
  sortBy: SortField;
  onChange: (value: SortField) => void;
}

export default function SortDropdown({ sortBy, onChange }: Props) {
  return (
    <div className="input-group" style={{ maxWidth: "200px" }}>
      <select
        className="form-select"
        value={sortBy}
        onChange={(e) => onChange(e.target.value as SortField)}
      >
        <option value="">Sort by</option>
        <option value="title">Title</option>
        <option value="code">Code</option>
      </select>
      {sortBy !== "" && (
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
