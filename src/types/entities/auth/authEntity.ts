export type Auth = {
  userId: string;
  value: string;
  type: string; // allows the value to be set for a password, token etc...
  activeDate: string;
  expireDate: string;
  createdDate: string;
};
