// $(document).ready(function () {
//   washList();
// });

// function washList() {
//   $.ajax({
//     type: "GET",
//     url: "api/wash_list",
//     data: {},
//     success: function (response) {
//       const rows = response.data;
//       for (let i in rows) {
//         let extra = rows[i].extra;
//         let image = rows[i].image;
//         let wash_id = rows[i].wash_id;
//         // let status = rows[i].status;
//         // status = 1;
//         let temp_html = `
//         <div class="wash_list">
//         <img
//         src="../images/${image}"
//         alt=""
//         />
//         <div class="wash_list_bottom">
//             <input type="hidden" class="wash_id" value="${wash_id}" />
//             <p class="extra">
//             ${extra}
//             </p>
//               <input
//               class="wash_btn"
//               type="button"
//               name="wash_start"
//               value="세탁 진행하기"
//               />
//             </div>
//             </div>
//             `;
//         $("#washListId").append(temp_html);
//       }
//     },
//   });
// }

// const body = document.querySelector("body");
// body.addEventListener("click", function (e) {
//   if (e.target.classList[0] != "wash_btn") return;
//   const wash_id = e.target.parentElement.children[0].value;
//   const status = 0;

//   $.ajax({
//     type: "PUT",
//     url: "/api/wash_list",
//     data: { wash_id, status },
//     success: function (response) {
//       alert("세탁물 선택이 완료되었습니다!");
//       location.href =
//         "http://localhost:4000/shop_wash_status?id=" + response.wash_id;
//       // const message = response.data.message;
//     },
//     error: function (error) {
//       alert("잘못된 접근입니다.");
//     },
//   });
// });
