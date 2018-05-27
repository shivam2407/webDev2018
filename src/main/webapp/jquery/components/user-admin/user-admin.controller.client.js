//IIFE
(function () {
    jQuery(main);

    var tbody;
    var template;

    function main() {
        tbody = $('#tbody');
        template = $('.userTemplate');
        $('#createUser').click(createUser);
        var promise = fetch('http://localhost:8080/api/user');
        promise.then(function(response){
            return response.json();
        }).then(renderUser);
    }

    function createUser(){
        var username = $('#fetchUsername').val();
        var password = $('#fetchPassword').val();
        var firstname = $('#fetchFirstName').val();
        var lastname = $('#fetchLastName').val();
        var role = $('#fetchRole').val();
        var dob = $('#fetchDOB').val();
        var phone = $('#fetchPhone').val();
        var email = $('#fetchEmail').val();

        var user = {
            'username': username,
            'password': password,
            'firstname': firstname,
            'lastname': lastname,
            'role': role,
            'email': email,
            'phone': phone,
            'dateOfBirth': dob
        }
        fetch('http://localhost:8080/api/user',{
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function renderUser(users) {
        for(var i= 0; i<users.length;i++) {
            var user = users[i];
            var clone = template.clone();
            clone.find('.username').html(user.username);
            clone.find('.password').html(user.password);
            clone.find('.firstname').html(user.firstName);
            clone.find('.lastname').html(user.lastName);
            clone.find('.role').html(user.role);
            clone.find('.dob').html(user.dateOfBirth);
            clone.find('.phone').html(user.phone);
            clone.find('.email').html(user.email);      
            tbody.append(clone);
            $(clone).attr('id',user.id);            
        }
    }
})();