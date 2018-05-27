function userServiceClient() {
    this.createUser = createUser;
    this.url = 'http://localhost:8080/api/user';
    var self = this;

    function createUser(user) {
        return fetch(self.url ,{
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}