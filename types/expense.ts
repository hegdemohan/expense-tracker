import { Category } from "./category";
import { Recurrence } from "./reccurrence";

export type Expense = {
  id: string;
  amount: number;
  recurrence: Recurrence;
  date: Date;
  note: string;
  category: Category;
};

export type ExpensesGroup = {
  day: string;
  expenses: Expense[];
  total: number;
};
