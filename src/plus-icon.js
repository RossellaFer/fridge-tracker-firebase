export const PlusIcon = ({ accessibleTitle }) => (
  <svg
    aria-labelledby={accessibleTitle}
    role="img"
    style={{
      width: "24px",
      height: "24px",
    }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {accessibleTitle && <title id={accessibleTitle}>Item closed</title>}
    <path
      fill="currentColor"
      d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
);
