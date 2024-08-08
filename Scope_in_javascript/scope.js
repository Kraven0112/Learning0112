// lexical-scope is known as own scope or block
//scope chain is known as the scope determination of any variable


function get(){
    my()
    function my(){
        console.log(x)
    }
}
// let x = 20 //output 20
// const x = 10 //output 20
var x = 5 //output 20
get()