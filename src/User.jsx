export default function User({ user }) {
  console.log(user);
  const { name, email, address, phone } = user;
  const { city, street } = address;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone Number: {phone}</p>
      <p>
        Address- City: {city}, Street: {street}
      </p>
    </div>
  );
}
