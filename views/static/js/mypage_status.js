$(document).ready(function () {
  function getUrlParams() {
    let params = {};

    window.location.search.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (str, key, value) {
        params[key] = value;
      }
    );
    return params;
  }
  const params = getUrlParams();
  const id = params.id;
  console.log("id ====", id);
  console.log("params ====", params);

  mypage_status(id);
});

const get = (target) => {
  return document.querySelector(target);
};

function mypage_status(id) {
  $.ajax({
    type: "GET",
    url: `/api/my_wash_list/${id}`,
    data: {},
    success: function (response) {
      // console.log(response);
      const data = response.data;
      // console.log(data);
      for (let i in data) {
        let status = data[i].status;
        let shop_name = data[i].shop_name;
        let createdAt = data[i].createdAt.substring(0, 10);
        if (shop_name === undefined) {
          shop_name = "세탁 대기중 입니다.";
        }

        let temp_html = `
        <div class="my_laundry">
        <p class="shop_name">${shop_name}</p>
        <p class="laundry_date">${createdAt}</p>
        <ul class="status_wrap">
        <li class="status_0">대기중</li>
        <li class="status_1">수거중</li>
        <li class="status_2">수거완료</li>
        <li class="status_3">배송중</li>
        <li class="status_4">배송완료</li>
        </ul>
        <input
        type="button"
          class="user_confirm"
          onclick="user_confirm()"
          value="세탁완료하기"
        />
        <input
          type="button"
          class="review_write"
          onclick="review_write()"
          value="리뷰 작성"
          />
          </div>`;
        $("#mypage").append(temp_html);
      }
    },
  });
}

// console.log("✨✨✨ 현재 status ✨✨✨", status);
// const $status0 = get(".status_0");
// const $status1 = get(".status_1");
// const $status2 = get(".status_2");
// const $status3 = get(".status_3");
// const $status4 = get(".status_4");
// const $user_confirm = get(".user_confirm");
// const $review_write = get(".review_write");
// if (status === 0) {
//   $status0.style.color = "#33c1bd";
// } else if (status === 1) {
//   $status1.style.color = "#33c1bd";
// } else if (status === 2) {
//   $status2.style.color = "#33c1bd";
// } else if (status === 3) {
//   $status3.style.color = "#33c1bd";
// } else if (status === 4) {
//   $status4.style.color = "#33c1bd";
//   $user_confirm.style.display = "block";
// }

function user_confirm() {
  // const $user_confirm = get(".user_confirm");
  const $review_write = get(".review_write");
  // 세탁소에 정산하기

  alert("이용해주셔서 감사합니다!");
  // $user_confirm.style.display = "none";
  $review_write.style.display = "block";
}

function review_write() {
  location.href = "http://localhost:4000/review_write";
}

function laundry_add() {
  alert("세탁물을 추가 신청합니다.");
  $.ajax({
    success: function (response) {
      location.href = "http://localhost:4000/laundry_add";
    },
  });
}
