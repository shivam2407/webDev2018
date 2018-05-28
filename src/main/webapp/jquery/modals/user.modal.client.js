function User(username,password,firstname,lastname,role,phone,email,dateOfBirth) {
    this.username = username;
    this.password = password;
    this.firstName = firstname;
    this.lastName = lastname;
    this.role = role;
    this.phone = phone;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    var self = this;
    function setUserName(username) {
        self.username
    }
    function getUserName() {
        return self.username;
    }
    function setPassword(password) {
        self.password = password;
    }
    function getPassword() {
        return self.password;
    }
    function setFirstName(firstname) {
        self.firstName = firstname;
    }
    function getFirstName() {
        return self.firstname;
    }
    function setLastName(lastname) {
        self.lastName = lastname;
    }
    function getLastName() {
        return self.lastname;
    }
    function setRole(role) {
        self.role = role;
    } 
    function getRole() {
        return self.role;
    }
    function setPhone(phone) {
        self.phone = phone;
    }
    function getPhone() {
        return self.phone;
    }
    function setEmail(email) {
        self.email = email;
    }
    function getEmail() {
        return self.email;
    }
    function setDateOfBirth(dateOfBirth) {
        self.dateOfBirth = dateOfBirth;
    }
    function getDateofBirth() {
        return self.dateOfBirth;
    }


}