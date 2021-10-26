const faker = require('faker');

class CategoriesService{

    constructor(){ // built data base on float memory
        this.categories = [];
        this.generate();
    }

    generate(){
        const limit = 10;
        for ( let index = 0; index < limit; index ++){
          this.categories.push({
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
        return this.categories;
    }

    findone(id){
        return this.categories.find(item => item.id === id);
    }

    update(){

    }

    delete(){

    }

}

module.exports = CategoriesService;