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

  getStatus(id);
});

const get = (target) => {
  return document.querySelector(target);
};

function getStatus(id) {
  $.ajax({
    type: "GET",
    url: `api/wash_list/${id}`,
    data: {},
    success: function (response) {
      const rows = response.data;
      let wash_id = rows.wash_id;
      let status = rows.status;
      let extra = rows.extra;
      let image = rows.image;
      let createdAt = rows.createdAt;
      let updatedAt = rows.updatedAt;
      let user_id = rows.user_id;
      let nickname = rows.nickname;
      let address = rows.address;
      let phone_number = rows.phone_number;
      const statusName = ["수거중", "수거완료", "배송중", "배송완료"];

      let wash_data = `
        <img
                src="./static/images/${image}"
                alt="세탁신청 사진"
              />
              <ul class="user_data">
                <li class="shop_user_nickname">${nickname}</li>
                <li class="shop_user_phone_number">${phone_number}</li>
                <li class="shop_user_address">
                ${address}
                </li>
                <li class="shop_user_extra">${extra}</li>
                </ul>
        `;
      $(".wash_data").append(wash_data);

      let status_wrap = "";

      statusName.map((text, index) => {
        console.log({ text });
        status_wrap += `<li class="${
          status === index + 1 ? "selected_status" : ""
        }">${text}</li>`;
      });

      $(".status_wrap").append(status_wrap);
    },
  });
}

function status_update() {
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
  fetch(`http://localhost:4000/shop_wash_status?id=${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

  $.ajax({
    type: "PUT",
    url: `api/wash_list/${id}`,
    data: {},
    success: function (response) {
      const status = response.data.status;
      let statusText = "";
      if (status === 1) {
        statusText = "수거중🏃‍♀️";
      }
      if (status === 2) {
        statusText = "수거완료👕";
      }
      if (status === 3) {
        statusText = "배송중🚛";
      }
      if (status === 4) {
        statusText = "배송완료🎁";
        alert(`🎁 배송이 완료되었습니다. 🎁`);
        return (location.href = "http://localhost:4000/shop_wash_list");
      }
      alert(`진행상황이 ${statusText}로 변경되었습니다.`);
      location.href = "http://localhost:4000/shop_wash_status?id=" + id;
      // const message = response.data.message;
    },
    error: function (error) {
      alert("잘못된 접근입니다.");
      console.log(error);
    },
  });
}
