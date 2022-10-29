let properties = [];

const property1 = {
    Name : "Kingswood End",
    location : {
        Street :  "2098 Caynor Circle",
        City :  "Red Bank",
        State :   "New Jersey",
        Zip_code : "07701",
        Country : "USA"
    },
    rentPrice : 2500,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 3,
        Floor : 2,
        Kitchen : 2
    },
    area : 150
  };
  
const property2 = {
    Name : "The Old Gatehouse",
    location : {
        Street :  "70 Gordon Street",
        City :  "New York",
        State :   "California",
        Zip_code : "91786",
        Country : "USA"
    },
    rentPrice : 800,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 2,
        Washroom : 2,
        Floor : 1,
        Kitchen : 1
    },
    area : 100
  };

  const property10 = {
    Name : "Pear House",
    location : {
        Street :  "4820 Bassell Avenue",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 900,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 3,
        Washroom : 3,
        Floor : 2,
        Kitchen : 1
    },
    area : 130
  };

  const property11 = {
    Name : "Frosty End",
    location : {
        Street :  "4061 Edsel Road",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 1700,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 1
    },
    area : 200
  };

  const property12 = {
    Name : "Knowle End",
    location : {
        Street :  "4493 Bagwell Avenue",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 2500,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date("2022-12-01"),
    structure : {
        Bedrooms : 2,
        Washroom : 2,
        Floor : 1,
        Kitchen : 1
    },
    area : 280
  };

  const property13 = {
    Name : "Lake View",
    location : {
        Street :  "4867 Goldleaf Lane",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 3600,
    propertyType : "City-Villa",
    currentlyAvailable : true,
    availableFrom : new Date("2023-01-01"),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 1
    },
    area : 400
  };
  const property14 = {
    Name : "Pbsrtlands",
    location : {
        Street :  "4104 Johnson Street",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 4100,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 1
    },
    area : 500
  };
  const property15 = {
    Name : "Sailsis",
    location : {
        Street :  "4626 Public Works Drived",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 600,
    propertyType : "Room Rentals",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 1,
        Washroom : 1,
        Floor : 1,
        Kitchen : 1
    },
    area : 100
  };
const property3 = {
    Name : "Koala's House",
    location : {
        Street :  "3979 Boone Street",
        City :  "Corpus Christi",
        State :   "Texas",
        Zip_code : "78476",
        Country : "USA"
    },
    rentPrice : 5000,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 5,
        Washroom : 6,
        Floor : 3,
        Kitchen : 3
    },
    area : 400
  };

  const property4 = {
    Name : "River View",
    location : {
        Street :  "193 Coolidge Street",
        City :  "Big Sky",
        State :   "Montana",
        Zip_code : "59716",
        Country : "USA"
    },
    rentPrice : 1300,
    propertyType : "Apartments",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 2,
        Washroom : 2,
        Floor : 1,
        Kitchen : 1
    },
    area : 80
  };

  const property5 = {
    Name : "Applelands",
    location : {
        Street :  "2426 Patterson Street",
        City :  "Houston",
        State :   "Texas",
        Zip_code : "77002",
        Country : "USA"
    },
    rentPrice : 500,
    propertyType : "Room Rentals",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 1,
        Washroom : 1,
        Floor : 1,
        Kitchen : 1
    },
    area : 50
  };

  const property6 = {
    Name : "The Apples",
    location : {
        Street :  "377 Pearcy Avenue",
        City :  "Miami",
        State :   "Florida",
        Zip_code : "33111",
        Country : "USA"
    },
    rentPrice : 1000,
    propertyType : "Apartments",
    currentlyAvailable : false,
    availableFrom : new Date("2022-12-01"),
    structure : {
        Bedrooms : 3,
        Washroom : 3,
        Floor : 1,
        Kitchen : 1
    },
    area : 130
  };

  const property7 = {
    Name : "Blond Lodge",
    location : {
        Street :  "3076 Roosevelt Wilson Lane",
        City :  "Lovell",
        State :   "Wyoming",
        Zip_code : "82431",
        Country : "USA"
    },
    rentPrice : 700,
    propertyType : "Room Rentals",
    currentlyAvailable : false,
    availableFrom : new Date("2022-11-15"),
    structure : {
        Bedrooms : 1,
        Washroom : 1,
        Floor : 1,
        Kitchen : 1
    },
    area : 60
  };

  const property8 = {
    Name : "Seaside",
    location : {
        Street :  "915 Spinnaker Lane",
        City :  "Chebanse",
        State :   "Illinois",
        Zip_code : "60922",
        Country : "USA"
    },
    rentPrice : 3000,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 3,
        Floor : 2,
        Kitchen : 2
    },
    area : 350
  };

  const property9 = {
    Name : "Fir End",
    location : {
        Street :  "4801 Flinderation Road",
        City :  "Bellwood",
        State :   "Illinois",
        Zip_code : "60104",
        Country : "USA"
    },
    rentPrice : 3500,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date("2023-01-01"),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 2
    },
    area : 400
  };

  const property16 = {
    Name : "Fir End",
    location : {
        Street :  "4801 Flinderation Road",
        City :  "Bellwood",
        State :   "Illinois",
        Zip_code : "60104",
        Country : "USA"
    },
    rentPrice : 3500,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date("2023-01-01"),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 2
    },
    area : 400
  };
  
  const property17 = {
    Name : "The Old Gatehouse",
    location : {
        Street :  "70 Gordon Street",
        City :  "Bellwood",
        State :   "California",
        Zip_code : "91786",
        Country : "USA"
    },
    rentPrice : 800,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 2,
        Washroom : 2,
        Floor : 1,
        Kitchen : 1
    },
    area : 100
  };

  const property18 = {
    Name : "Pear House",
    location : {
        Street :  "4820 Bassell Avenue",
        City :  "Bellwood",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 900,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 3,
        Washroom : 3,
        Floor : 2,
        Kitchen : 1
    },
    area : 130
  };

  const property19 = {
    Name : "Frosty End",
    location : {
        Street :  "4061 Edsel Road",
        City :  "Bellwood",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 1700,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 1
    },
    area : 200
  };

   properties.push(property16, property17, property18, property19, property15, property14, property13, property12, property11, property10, property1, property2, property3, property4, property5, property6, property7, property8, property9);

   export default properties;