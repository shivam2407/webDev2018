//IIFE
(function () {
    jQuery(main);

    var tbody;
    var template;
    var userService = new userServiceClient();

    function main() {
        tbody = $('#tbody');
        template = $('.userTemplate');
        $('#createUser').click(createUser);
        findAllUsers();
    }

    function findAllUsers() {
        userService.findAllUsers().then(renderUsers);
    }

    function createUser() {
        var username = $('#fetchUsername').val();
        var password = $('#fetchPassword').val();
        var firstname = $('#fetchFirstName').val();
        var lastname = $('#fetchLastName').val();
        var role = $('#fetchRole').val();
        var dob = $('#fetchDOB').val();
        var phone = $('#fetchPhone').val();
        var email = $('#fetchEmail').val();

        var user = new User(username, password, firstname, lastname, role, phone, email, dob);
        userService.createUser(user).then(findAllUsers);

    }

    function deleteUser(event) {
        const deleteId = $(event.currentTarget).parent().parent().attr('id');
        userService.deleteUser(deleteId).then(findAllUsers);
    }

    function findUserById() {

    }

    function selectUser() {

    }

    function updateUser() {

    }

    function renderUser(user) {

    }


    function renderUsers(users) {
        tbody.empty();
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            var clone = template.clone();
            clone.find('.delete').click(deleteUser);
            clone.find('.username').html(user.username);
            clone.find('.password').html(user.password);
            clone.find('.firstname').html(user.firstName);
            clone.find('.lastname').html(user.lastName);
            clone.find('.role').html(user.role);
            clone.find('.dob').html(user.dateOfBirth);
            clone.find('.phone').html(user.phone);
            clone.find('.email').html(user.email);
            tbody.append(clone);
            $(clone).attr('id', user.id);
        }
    }
})();