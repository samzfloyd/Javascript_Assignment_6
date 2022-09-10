class rectangle{
    constructor(height,length){
        this.height = height;
        this.length = length;
    }

    area(){
        console.log(this.length*this.height,"centimeter square")
    }
}

class square extends rectangle{
    constructor(height,length){
        super(height,length);
    }

}

let obj1 = new square(20,20)
obj1.area()