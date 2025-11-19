type NotificationPreference = "all" | "mentions" | "none";

type NotificationContext = {
  isMentioned?: boolean;
  isCritical?: boolean;
  isMuted?: boolean;
};

export function shouldSendNotification(
  preference: NotificationPreference,
  context: NotificationContext = {}
) {
  const { isMentioned, isCritical, isMuted } = context;

  if (isMuted) {
    return false;
  }

  if (isCritical) {
    return preference !== "none";
  }

  if (preference === "all") {
    return true;
  }

  if (preference === "mentions") {
    return isMentioned;
  }
  return false;
}
