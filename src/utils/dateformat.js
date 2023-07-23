export const dateformat = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function formatDate(dateString) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
