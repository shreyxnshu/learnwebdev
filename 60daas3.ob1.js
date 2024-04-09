let rectangle ={
    length : 5,
    breadth : 4,
    area: function(){
        a = this.length*this.breadth
        return a
    },
    perimeter : function(){
        p = 2 * (this.length + this.breadth)
        return p
    }
}
console.log(rectangle["area"]())