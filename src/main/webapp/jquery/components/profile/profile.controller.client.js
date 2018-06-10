(function(){
    jQuery(main);

    var username, password;
    var firstname, lastname;
    var role, dateOfBirth;
    var email, phone;
    var userId;
    var userService = new userServiceClient();

    function main() {
        username = $('#username');
        password= $('#password');
        firstname = $('#firstName');
        lastname = $('#lastName');
        role = $('#role');
        dateOfBirth = $('#dateOfBirth');
        email = $('#email');
        phone = $('#phone');
        var url = new URL(window.location.href);
        userId = url.searchParams.get('userId');
        findUserById(userId);
        $('#update').click(updateUser);
        $('#logout').click(logOut);
    }

    function logOut() {
        window.location = "http://localhost:8080/jquery/components/login/login.template.client.html";
    }

    function findUserById(id) {
        userService.findUserById(id).then(renderUser);
    }

    function renderUser(user) {
       username.val(user.username);
        password.val(user.password);
        firstname.val(user.firstName);
        lastname.val(user.lastName);
        role.val(user.role);
        dateOfBirth.val(user.dateOfBirth);
        email.val(user.email);
        phone.val(user.phone);
    }

    function updateUser(){
        var user = new User();
        user.setId(userId);
        user.setUserName(username.val());
        user.setPassword(password.val());
        user.setFirstName(firstname.val());
        user.setLastName(lastname.val());
        user.setRole(role.val());
        user.setDateOfBirth(dateOfBirth.val());
        user.setEmail(email.val());
        user.setPhone(phone.val());
        userService.updateUser(user).then(success);
    }

    function success(response) {
        console.log(response,"is");
        if(response){
            alert("Update was succesfull");
        }
        else {
            alert("Update was not succesfull");
        }
    }
})();