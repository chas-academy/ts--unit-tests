type Status = "user" | "guest" | "admin";

export function verifyPermission(age: number | undefined, status: Status) {
  if (!age) {
    return false;
  }
  return (age >= 18 && status === "user") || status === "admin";
}
