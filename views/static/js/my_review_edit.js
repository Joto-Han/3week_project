let query = window.location.search;
let param = new URLSearchParams(query);
let review_id = param.get('id')

$(document).ready(function () {
  reviewEdit(review_id);
});

function reviewEdit(review_id) {
  $.ajax({
    type: "GET",
    url: `api/my_review_edit/${review_id}`,
    data: {},
    success: function (response) {
      let content = response.data.content;
      // let review_id = response.data.review_id;
      let star_rating = response.data.star_rating;
      let Image = response.data.Image;
      let temp_html = `
        <div class="box_center">
        <div class="add_wrap">
          <form action="">
            <fieldset>
              <div class="form-group">
                <input
                  class="review_photo_add"
                  type="file"
                  name="file"
                  id="reviewImg"
                />
                <label for="">리뷰 사진 업로드하기</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  id="content"
                  name="content"
                  placeholder=${content}
                />
              </div>
            </fieldset>
            <fieldset class="rating">
              <input type="radio" id="star5" name="star_rating" value="10" /><label
                class="full"
                for="star5"
                title="Awesome - 5 stars"
              ></label>
              <input
                type="radio"
                id="star4half"
                name="star_rating"
                value="9"
              /><label
                class="half"
                for="star4half"
                title="Pretty good - 4.5 stars"
              ></label>
              <input type="radio" id="star4" name="star_rating" value="8" /><label
                class="full"
                for="star4"
                title="Pretty good - 4 stars"
              ></label>
              <input
                type="radio"
                id="star3half"
                name="star_rating"
                value="7"
              /><label
                class="half"
                for="star3half"
                title="Meh - 3.5 stars"
              ></label>
              <input type="radio" id="star3" name="star_rating" value="6" /><label
                class="full"
                for="star3"
                title="Meh - 3 stars"
              ></label>
              <input
                type="radio"
                id="star2half"
                name="star_rating"
                value="5"
              /><label
                class="half"
                for="star2half"
                title="Kinda bad - 2.5 stars"
              ></label>
              <input type="radio" id="star2" name="star_rating" value="4" /><label
                class="full"
                for="star2"
                title="Kinda bad - 2 stars"
              ></label>
              <input
                type="radio"
                id="star1half"
                name="star_rating"
                value="3"
              /><label
                class="half"
                for="star1half"
                title="Meh - 1.5 stars"
              ></label>
              <input type="radio" id="star1" name="star_rating" value="2" /><label
                class="full"
                for="star1"
                title="Sucks big time - 1 star"
              ></label>
              <input type="radio" id="starhalf" name="star_rating" value="1" /><label
                class="half"
                for="starhalf"
                title="Sucks big time - 0.5 stars"
              ></label>
            </fieldset>
          </form>
          <button
            class="review_write_btn"
            type="button"
          >
            리뷰 작성하기
          </button>
        </div>
      </div>
        `
      $('#review_main').append(temp_html);
    }
  }
  )
};


// $(".review_write_btn").click(function () {

//   let content = ${content};
//   let star_rating = ${star_rating};

//   const formdata = new FormData();
//   formdata.append();
//   formdata.append();
//   formdata.append();


//   $.ajax({
//     type:"PUT",
//     url: "api/my_review_edit",
//     data: formdata,
//     cache: false,
//     contentType: false,
//     processData: false,
//     enctype: "multipart/form-data",
//     success: function(response) {
//       window.location.href = "http://localhost:4000/my_review";
//     }
//   })
// })



// let star_rating = 0;
// let shop_id = 0;

// $(document).ready(function () {
//   function getUrlParams() {
//     let params = {};

//     window.location.search.replace(
//       /[?&]+([^=&]+)=([^&]*)/gi,
//       function (str, key, value) {
//         params[key] = value;
//       }
//     );
//     return params;
//   }
//   const params = getUrlParams();
//   shop_id = Number(params.shop_id);
// });

// // 별점 가져오기
// $("input[name=star_rating]").click(function () {
//   var click_star_rating = $(this).attr("value");
//   console.log("click_star_rating = ", click_star_rating);
//   star_rating = Number(click_star_rating);
// });

// $(".review_write_btn").click(function () {
//   let content = $("#content").val();
//   console.log("star_rating = ", star_rating);

//   let file = document.getElementById("reviewImg").files[0];

//   const formdata = new FormData();
//   formdata.append("file", file);
//   formdata.append("star_rating", star_rating);
//   formdata.append("content", content);
//   formdata.append("shop_id", shop_id);

//   $.ajax({
//     type: "PUT",
//     url: "/api/my_review_edit",
//     data: formdata,
//     cache: false,
//     contentType: false,
//     processData: false,
//     enctype: "multipart/form-data",
//     success: function (response) {
//       alert("리뷰 작성 완료");
//       window.location.href = "http://localhost:4000/my_review";
//     },
//     error: function (error) {
//       alert("알 수 없는 이유로 접근할 수 없습니다.");
//       console.log("에러이유:", error);
//     },
//   });
// });
