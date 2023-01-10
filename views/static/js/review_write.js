let star_rating = 0;
let shop_id = 0;
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
  shop_id = Number(params.shop_id);
});

// 별점 가져오기
$("input[name=star_rating]").click(function () {
  var click_star_rating = $(this).attr("value");
  console.log("click_star_rating = ", click_star_rating);
  star_rating = Number(click_star_rating);
});

$(".review_write_btn").click(function () {
  let content = $("#content").val();
  console.log("star_rating = ", star_rating);

  let file = document.getElementById("reviewImg").files[0];

  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("star_rating", star_rating);
  formdata.append("content", content);
  formdata.append("shop_id", shop_id);

  $.ajax({
    type: "POST",
    url: "/api/review_write",
    data: formdata,
    cache: false,
    contentType: false,
    processData: false,
    enctype: "multipart/form-data",
    success: function (response) {
      alert("리뷰 작성 완료");
      window.location.href = "http://localhost:4000/my_review";
    },
    error: function (error) {
      alert("알 수 없는 이유로 접근할 수 없습니다.");
      console.log("에러이유:", error);
    },
  });
});
