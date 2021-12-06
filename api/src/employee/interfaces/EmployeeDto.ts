export interface EmployeeDto {
  fname: string
  lname: string
  age: number
  position: string
  passport: string
  email: string
}

export interface EmployeeView extends EmployeeDto {
  id: number
  email_confirmed: boolean
  code_verify: string
}

export interface EmployeePresence {
  fname: string
  lname: string
  date: string
}
