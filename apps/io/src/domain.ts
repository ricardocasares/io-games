export type User = {
  name: string;
  color: string;
  admin: boolean;
};

export type Room = Map<string, User>;
