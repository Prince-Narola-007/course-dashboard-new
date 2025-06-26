interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function ThemeToggle({ darkMode, toggleDarkMode }: Props) {
  return (
    <button onClick={toggleDarkMode} className="btn btn-outline-secondary">
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
