interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      style={{
        padding: "1rem",
        borderRadius: "6px",
        backgroundColor: "#fee2e2",
        color: "#991b1b",
      }}
    >
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} style={{ marginTop: "0.5rem" }}>
          Try again
        </button>
      )}
    </div>
  );
}
