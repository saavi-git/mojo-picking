export interface Driver {
  id: number;
  name: string;
  vehicle: string;
  email: string;
  licenseNo: string;
  experience: string;
  mobile: string;
  age: string;
  address: string;
  shift: string;
  licenseImg: string;
}

export interface Vehicle {
  reg: string;
  name: string;
  number: string;
  runNo: string;
  shift: string;
  service: string;
  driver: string;
}

export const drivers: Driver[] = [
  {
    id: 1,
    name: "Anna Mull",
    vehicle: "CV-78-QR",
    email: "anna.mull@mail.com",
    licenseNo: "1001010",
    experience: "3 years",
    mobile: "0400112233",
    age: "34 years",
    address: "12 Oak Street, Orange Grove",
    shift: "Morning",
    licenseImg: "/license.jpg",
  },
  {
    id: 2,
    name: "Jacob Jones",
    vehicle: "No Vehicle assign",
    email: "jjones@mail.com",
    licenseNo: "5432190",
    experience: "4 years",
    mobile: "0412345678",
    age: "28 years",
    address: "98 Lake Road, Silver Town",
    shift: "Evening",
    licenseImg: "/license.jpg",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    vehicle: "XO-54-FQ",
    email: "jennyw@mail.com",
    licenseNo: "5577543",
    experience: "2 years",
    mobile: "0450298374",
    age: "30 years",
    address: "45 Devonport Dr, Eastcity",
    shift: "Afternoon",
    licenseImg: "/license.jpg",
  },
  {
    id: 4,
    name: "Oliver",
    vehicle: "XN-33-ZQ",
    email: "oliver@email.com",
    licenseNo: "2022911",
    experience: "6 years",
    mobile: "0498761234",
    age: "41 years",
    address: "29 Regent St, Ashford",
    shift: "Night",
    licenseImg: "/license.jpg",
  },
  {
    id: 5,
    name: "John",
    vehicle: "RT-98-U1",
    email: "john@email.com",
    licenseNo: "2019181",
    experience: "8 years",
    mobile: "0411122233",
    age: "36 years",
    address: "88 Main St, Camden",
    shift: "Morning",
    licenseImg: "/license.jpg",
  },
  {
    id: 6,
    name: "Robin",
    vehicle: "MT-98-UI",
    email: "robin@email.com",
    licenseNo: "3123122",
    experience: "1 year",
    mobile: "0444213123",
    age: "27 years",
    address: "23 Hills Rd, Woodvale",
    shift: "Night",
    licenseImg: "/license.jpg",
  },
  {
    id: 7,
    name: "Alexa",
    vehicle: "No Vehicle assign",
    email: "alexa@email.com",
    licenseNo: "3654111",
    experience: "3 years",
    mobile: "0487100923",
    age: "23 years",
    address: "10 Wattle Rd, Palm Beach",
    shift: "Afternoon",
    licenseImg: "/license.jpg",
  },
  {
    id: 8,
    name: "Leslie Alexander",
    vehicle: "No Vehicle assign",
    email: "leslie@mail.com",
    licenseNo: "5409450",
    experience: "5 years",
    mobile: "0435990169",
    age: "40 years",
    address: "4 Comboyne St, Kendall 2439, South Wales",
    shift: "",
    licenseImg: "/license.jpg",
  },
  {
    id: 9,
    name: "Lie Alexander",
    vehicle: "RT-98-UI",
    email: "lie.alex@mail.com",
    licenseNo: "6032191",
    experience: "2 years",
    mobile: "0419234567",
    age: "35 years",
    address: "99 Hill Rd, Nelson",
    shift: "Day",
    licenseImg: "/license.jpg",
  },
  {
    id: 10,
    name: "Les",
    vehicle: "No Vehicle assign",
    email: "les@email.com",
    licenseNo: "2104891",
    experience: "1 year",
    mobile: "0441239876",
    age: "45 years",
    address: "17 Bridge Ln, Barley",
    shift: "",
    licenseImg: "/license.jpg",
  },
];

export const vehicles: Vehicle[] = [
  {
    reg: "CV-78-QR",
    name: "FUSO 617ZAU",
    number: "FUSO 617ZAU",
    runNo: "FUSO 617ZAU",
    shift: "Morning",
    service: "20000",
    driver: "",
  },
  {
    reg: "XN-33-ZQ",
    name: "Isuzu NQR",
    number: "ISUZU 123XKS",
    runNo: "ISUZU 123XKS",
    shift: "Day",
    service: "25000",
    driver: "Alex",
  },
  {
    reg: "XO-54-FO",
    name: "Hino 300",
    number: "HINO 300",
    runNo: "HINO 300",
    shift: "Night",
    service: "15000",
    driver: "Sam",
  },
  {
    reg: "RT-98-UI",
    name: "Volvo FE",
    number: "VOLVO FE",
    runNo: "VOLVO FE",
    shift: "Day",
    service: "32000",
    driver: "Jane",
  },
  {
    reg: "MT-98-UI",
    name: "DAF LF",
    number: "DAF LF",
    runNo: "DAF LF",
    shift: "Morning",
    service: "18000",
    driver: "Jill",
  },
];

export const activeVehiclesDrivers = drivers
  .filter(d => d.vehicle !== "No Vehicle assign")
  .map(d => `${d.vehicle}/${d.name}`);
