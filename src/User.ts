import faker from 'faker';

// export so we can import it in index.ts
// quick aside: if we add a default keyword after export , we don't need {} when importing it.
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // this.location is not yet an object.
    // We only told Typescript that class User is going to have a property location.
    // We are responsable for initialize it
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    // Quick Note: We use parseFloat because we want numbers for our lat and lng
    // and library faker as declare lng and lat as strings.
  }
}
