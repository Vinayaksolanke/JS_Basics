// Loops are block of code that repeats again and again till certain conditon is true.....
// in js there are main three Loops 

let list = [10,20,30,40]
// For Loop
for(let i=0; i<list.length; i++){
    //console.log(list[i])
}

//While loop ... in this loop the code is execute if ceratin condion in loop is true if the first condition is false then not any code executed.....

let i =0;
while(i< list.length){
    if(list[i] === 30){
        list[i]++
        //console.log(list[i])   
    }
    i++
}
    //console.log(list)

//do .... while 
//in this loop the conditon execute atlist once
i = 0
do{
    console.log(list[i])
    i++
}
while(i<list.length)


// for .. in Loop
//this use to iterate over key of the object
 let person= {
    name: "vinayak",
    age: 24,
    Email: "vina@2001"
}
for(let keys in person){
    console.log(keys +":"+ person[keys])
}


//for...of loops use to iterate over values
let arrys = [1,2,3,4,5,6] 
for (let values in arrys){
    console.log(values)
}