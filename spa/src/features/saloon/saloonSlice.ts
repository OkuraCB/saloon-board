import { User } from "../users/usersSlice";

export interface ClosedDays {
  id: number;
  saloonId: number;
  closedAt: Date;
}

export interface Saloon {
  id: number;
  name: string;
  workDays: number;
  opening: number;
  closing: number;
  closedDays: ClosedDays[];
  partners: User[];
}
