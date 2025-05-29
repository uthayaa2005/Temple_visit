export interface Temple {
  id: number;
  name: string;
  location: string;
  deity: string;
  image: string;
  description: string;
  history: string;
  architecture: string;
  timings: string;
  entryFee: string;
  bestTimeToVisit: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  nearbyHotels: Amenity[];
  nearbyFood: Amenity[];
  nearbyAttractions: Amenity[];
}

export interface Amenity {
  id: number;
  name: string;
  type: 'hotel' | 'food' | 'attraction';
  rating: number;
  distance: string;
  description: string;
  image?: string;
}

const templesData: Temple[] = [
  {
    id: 1,
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    deity: "Goddess Meenakshi and Lord Sundareswarar",
    image: "https://images.pexels.com/photos/12464987/pexels-photo-12464987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "The Meenakshi Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu, India. It is dedicated to Goddess Meenakshi, a form of Parvati, and her consort, Lord Sundareswarar, a form of Shiva.",
    history: "The temple was built by Kulasekara Pandyan around the 6th century CE. However, the majority of the present structure was built during the reign of Thirumalai Nayak (1623–55 CE). The temple has been mentioned in Tamil literature for the last couple of millennia, though the present structure was built during the 16th and 17th centuries.",
    architecture: "The temple is renowned for its towering gopurams (gateway towers) covered with thousands of stone figures of deities, mythical animals, and monsters painted in bright colors. The temple complex has 14 gopurams, with the tallest being the southern tower which rises to 170 feet.",
    timings: "6:00 AM to 12:30 PM, 4:00 PM to 10:00 PM",
    entryFee: "Free for general entry. Special darshan tickets available.",
    bestTimeToVisit: "October to March",
    coordinates: {
      lat: 9.9195,
      lng: 78.1193
    },
    nearbyHotels: [
      {
        id: 101,
        name: "Heritage Madurai",
        type: "hotel",
        rating: 4.5,
        distance: "3.2 km",
        description: "Luxury hotel with traditional Tamil Nadu architecture and modern amenities.",
        image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 102,
        name: "The Gateway Hotel Pasumalai",
        type: "hotel",
        rating: 4.3,
        distance: "5.1 km",
        description: "Colonial-style hotel on Pasumalai Hill with panoramic views of Madurai.",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 103,
        name: "Taj Madurai",
        type: "hotel",
        rating: 4.6,
        distance: "4.3 km",
        description: "5-star luxury hotel with outdoor pool and fine dining restaurants.",
        image: "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyFood: [
      {
        id: 201,
        name: "Murugan Idli Shop",
        type: "food",
        rating: 4.7,
        distance: "0.9 km",
        description: "Famous for soft idlis, crispy dosas, and delicious chutneys.",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 202,
        name: "Kumar Mess",
        type: "food",
        rating: 4.5,
        distance: "1.5 km",
        description: "Authentic Madurai-style non-vegetarian dishes, especially Kari Dosa.",
        image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 203,
        name: "Amma Mess",
        type: "food",
        rating: 4.4,
        distance: "2.1 km",
        description: "Popular local eatery serving delicious Chettinad cuisine.",
        image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyAttractions: [
      {
        id: 301,
        name: "Thirumalai Nayakkar Palace",
        type: "attraction",
        rating: 4.3,
        distance: "2.8 km",
        description: "17th-century palace with impressive architecture featuring a blend of Dravidian and Islamic styles.",
        image: "https://images.pexels.com/photos/4916811/pexels-photo-4916811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 302,
        name: "Gandhi Memorial Museum",
        type: "attraction",
        rating: 4.2,
        distance: "3.4 km",
        description: "Museum housed in the historic Tamukkam Palace, displaying artifacts related to India's freedom struggle.",
        image: "https://images.pexels.com/photos/2223366/pexels-photo-2223366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 303,
        name: "Vandiyur Mariamman Teppakulam",
        type: "attraction",
        rating: 4.0,
        distance: "5.7 km",
        description: "Square tank with a mandapam in the center, used for the float festival of Meenakshi Temple.",
        image: "https://images.pexels.com/photos/2474632/pexels-photo-2474632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 2,
    name: "Brihadeeswarar Temple",
    location: "Thanjavur, Tamil Nadu",
    deity: "Lord Shiva",
    image: "https://images.pexels.com/photos/12795882/pexels-photo-12795882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "The Brihadeeswarar Temple, also known as Peruvudaiyar Kovil, is a Hindu temple dedicated to Lord Shiva located in Thanjavur, Tamil Nadu, India. It is one of the largest temples in India and is an outstanding example of Dravidian architecture.",
    history: "The temple was built by Raja Raja Chola I between 1003 and 1010 CE. The temple is part of the UNESCO World Heritage Site known as the 'Great Living Chola Temples', along with the Airavatesvara temple in Darasuram and the Gangaikonda Cholapuram Temple.",
    architecture: "The temple's vimana (tower over the sanctum) is 216 feet high and is among the tallest in South India. The Kumbam (the apex or the bulbous structure on the top) of the temple is carved out of a single stone. The temple complex covers an area of about 25,000 square meters.",
    timings: "6:00 AM to 12:30 PM, 4:00 PM to 8:30 PM",
    entryFee: "Free entry",
    bestTimeToVisit: "November to February",
    coordinates: {
      lat: 10.7828,
      lng: 79.1318
    },
    nearbyHotels: [
      {
        id: 104,
        name: "Svatma",
        type: "hotel",
        rating: 4.7,
        distance: "2.5 km",
        description: "Heritage boutique hotel with traditional Tamil Nadu aesthetics and luxury amenities.",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 105,
        name: "Ideal River View Resort",
        type: "hotel",
        rating: 4.2,
        distance: "5.8 km",
        description: "Riverside resort with cottages and modern facilities.",
        image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyFood: [
      {
        id: 204,
        name: "Sathars",
        type: "food",
        rating: 4.4,
        distance: "1.2 km",
        description: "Restaurant serving authentic Tamil cuisine including Thanjavur special dishes.",
        image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 205,
        name: "Bamboo Restaurant",
        type: "food",
        rating: 4.3,
        distance: "2.8 km",
        description: "Multi-cuisine restaurant popular for its Chettinad specialties.",
        image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyAttractions: [
      {
        id: 304,
        name: "Thanjavur Royal Palace",
        type: "attraction",
        rating: 4.1,
        distance: "1.5 km",
        description: "Former palace of the Nayak and Maratha rulers with a notable art gallery and library.",
        image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 305,
        name: "Saraswathi Mahal Library",
        type: "attraction",
        rating: 4.3,
        distance: "1.6 km",
        description: "One of the oldest libraries in Asia with a rare collection of palm leaf manuscripts.",
        image: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 3,
    name: "Rameshwaram Temple",
    location: "Rameshwaram, Tamil Nadu",
    deity: "Lord Shiva",
    image: "https://images.pexels.com/photos/11664684/pexels-photo-11664684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "The Ramanathaswamy Temple is a Hindu temple dedicated to Lord Shiva located in Rameswaram, Tamil Nadu, India. It is one of the twelve Jyotirlinga temples and is also one of the Char Dham pilgrimage sites.",
    history: "The temple in its current form was built during the 12th century by Pandya Dynasty, with later expansions by Jeyaveera Cinkaiariyan, Chola dynasty and Vijayanagar Empire kings. The temple has the longest corridor among all Hindu temples in India.",
    architecture: "The temple is known for its 1,200 massive granite columns. The third corridor of the temple has 1212 pillars, which is the largest in India. The temple has 22 sacred water bodies called theerthams within its premises.",
    timings: "5:00 AM to 1:00 PM, 3:00 PM to 9:00 PM",
    entryFee: "Free entry",
    bestTimeToVisit: "October to April",
    coordinates: {
      lat: 9.2885,
      lng: 79.3133
    },
    nearbyHotels: [
      {
        id: 106,
        name: "Hyatt Place Rameswaram",
        type: "hotel",
        rating: 4.4,
        distance: "1.2 km",
        description: "Modern hotel with sea views and comfortable amenities.",
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 107,
        name: "Daiwik Hotel",
        type: "hotel",
        rating: 4.3,
        distance: "0.9 km",
        description: "Pilgrim-friendly hotel with traditional hospitality.",
        image: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyFood: [
      {
        id: 206,
        name: "The Rameswaram Cafe",
        type: "food",
        rating: 4.5,
        distance: "0.5 km",
        description: "Vegetarian restaurant serving South Indian delicacies.",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 207,
        name: "Mangala Vilas",
        type: "food",
        rating: 4.2,
        distance: "1.1 km",
        description: "Traditional Tamil cuisine with seafood specialties.",
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyAttractions: [
      {
        id: 306,
        name: "Dhanushkodi Beach",
        type: "attraction",
        rating: 4.6,
        distance: "18 km",
        description: "Ghost town with beautiful beaches where the Bay of Bengal and the Indian Ocean meet.",
        image: "https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 307,
        name: "Pamban Bridge",
        type: "attraction",
        rating: 4.5,
        distance: "10 km",
        description: "India's first sea bridge, connecting Rameswaram island to the mainland.",
        image: "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 4,
    name: "Murugan Temple",
    location: "Palani, Tamil Nadu",
    deity: "Lord Murugan",
    image: "https://images.pexels.com/photos/19125950/pexels-photo-19125950/free-photo-of-hindu-temple-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "The Arulmigu Dhandayuthapani Swamy Temple, commonly known as the Palani Murugan Temple, is a Hindu temple dedicated to Lord Murugan located in Palani, Tamil Nadu, India. It is one of the Six Abodes of Murugan and is considered one of the richest temples in Tamil Nadu.",
    history: "The temple was built during the 9th century by Chera kings. According to Hindu mythology, Lord Murugan, the son of Lord Shiva, stayed at Palani after getting angry with his parents over a fruit (mango) contest with his brother Ganesha.",
    architecture: "The temple is situated on top of a hill known as Palani Hills, about 450 feet above the ground level. The main idol of Lord Murugan is made of an amalgamation of nine minerals known as 'Navapashanam'.",
    timings: "6:00 AM to 1:00 PM, 4:00 PM to 9:00 PM",
    entryFee: "Free entry. Special darshan tickets available.",
    bestTimeToVisit: "November to February, Thai Poosam festival in January/February",
    coordinates: {
      lat: 10.4393,
      lng: 77.5217
    },
    nearbyHotels: [
      {
        id: 108,
        name: "Hotel Prasanna",
        type: "hotel",
        rating: 4.1,
        distance: "1.8 km",
        description: "Comfortable hotel catering to pilgrims with good amenities.",
        image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 109,
        name: "The Residency Towers",
        type: "hotel",
        rating: 4.3,
        distance: "2.2 km",
        description: "Modern hotel with luxury accommodations and dining options.",
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyFood: [
      {
        id: 208,
        name: "Murugan Idli Shop",
        type: "food",
        rating: 4.4,
        distance: "1.5 km",
        description: "Popular South Indian vegetarian restaurant chain.",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 209,
        name: "Palani Mess",
        type: "food",
        rating: 4.2,
        distance: "0.9 km",
        description: "Traditional Tamil food served in banana leaves.",
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyAttractions: [
      {
        id: 308,
        name: "Palani Hills",
        type: "attraction",
        rating: 4.5,
        distance: "On-site",
        description: "Scenic hills offering panoramic views of the surrounding landscape.",
        image: "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 309,
        name: "Kodaikanal",
        type: "attraction",
        rating: 4.7,
        distance: "64 km",
        description: "Popular hill station with lakes, waterfalls, and pleasant climate.",
        image: "https://images.pexels.com/photos/7756189/pexels-photo-7756189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 5,
    name: "Kapaleeshwarar Temple",
    location: "Chennai, Tamil Nadu",
    deity: "Lord Shiva",
    image: "https://images.pexels.com/photos/4916158/pexels-photo-4916158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "The Kapaleeshwarar Temple is a Hindu temple dedicated to Lord Shiva located in Mylapore, Chennai, Tamil Nadu, India. The temple's name is derived from the words 'kapalam' meaning head and 'eeshwarar' meaning lord, referring to Shiva.",
    history: "The original temple was built by the Pallava kings in the 7th century CE. However, it was demolished by the Portuguese in the 16th century, and the current structure was rebuilt by the Vijayanagara kings in the 16th century.",
    architecture: "The temple is built in the Dravidian architectural style. The temple's gopuram (gateway tower) rises to a height of 40 meters and is adorned with intricate carvings of deities and mythological figures.",
    timings: "5:30 AM to 12:00 PM, 4:00 PM to 9:30 PM",
    entryFee: "Free entry",
    bestTimeToVisit: "December to March, during Panguni Peruvizha festival in March/April",
    coordinates: {
      lat: 13.0334,
      lng: 80.2687
    },
    nearbyHotels: [
      {
        id: 110,
        name: "Taj Coromandel",
        type: "hotel",
        rating: 4.6,
        distance: "3.5 km",
        description: "5-star luxury hotel with elegant rooms and fine dining options.",
        image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 111,
        name: "The Park Chennai",
        type: "hotel",
        rating: 4.3,
        distance: "2.8 km",
        description: "Modern hotel with stylish decor and amenities.",
        image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyFood: [
      {
        id: 210,
        name: "Saravana Bhavan",
        type: "food",
        rating: 4.5,
        distance: "1.2 km",
        description: "Popular South Indian vegetarian restaurant chain.",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 211,
        name: "Murugan Idli Shop",
        type: "food",
        rating: 4.4,
        distance: "0.8 km",
        description: "Famous for soft idlis and crispy dosas.",
        image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    nearbyAttractions: [
      {
        id: 310,
        name: "Marina Beach",
        type: "attraction",
        rating: 4.4,
        distance: "4.2 km",
        description: "One of the longest urban beaches in the world with beautiful sunset views.",
        image: "https://images.pexels.com/photos/1249586/pexels-photo-1249586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 311,
        name: "San Thome Basilica",
        type: "attraction",
        rating: 4.5,
        distance: "2.1 km",
        description: "Historic church built over the tomb of St. Thomas the Apostle.",
        image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  }
];

export default templesData;