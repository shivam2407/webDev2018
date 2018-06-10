function userServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.deleteUser = deleteUser;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;
    this.url = 'http://localhost:8080/api';
    var self = this;

    function register(user) {
        return fetch(self.url + '/register', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        });
    }

    function login(username, password) {
        return fetch(self.url + '/login', {
            method: 'post',
            body: JSON.stringify({'username': username, 'password': password}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        });
    }

    function updateUser(user, callback) {
        return fetch(self.url + '/user', {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        });
    }

    function findUserById(id, callback) {
        return fetch(self.url + '/user/' + id)
            .then(function (response) {
                return response.json();
            });
    }

    function deleteUser(userId, callback) {
        return fetch(self.url + '/user/' + userId, {
            method: 'delete'
        });
    }

    function findAllUsers(callback) {
        return fetch(self.url + '/user')
            .then(function (response) {
                return response.json();
            });
    }

    function createUser(user, callback) {
        return fetch(self.url + '/user', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}