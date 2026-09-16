interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({
  title = "Nothing here yet",
  message = "There is no data to show right now.",
}: EmptyStateProps) {
  return (
    <div style={{ textAlign: "center", padding: "3rem 1rem", color: "#6b7280" }}>
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
