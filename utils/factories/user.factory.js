import { faker } from '@faker-js/faker';
import { saveUser } from '../utils/saveUser'

export function createUser() {
  const firstName = faker.person.firstName();

  const user = {
    firstName: firstName,
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'Abc@123',
    address: faker.location.streetAddress(),
    country: 'Australia',
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode('#####'),
    mobile: faker.phone.number('119########'),
  };

  saveUser(user);

  return user;
}
