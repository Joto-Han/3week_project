$(document).ready(function () {
  mypage_status();
});

function mypage_status() {
  $.ajax({
    type: "GET",
    url: "/api/my_wash_list",
    data: {},
    success: function (response) {
      const data = response.data;
      for (let i in data) {
        let status = data[i].status;
        let createdAt = data[i].createdAt;

        console.log(data);
        let temp_html = `
      <div class="my_laundry">
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
          class="user_confirm_test"
          onclick="test()"review_write
          value="테스트버튼"
        />
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
