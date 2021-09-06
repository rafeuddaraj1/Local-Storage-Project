import { profile } from './app.js';
import { local } from './localStorage.js';
export function submit(e) {
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
