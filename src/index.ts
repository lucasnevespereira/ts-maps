import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// Create instace of User
const user = new User();
console.log(user);

// Create instace of Company
const company = new Company();
console.log(company);

// Create instance of a CustomMap
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
