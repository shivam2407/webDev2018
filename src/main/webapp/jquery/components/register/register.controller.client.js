(function () {
    
    var usernameFld, passwordFld, verifyPassFld;
    var userService = new userServiceClient();
    $(main);

    function main() {
        usernameFld = $('#username');
        passwordFld = $('#password');
        verifyPassFld = $('#verifypassword');
        $('#registerBtn').click(register);

    }

    function register() {
        var username = usernameFld.val();
        var password = passwordFld.val();
        var verifyPass = verifyPassFld.val();
        if(username=="" || password == "" || username == "" ){
            alert("Please Fill all fields");
        }
        if (verifyPass!=password){
            alert("Verify Password and Password should match");
            return ;
        }
        var user = new User();
        user.setUserName(username);
        user.setPassword(password);
        userService.register(user).then(route);
    }

    function route(user) {
        console.log("routhing");
        if(user){
            window.location = 'https://sheltered-lake-69749.herokuapp.com/jquery/components/profile/profile.template.client.html?userId='+user.id;
        }
    }
})();