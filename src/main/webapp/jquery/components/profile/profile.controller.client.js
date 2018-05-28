(function(){
    jQuery(main);

    var userService = new userServiceClient();

    function main() {
        findUserById(2);
    }

    function findUserById(id) {
        userService.findUserById(id).then(renderUser);
    }

    function renderUserUser(user) {

    }
})();