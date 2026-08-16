// Canonical shared validation helpers.
export function required(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}