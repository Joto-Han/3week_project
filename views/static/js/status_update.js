// $(document).ready(function () {
//   function getUrlParams() {
//     let params = {};

//     window.location.search.replace(
//       /[?&]+([^=&]+)=([^&]*)/gi,
//       function (str, key, value) {
//         params[key] = value;
//       }
//     );
//     return params;
//   }
//   const params = getUrlParams();
//   const id = params.id;

//   getStatus(id);
// });

// const get = (target) => {
//   return document.querySelector(target);
// };

// function getStatus(id) {
//   $.ajax({
//     type: "GET",
//     url: `api/wash_list/${id}`,
//     data: {},
//     success: function (response) {
//       const rows = response.data;
//       let wash_id = rows.wash_id;
//       let status = rows.status;
//       let extra = rows.extra;
//       let image = rows.image;
//       let createdAt = rows.createdAt;
//       let updatedAt = rows.updatedAt;
//       let user_id = rows.user_id;
//       let nickname = rows.nickname;
//       let address = rows.address;
//       let phone_number = rows.phone_number;
//       const $status1 = get(".status_1");
//       const $status2 = get(".status_2");
//       const $status3 = get(".status_3");
//       const $status4 = get(".status_4");
//       const $status_update_btn = get(".status_update_btn");
//       const $wash_list_btn = get(".status_update_btn");

//       let wash_data = `
//       <img
//               src="../images/${image}"
//               alt="세탁신청 사진"
//             />
//             <ul class="user_data">
//               <li class="shop_user_nickname">${nickname}</li>
//               <li class="shop_user_phone_number">${phone_number}</li>
//               <li class="shop_user_address">
//               ${address}
//               </li>
//               <li class="shop_user_extra">${extra}</li>
//               </ul>
//       `;
//       $(".wash_data").append(wash_data);

//       // if (status === 1) {
//       //   $status1.style.color = "#33c1bd";
//       // }
//       // if (status === 2) {
//       //   $status2.style.color = "#33c1bd";
//       // }
//       // if (status === 3) {
//       //   $status3.style.color = "#33c1bd";
//       // }
//       // if (status === 4) {
//       //   $status4.style.color = "#33c1bd";
//       // }
//     },
//   });
// }

// function status_update() {
//   function getUrlParams() {
//     let params = {};

//     window.location.search.replace(
//       /[?&]+([^=&]+)=([^&]*)/gi,
//       function (str, key, value) {
//         params[key] = value;
//       }
//     );
//     return params;
//   }
//   const params = getUrlParams();
//   const id = params.id;
//   fetch(`http://localhost:4000/shop_wash_status?id=${id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//   $.ajax({
//     type: "PUT",
//     url: `api/wash_list/${id}`,
//     data: {}, // = > controller(req.body)
//     success: function (response) {
//       const status = response.data.status;
//       let statusText = "";
//       if (status === 1) {
//         statusText = "수거중🏃‍♀️";
//       }
//       if (status === 2) {
//         statusText = "수거완료👕";
//       }
//       if (status === 3) {
//         statusText = "배송중🚛";
//       }
//       if (status === 4) {
//         statusText = "배송완료🎁";
//         alert(`🎁 배송이 완료되었습니다. 🎁`);
//         return (location.href = "http://localhost:4000/shop_wash_list");
//       }
//       alert(`진행상황이 ${statusText}로 변경되었습니다.`);
//       location.href = "http://localhost:4000/shop_wash_status?id=" + id;

//       // < = controller return
//       // const message = response.data.message;
//     },
//     error: function (error) {
//       alert("잘못된 접근입니다.");
//       console.log(error);
//     },
//   });
// }

// // const get = (target) => {
// //   return document.querySelector(target);
// // };
// // const getAll = (target) => {
// //   return document.querySelectorAll(target);
// // };
// // // 임시 변수(db에서 전달받아야 하는 값)
// // let status = 0;
// // let shop_status = 0;

// // // shop_wash_list.ejs 세탁 진행하기
// // function shop_wash_start() {
// //   // mypage.ejs 에서 받아온 값
// //   const $status_0 = get(".status_0");
// //   const $status_1 = get(".status_1");
// //   // $status_1.style.color = "#33c1bd";
// //   // $status_0.style.color = "#616a71";
// //   console.log($status_0); // null 나옴

// //   console.log(status);
// //   console.log(shop_status);
// //   shop_status++;
// //   status++;
// //   console.log(status);
// //   console.log(shop_status);
// //   setTimeout(
// //     () => (location.href = "http://localhost:4000/shop_wash_status"),
// //     3000
// //   );
// // }

// // shop_wash_status.ejs 진행상황 업데이트
// // function status_update() {
// //   $status_1.ajax({
// //     type:"GET",
// //   })
// // if (status === 0 || shop_status === 0) {
// // console.log(status);
// // console.log(shop_status);
// // shop_wash_status.ejs 에서 받아온 값
// // const $status_1 = get(".status_1");
// // const $status_2 = get(".status_2");
// // const $status_3 = get(".status_3");
// // const $status_4 = get(".status_4");

// // if (status == 1) {
// //   $status_2.style.color = "#33c1bd";
// //   $status_1.style.color = "#616a71";
// //   status++;
// // } else if (status == 2) {
// //   $status_3.style.color = "#33c1bd";
// //   $status_2.style.color = "#616a71";
// //   status++;
// // } else if (status == 3) {
// //   $status_4.style.color = "#33c1bd";
// //   $status_3.style.color = "#616a71";
// //   status++;
// // } else if (status === 4) {
// //   shop_status = 0;
// //   console.log(status);
// //   console.log(shop_status);
// //   location.href = "http://localhost:4000/shop_wash_list";
// // }
// // }
