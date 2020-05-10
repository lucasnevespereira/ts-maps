import { User } from './User';
import { Company } from './Company';

// Create instace of User
const user = new User();
console.log(user);

// Create instace of Company
const company = new Company();
console.log(company);

// Create instance of a Map
new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
