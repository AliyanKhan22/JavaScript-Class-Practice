// var obj = {
//   id: 1,
//   name: "ABC",
//   age: 18,
// };

// obj.age = 20;
// obj.inst = "SMIT";
// console.log(obj);

// obj["age"] = 22;
// obj["inst"] = "SMIT";
// console.log(obj);

// var check = "inst" in obj;
// console.log(check);







// var arr = [];
// var model = {};

// var firstName = document.getElementById("firstName");
// var lastName = document.getElementById("lastName");
// var age = document.getElementById("age");
// var cnic = document.getElementById("cnic");
// var phone = document.getElementById("phone");
// var tableBody = document.getElementById("tableBody");
// var searchInp = document.getElementById("searchInp");
// var searchKey = document.getElementById("searchKey");

// function searchTable() {
//   var searchVal = searchInp.value;
//   var searchEntety = searchKey.value;

//   for (var i = 0; i < arr.length; i++) {
//     var x = arr[i];

//     if (x[searchEntety] == searchVal) {
//       console.log(x);
//     }
//   }
// }
// function renderTable() {
//   tableBody.innerHTML = "";
//   for (var i = 0; i < arr.length; i++) {
//     var x = arr[i];

//     tableBody.innerHTML += `
//     <tr>
//     <td>${x.firstName}</td>
//     <td>${x.lastName}</td>
//     <td>${x.age}</td>
//     <td>${x.cnic}</td>
//     <td>${x.phone}</td>
//     </tr>
//     `;
//   }
// }

// function btnClick() {
//   model.firstName = firstName.value;
//   model.lastName = lastName.value;
//   model.age = age.value;
//   model.cnic = cnic.value;
//   model.phone = phone.value;

//   arr.push({ ...model });

//   firstName.value = "";
//   lastName.value = "";
//   age.value = "";
//   cnic.value = "";
//   phone.value = "";

//   console.log(arr);
//   renderTable();
// }