export interface IContractRepository {
  save(id_employee: number, id_customer: number): Promise<void>
  updateStatus(passport: string): Promise<{ fname: string; lname: string }>
}
