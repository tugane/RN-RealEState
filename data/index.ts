import { Ionicons } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";

type Tag = {
  id: number;
  title: string;
};
export const tags: Tag[] = [
  {
    id: 1,
    title: "Recent",
  },
  {
    id: 2,
    title: "Popular",
  },
  {
    id: 3,
    title: "Bestseller",
  },
  {
    id: 4,
    title: "Exclusive",
  },
  {
    id: 5,
    title: "Villa",
  },
  {
    id: 6,
    title: "Apartment",
  },
];

type Amenity = {
  id: number;
  name: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

export const amenities: Amenity[] = [
  {
    id: 1,
    name: "WiFi",
    icon: "wifi-outline",
  },
  {
    id: 2,
    name: "Swimming Pool",
    icon: "water-outline",
  },
  {
    id: 3,
    name: "Air Conditioning",
    icon: "snow-outline",
  },
  {
    id: 4,
    name: "Parking",
    icon: "car-outline",
  },
  {
    id: 5,
    name: "Gym",
    icon: "barbell-outline",
  },
  {
    id: 6,
    name: "Restaurant",
    icon: "restaurant-outline",
  },
  {
    id: 7,
    name: "Pet Friendly",
    icon: "paw-outline",
  },
  {
    id: 8,
    name: "Spa & Wellness",
    icon: "flower-outline",
  },
  {
    id: 9,
    name: "TV",
    icon: "tv-outline",
  },
  {
    id: 10,
    name: "Kitchen",
    icon: "restaurant-outline",
  },
];

type House = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  price: string;
  location: string;
  description: string;
  amenities: Amenity[];
};

export const homes: House[] = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    image: require("@/assets/images/houses/photo-1600585154340-be6161a56a0c Medium.jpeg"),
    price: "$450k",
    location: "Miami, USA",
    amenities,
    description:
      "A luxurious villa featuring 4 bedrooms, private pool, and stunning modern design.",
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    image: require("@/assets/images/houses/photo-1599846801418-41948504b405.jpeg"),
    price: "$220k",
    location: "Aspen, USA",
    amenities,
    description:
      "A wooden cabin surrounded by pine trees, perfect for a peaceful mountain escape.",
  },
  {
    id: 4,
    title: "Urban Loft Apartment",
    image: require("@/assets/images/houses/lisa-anna-SI3FW0GfOAI-unsplash.jpg"),
    price: "$320k",
    location: "New York, USA",
    amenities,
    description:
      "Stylish loft apartment in the heart of the city with modern amenities.",
  },
  {
    id: 5,
    title: "Mediterranean Villa",
    image: require("@/assets/images/houses/istvan-szitas-nfEb_V98kKY-unsplash.jpg"),
    price: "$680k",
    location: "Santorini, Greece",
    amenities,
    description:
      "Elegant villa with traditional Mediterranean architecture and sea views.",
  },
  {
    id: 6,
    title: "Countryside Cottage",
    image: require("@/assets/images/houses/chris-barker-cetZdcNio4Y-unsplash.jpg"),
    price: "$180k",
    location: "Cotswolds, UK",
    amenities,
    description:
      "Quaint stone cottage surrounded by rolling hills and green landscapes.",
  },
  {
    id: 7,
    title: "Luxury Penthouse",
    image: require("@/assets/images/houses/photo-1600585154340-be6161a56a0c Medium.jpeg"),
    price: "$1.2M",
    location: "Dubai, UAE",
    amenities,
    description:
      "Exclusive penthouse with panoramic skyline views and private rooftop pool.",
  },
  {
    id: 8,
    title: "Scandinavian Lake House",
    image: require("@/assets/images/houses/istvan-szitas-nfEb_V98kKY-unsplash.jpg"),
    price: "$350k",
    location: "Oslo, Norway",
    amenities,
    description:
      "Minimalist lakefront home designed with natural wood and large glass windows.",
  },
  {
    id: 10,
    title: "Tropical Treehouse",
    image: require("@/assets/images/houses/lisa-anna-SI3FW0GfOAI-unsplash.jpg"),
    price: "$150k",
    location: "Costa Rica",
    amenities,
    description:
      "Unique eco-friendly treehouse nestled in the jungle, ideal for adventurers.",
  },
];
