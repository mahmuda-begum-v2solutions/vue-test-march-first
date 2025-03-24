export interface ItemObj {
  id: number
  userId: number
  title: string
  body: string
}

export type TabData = {
  title: string;
  count: number;
  user: {
    name: string;
    age: number;
  };
};
