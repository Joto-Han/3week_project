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
      const data = response.data;

      const statusName = ["대기중", "수거중", "수거완료", "배송중", "배송완료"];
      for (let i in data) {
        let status = data[i].status;
        let shop_name = data[i].shop_name;
        let shop_id = data[i].shop_id;
        let createdAt = data[i].createdAt.substring(0, 10);
        if (shop_name === undefined) {
          shop_name = "세탁 대기중 입니다.";
        }
        let status_wrap = "";

        statusName.map((text, index) => {
          status_wrap += `<li class="${
            status === index ? "selected_status" : ""
          }">${text}</li>`;
        });

        let temp_html = `
        <div class="my_laundry">
        <input type="hidden" class="shop_id" value="${shop_id}" />
        <p class="shop_name">${shop_name}</p>
        <p class="laundry_date">${createdAt}</p>
        <ul class="status_wrap">
        ${status_wrap}
        </ul>
        <input id ="${status === 4 ? "user_confirm_view" : ""}" 
        type="button"
          class="user_confirm "
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

function user_confirm() {
  const $review_write = get(".review_write");
  // 세탁소에 정산하기

  alert("이용해주셔서 감사합니다!");
  $review_write.style.display = "block";
}

function laundry_add() {
  alert("세탁물을 추가 신청합니다.");
  $.ajax({
    success: function (response) {
      location.href = "http://localhost:4000/laundry_add";
    },
  });
}

// function payment() {
// 세탁 완료하기 누르면 세탁소에 만원 들어가도록
// }

function review_write() {
  const body = document.querySelector("body");
  body.addEventListener("click", function (e) {
    if (e.target.classList[0] != "review_write") return;
    const shop_id = e.target.parentElement.children[0].value;
    location.href = "http://localhost:4000/review_write?shop_id=" + shop_id;
  });
}
