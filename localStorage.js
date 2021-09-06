export function local(data) {
  // let arr;//
  // if (localStorage.getItem('data')) {
  //   arr = JSON.parse(localStorage.getItem('data'));
  // } else {
  //   arr = [];
  // }
  // arr.push(data);
  // localStorage.setItem('data', JSON.stringify(arr));

  let arr;
  if (localStorage.getItem('data')) {
    arr = JSON.parse(localStorage.getItem('data'));
  } else {
    arr = [];
  }
  arr.push(data);
  localStorage.setItem('data', JSON.stringify(arr));
}
