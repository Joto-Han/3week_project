$(document).ready(function () {
  reviewList();
});

function reviewList() {
  $.ajax({
    type: "GET",
    url: "api/my_review",
    data: {},
    success: function (response) {
      const rows = response.data;
      for (let i in rows) {
        let content = rows[i].content;
        let shop_name = rows[i].shop_name;
        let star_rating = rows[i].star_rating;
        let review_id = rows[i].review_id;
        let createdAt = rows[i].createdAt.substring(0, 10);
        let nickname = rows[i].nickname;
        let temp_html = `
                <div class="review_wrap">
        <ul class="review_data_wrap">
          <li class="review_shop_name">${shop_name}</li>
          <li class="review_user_name">작성자:${nickname}</li>
          <li class="review_date">${createdAt}</li>
          <li class="review_star_rating">
            <span>평점</span>
            <img
              class="ico-star"
              src="../static/images/star_rating_${star_rating}.svg"
              alt=""
            />
          </li>
        </ul>
        <p class="review_content">${content}</p>
        <button class="review_edit" onclick="location.href='/my_review_edit?id=${review_id}'">수정</button>
        <button class="review_delete">삭제</button>
      </div>
       `
        $("#my_review").append(temp_html);
      }
    }
  });
}