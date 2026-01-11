function App() {
  const products = [
    { id: 1, name: "Mobile", price: 80000 },
    { id: 2, name: "Pen", price: 100 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <p
          key={product.id}
          style={{
            color: product.price > 1000 ? "green" : "red"
          }}
        >
          {product.name} - Rs {product.price}
        </p>
      ))}
    </div>
  );
}

export default App;