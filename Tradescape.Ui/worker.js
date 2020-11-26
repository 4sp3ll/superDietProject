let faker = require('faker');

let generateWorkers = () => {
    let workers = [];

    for (let id = 0; id < 30; id++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        let zipCode = faker.address.zipCode();

        workers.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "zipCode": zipCode
        });
    }

    return { "workers": workers }
}

module.exports = generateWorkers