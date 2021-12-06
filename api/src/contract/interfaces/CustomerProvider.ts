import { CustomerService } from '../../customer/CustomerService'

export interface CustomerProvider extends Pick<CustomerService, 'createCustomer'> {}
