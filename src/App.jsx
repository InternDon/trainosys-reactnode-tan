import "./App.css";

const App = () => {
  const products = [
    {
      name: "Katterine",
      price: 48_00,
      image:
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Leonnes",
      price: 35_00,
      image:
        "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "The Dear",
      price: 89_00,
      image:
        "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mini Ducky",
      price: 35_00,
      image:
        "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Two Dog",
      price: 64_00,
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Humming Bird",
      price: 39_00,
      image:
        "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Rio",
      price: 50_00,
      image:
        "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mumble",
      price: 32_00,
      image:
        "https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
      <div className="firstDiv">
        <form>
          <label>
            First name:
            <input type="text" name="fname" />
            <br />
          </label>

          <label>
            Last name:
            <input type="text" name="lname" />
            <br />
          </label>

          <label>
            Email:
            <input type="text" name="email" />
            <br />
          </label>

          <label>
            Password:
            <input type="text" id="passWord" name="passWord" />
            <br />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      
      <br />

      <div className="secondDiv">
        <h1>ANIMALS</h1>
        <div className="products-list">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <h2>{product.name}</h2>
              <p>Price: ${(product.price / 100).toFixed(2)}</p>
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
