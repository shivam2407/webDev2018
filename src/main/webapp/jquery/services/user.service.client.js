function userServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.deleteUser = deleteUser;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'http://localhost:8080/api';
    var self = this;

    function updateUser(userId, user, callback) {

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