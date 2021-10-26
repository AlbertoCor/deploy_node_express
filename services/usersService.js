const faker = require('faker');

class UsersService{

    constructor(){ // built data base on float memory
        this.users = [];
        this.generate();
    }

    generate(){
        const limit = 10;
        for ( let index = 0; index < limit; index ++){
          this.users.push({
            id: faker.datatype.uuid(),
            name: faker.name.userName(),
            address: faker.address.address(),
            avatar: faker.image.imageUrl(),
            phone: faker.phone.phoneNumber(),
          });
        }
    }

    create(){

    }

    find(){
        return this.users;
    }

    findone(id){
        return this.users.find(item => item.id === id);
    }

    update(){

    }

    delete(){

    }

}

module.exports = UsersService;