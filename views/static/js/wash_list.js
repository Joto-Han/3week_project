$(document).ready(function () {
    washList();
})

function washList() {
    $.ajax({
        type: "GET",
        url: "api/wash_list",
        data: {},
        success: function (response) {
            console.log(response);

            const rows = response.data;
            for (let i in rows) {
                let extra = rows[i].extra
                let image = rows[i].image
                let temp_html = `
            <div class="wash_list">
            <img
              src="https://experiencelife.lifetime.life/wp-content/uploads/2022/06/ja22-we-sweat-clothes-smell-worse-than-others.jpg"
              alt=""
            />
            <div class="wash_list_bottom">
              <p class="extra">
                ${extra}
              </p>
              <input
                class="wash_btn"
                type="button"
                name="wash_start"
                value="세탁 진행하기"
              />
            </div>
          </div>
            `
            $('#washListId').append(temp_html);
            };
        }
    });
};