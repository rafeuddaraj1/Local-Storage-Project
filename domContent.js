export function domContent(e) {
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
