function App() {
  const users = [
    { id: 1, name: "Ali", age: 22 },
    { id: 2, name: "Sara", age: 19 }
  ];

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;