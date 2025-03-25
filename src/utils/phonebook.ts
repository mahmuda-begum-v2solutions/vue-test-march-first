import type { User } from '@/types/phonebookTypes'

export class UserInfo implements User {
  constructor(
    public id: number | null,
    public fName: string,
    public lName: string,
    public phone: number,
  ) {}
  static from(data: Partial<User> = {}) {
    return new UserInfo(
      data.id ?? null,
      data.fName ?? 'milky',
      data.lName ?? 'black',
      data.phone ?? 123456,
    )
  }
}
