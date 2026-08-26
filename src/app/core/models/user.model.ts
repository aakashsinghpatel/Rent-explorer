export type UserRole = 'Landlord' | 'Renter';
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
