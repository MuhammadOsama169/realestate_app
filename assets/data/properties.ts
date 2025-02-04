import japan from "@/assets/images/japan.png";
import newyrok from "@/assets/images/new-york.png";
import avatar from "@/assets/images/avatar.jpg";

export const featuredData = [
  {
    id: "f1",
    name: "Beautiful Villa",
    address: "123 Sunset Blvd",
    rating: 4.9,
    price: 250000,
    image: japan,
    propertyImages: [japan, newyrok],
    type: "Apartment",
    amenities: {
      beds: 2,
      bath: 2,
      size: "200 sqft",
      wifi: true,
      smoke_detector: false,
    },
    agent: {
      image: avatar,
      name: "Natasha Romonof",
      tel: "0506342504",
      email: "m.osama169@gmail.com",
    },
    overview:
      "Sleek, modern 2-bedroom apartment with a great view, spacious interiors, and an open-plan design. Enjoy quality finishes and top amenities in a vibrant neighborhood.",
  },
  {
    id: "f2",
    name: "Modern Apartment",
    address: "456 Sunrise Ave",
    rating: 4.8,
    price: 180000,
    image: japan,
    propertyImages: [japan, newyrok],
    type: "Apartment",
    amenities: {
      beds: 3,
      bath: 2,
      size: "150 sqft",
      wifi: true,
      smoke_detector: true,
    },
    agent: {
      image: avatar,
      name: "John Doe",
      tel: "1234567890",
      email: "john.doe@example.com",
    },
    overview:
      "This modern apartment boasts a clean design and functional layout. The property features contemporary finishes, reliable amenities, and offers a perfect blend of comfort and style for urban living.",
  },
  {
    id: "f3",
    name: "Modern Apartment 3",
    address: "456 Sunrise Ave",
    rating: 4.8,
    price: 180000,
    image: japan,
    propertyImages: [japan, newyrok],
    type: "Apartment",
    amenities: {
      beds: 2,
      bath: 1,
      size: "120 sqft",
      wifi: true,
      smoke_detector: true,
    },
    agent: {
      image: avatar,
      name: "Jane Smith",
      tel: "9876543210",
      email: "jane.smith@example.com",
    },
    overview:
      "Experience contemporary urban living in this bright apartment. Featuring modern amenities, efficient space planning, and a location that keeps you connected to the heart of the city.",
  },
  {
    id: "f4",
    name: "Modern Apartment 4",
    address: "456 Sunrise Ave",
    rating: 4.8,
    price: 180000,
    image: japan,
    propertyImages: [japan, newyrok],
    type: "Apartment",
    amenities: {
      beds: 1,
      bath: 1,
      size: "100 sqft",
      wifi: true,
      smoke_detector: false,
    },
    agent: {
      image: avatar,
      name: "Alice Johnson",
      tel: "5551234567",
      email: "alice.johnson@example.com",
    },
    overview:
      "A compact and efficient apartment designed for modern living. Enjoy a comfortable space with essential amenities, stylish decor, and a convenient urban location.",
  },
];

export const recommendedData = [
  {
    id: "r1",
    name: "Cozy Cottage",
    address: "789 Maple Street",
    rating: 4.7,
    price: 150000,
    image: newyrok,
    propertyImages: [newyrok, japan, newyrok],
    type: "Cottage",
    amenities: {
      beds: 2,
      bath: 1,
      size: "180 sqft",
      wifi: true,
      smoke_detector: true,
    },
    agent: {
      image: avatar,
      name: "Emily Green",
      tel: "3216549870",
      email: "emily.green@example.com",
    },
    overview:
      "Discover the charm of country living in this cozy cottage. With rustic finishes, a warm interior, and modern conveniences, this property offers a delightful escape from the urban rush.",
  },
  {
    id: "r2",
    name: "Luxury Condo",
    address: "321 Oak Avenue",
    rating: 4.9,
    price: 300000,
    image: newyrok,
    propertyImages: [newyrok, japan, newyrok],
    type: "Condo",
    amenities: {
      beds: 3,
      bath: 2,
      size: "250 sqft",
      wifi: true,
      smoke_detector: true,
    },
    agent: {
      image: avatar,
      name: "Michael Brown",
      tel: "4567891230",
      email: "michael.brown@example.com",
    },
    overview:
      "Indulge in luxury with this high-end condo that combines sophisticated design with state-of-the-art amenities. Enjoy panoramic views, spacious living, and a lifestyle of elegance and convenience.",
  },
  {
    id: "r3",
    name: "Luxury Condo 3",
    address: "321 Oak Avenue",
    rating: 4.9,
    price: 300000,
    image: newyrok,
    propertyImages: [newyrok, japan],
    type: "Condo",
    amenities: {
      beds: 4,
      bath: 3,
      size: "300 sqft",
      wifi: true,
      smoke_detector: true,
    },
    agent: {
      image: avatar,
      name: "Sophia Lee",
      tel: "7890123456",
      email: "sophia.lee@example.com",
    },
    overview:
      "A stunning luxury condo offering spacious living areas and premium amenities. With high-end finishes, modern appliances, and breathtaking views, this property sets a new standard for urban elegance.",
  },
  {
    id: "r4",
    name: "Luxury Condo 4",
    address: "321 Oak Avenue",
    rating: 4.9,
    price: 300000,
    image: newyrok,
    propertyImages: [newyrok, japan],
    type: "Condo",
    amenities: {
      beds: 3,
      bath: 2,
      size: "280 sqft",
      wifi: true,
      smoke_detector: true,
    },
    agent: {
      image: avatar,
      name: "David Kim",
      tel: "6543210987",
      email: "david.kim@example.com",
    },
    overview:
      "Step into sophistication with this luxury condo that perfectly blends modern design with functionality. Enjoy expansive views, top-tier amenities, and a location that offers both serenity and accessibility.",
  },
];
