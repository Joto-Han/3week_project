let token;

function login_user() {
    const nickname = $('#nickname').val();
    const password = $('#password').val();
    alert("됬니?")
    console.log("닉넴",nickname);
    console.log("비번",password);
    console.log(typeof(nickname));

    $.ajax({
        type: 'POST',
        url: '/api/auth',
        data: {
          nickname, password
        },
        success: function (response) {
            alert("로그인 성공!")
            // token = response.token;
            // setlogin();
        }, error: function (error) {
            alert("로그인 실패..............ㄴ")
                },
            })
        }
function setlogin() {
    if(token) {
        console.log(token);
        $.ajax({
            type: 'get',
            url: 'api/test',
            data: {},
            success: function (response) {
                location.href = '/api/wash_list'
            }
        })

    }
}

//           if (response['msg'] == '로그인 성공') {
//             window.location.href = '/';
//           } else {
//             alert(response['msg']);
//           }
//         },
//       });
 
// }

function register(){
    alert("하이루!")
}