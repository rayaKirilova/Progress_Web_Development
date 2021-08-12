var a = 3;

function foo(a) {
    // тук параметъра а "засенчва" глобалната променлива а ;
    console.log("a in foo(): ", a); // a in foo(): 2
}

foo(2);
console.log("a in global:", a); // a in global: 3