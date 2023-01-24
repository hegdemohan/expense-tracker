export enum Recurrence {
  None = "none",
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}

export function isRecurrence(o: string): o is Recurrence {
  return Object.values(Recurrence).includes(o.toLowerCase() as Recurrence);
}
