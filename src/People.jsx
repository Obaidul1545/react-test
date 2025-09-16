const People = ({ user }) => {
  console.log(user);
  const { name, email, company, phone, photo, address } = user;
  return (
    <>
      <div className="shadow-2xl rounded-2xl p-8">
        <div>
          <img src={photo} alt="" className="mb-5" />
          <h4>Name: {name}</h4>
          <h4>Email: {email}</h4>
          <h4>Company: {company}</h4>
          <h4>Phone: {phone}</h4>
          <h4>Address: {address}</h4>
        </div>
      </div>
    </>
  );
};
export default People;
