function status_update() {
  let $status_update_btn = document.getElementsByClassName("status_update_btn");
  let $status_1 = document.getElementsByClassName("status_1");
  let $status_2 = document.getElementsByClassName("status_2");
  let $status_3 = document.getElementsByClassName("status_3");
  let $status_4 = document.getElementsByClassName("status_4");
  // 임시 변수
  var status = 1;
  if (status === 4) {
    // shop_status = 0 으로 변경
    // wash_list 페이지로 이동
  }

  $status_update_btn.click(function status_check() {
    if (status == 1) {
      $status_2.style.color = "var(--point-color)";
      //   $(".status_box").animate({ height: 200 });
      //   box = 1;
    }
    // else {
    //   $(".status_box").hide();
    //   $(".status_box").animate({ height: 0 });
    //   box = 0;
    // }
  });
}
