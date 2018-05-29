(function () {
    var usernameFld, passwordFld;
    var loginBtn;
    var userService = new userServiceClient();
    $(main);

    function main() {
        usernameFld = $('#username');
        passwordFld = $('#password');
        $('#signIn').click(login);

    }

    function login() {
        const username = usernameFld.val();
        const password = passwordFld.val();
        userService.login(username,password).then(route);
    }

    function route(response) {
        if(response.length==1){
            window.location = 'https://sheltered-lake-69749.herokuapp.com/jquery/components/profile/profile.template.client.html?userId='+response[0].id;
        }
        else{
            alert('Incorrect Credentials');
        }
        
    }
})();