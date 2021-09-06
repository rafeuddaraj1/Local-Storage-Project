const profile = document.querySelector('.profile-maker');
const form = document.querySelector('form');

document.addEventListener('DOMContentLoaded', domContent); // 55
form.addEventListener('submit', submit); // Line Number 30

// Element

function element(data) {
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

// All Event Function

// Form Submit Event
function submit(e) {
  e.preventDefault();
  const data = {};
  const name = this.name.value;
  const email = this.email.value;
  const phone = this.phone.value;
  const blood = this.blood.value;
  data.name = name;
  data.email = email;
  data.phone = phone;
  data.blood = blood;
  if (name && email && phone && blood) {
    profile.innerHTML += element(data);
    this.name.value = '';
    this.email.value = '';
    this.phone.value = '';
    this.blood.value = '';
    local(data);
  } else {
    alert('Error There Are No entry');
  }
}

// DOMContentLoaded Event

function domContent(e) {
  let arr;
  if (localStorage.getItem('data')) {
    arr = JSON.parse(localStorage.getItem('data'));
  } else {
    arr = [];
  }
  arr.forEach((ar) => {
    profile.innerHTML += element(ar);
  });
}

// Local Storage Function

function local(data) {
  let arr;
  if (localStorage.getItem('data')) {
    arr = JSON.parse(localStorage.getItem('data'));
  } else {
    arr = [];
  }
  arr.push(data);
  localStorage.setItem('data', JSON.stringify(arr));
}
