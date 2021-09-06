export function element(data) {
  return `  <div class='profile-design'>
    <h2>
      <span>Name:</span> ${data.name}
    </h2>
    <h2>
      <span>Email:</span> ${data.email}
    </h2>
    <h2>
      <span>Phone:</span> ${data.phone}
    </h2>
    <h2>
      <span>Blood Group:</span> ${data.blood}
    </h2>
  </div>`;
}
