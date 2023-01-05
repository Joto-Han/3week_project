function addWash() {
  let extra = $("#extra").val();

  let file = document.getElementById("laundryImg").files[0];

  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("extra", extra);

  $.ajax({
    type: "POST",
    url: "/api/wash_add",
    data: formdata,
    cache: false,
    contentType: false,
    processData: false,
    enctype: "multipart/form-data",
    success: function (response) {
      alert("세탁물이 추가되었습니다.");
      window.location.href = "/mypage";
    },
    error: function (error) {
      alert("알 수 없는 이유로 접근할 수 없습니다.");
      console.log("에러이유:", error);
    },
  });
}
