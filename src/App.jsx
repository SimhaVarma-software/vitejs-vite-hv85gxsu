import Card from "./componnts/Card";

const destinations = [
    {
      id: 1,
      name: "Bali",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description: "Tropical paradise with beautiful beaches and vibrant culture",
      price: "$1,200"
    },
    {
      id: 2,
      name: "Paris",
      location: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description: "City of love, art, and exquisite cuisine",
      price: "$1,500"
    },
    {
      id: 3,
      name: "Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      description: "Stunning sunsets and white-washed architecture",
      price: "$1,800"
    },
    {
      id: 4,
      name: "Tokyo",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      description: "Modern city with rich traditions and amazing food",
      price: "$2,000"
    }
  ];
function App() {
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "#007bff" }}>Top Travel Destinations</h1>

           {
                destinations.map((destination) => (
                    <Card
                        key={destination.id}
                        name={destination.name}
                        location={destination.location}
                        image={destination.image}
                        description={destination.description}
                        price={destination.price}
                    />
                ))
           }
        </div>
    );
}

export default App;