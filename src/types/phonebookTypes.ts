export type User = {
  id: number | null
  fName: string
  lName: string
  phone: number
}

//export type StrictUser = Omit<User, 'id'> & { id: number }
