function Seq(start){
    var id = start || 0;
    return function(){
        return id++;
    }
}

var sq1 = Seq(100);
console.log(sq1());
console.log(sq1());
console.log(sq1());
console.log(sq1());


var sq2 = Seq(10);
console.log(sq2());
console.log(sq2());
console.log(sq2());
console.log(sq2());
