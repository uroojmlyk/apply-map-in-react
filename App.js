function App() {
  const users = [
    { id: 1, name: "Ali", age: 17 },
    { id: 2, name: "Sara", age: 22 }
  ];

  return (
    <div>
      <h2>User Status</h2>

      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.age >= 18 ? "Adult" : "Minor"}
        </p>
      ))}
    </div>
  );
}

export default App;