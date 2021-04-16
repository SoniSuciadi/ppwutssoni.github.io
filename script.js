let nama = document.getElementById("nama");
let email = document.getElementById("email");
let pesanan = document.getElementById("listmenu");
let tbl = document.getElementById("tbl");
let data = [];

const submitData = () => {
  let orders = {
    nama: nama.value,
    email: email.value,
    pesanan: pesanan.value,
  };

  retriveData();

  data.push(orders);

  localStorage.setItem("data", JSON.stringify(data));
  location.reload();
};
const retriveData = () => {
  data = [];
  let getData = localStorage.getItem("data");
  if (getData != null) {
    data = JSON.parse(getData);
  }
};
const showData = () => {
  retriveData();
  data.forEach(setDisplayTable);
};
const setDisplayTable = (item, index) => {
  tbl.innerHTML += `
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.email}</td>
            <td>${item.pesanan}</td>
           `;
};
