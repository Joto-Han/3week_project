function edit_user() {
  const nickname = $("#nickname").val();
  const password = $("#password").val();
  const password2 = $("#password2").val();
  const address = $("#address").val();
  const phone_number = $("#phone_number").val();

  if (password !== password2) {
    alert("비밀번호 값이 일치하지 않습니다.");
  } else {
    $.ajax({
      type: "put",
      url: "/api/edit",
      data: {
        nickname,
        password,
        address,
        phone_number,
      },
      success: function (response) {
        alert(`회원정보 수정이 완료되었습니다.`);
        location.href = "http://localhost:4000/mypage";
      },
      error: function (error) {
        alert("알 수 없는 이유로 수정이 완료되지 않았습니다.");
      },
    });
  }
}
