import "./style.css";

function UserCard({ name, age, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

function Day02() {
  return (
    <div className="container">
        <h1>Team Dashboard</h1>
      <UserCard
        name="Muawiya"
        age={20}
        role="Space Specialist"
      />
            <UserCard
        name="Ali"
        age={20}
        role="Software Engineer"
      />
            <UserCard
        name="Maya"
        age={19}
        role="UI/UX Designer"
      />
    </div>
  );
}

export default Day02;