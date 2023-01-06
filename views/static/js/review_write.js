function register_click() {
  let star_rating = $("#star_rating").val();
  let content = $("#content").val();

  let file = document.getElementById("reviewImg").files[0];

  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("star_rating", star_rating);
  formdata.append("content", content);

  $.ajax({
    type: "POST",
    url: "/api/review_post",
    data: formdata,
    cache: false,
    contentType: false,
    processData: false,
    enctype: "multipart/form-data",
    success: function (response) {
      alert("리뷰 작성 완료");
      window.location.href = "/my_review";
    },
    error: function (error) {
      alert("알 수 없는 이유로 접근할 수 없습니다.");
      console.log("에러이유:", error);
    },
  });
}
