// code your solution here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("run");



function mondayWork(must= "go to the office"){
return `This Monday, I will ${must}.`;
}
mondayWork();
mondayWork('work from home.');

function wrapAdjective(parameter= `*`) {
    const innerFunction= function (string=`special`){
        return `You are ${parameter}${string}${parameter}!`;
    };
    return innerFunction;
}

wrapAdjective("%")("a dedicated programmer");











// it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective('*')
//     let emphatic = result("a hard worker")
//     expect(emphatic).to.equal("You are *a hard worker*!")
//   });

//   it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective("||")
//     let emphatic = result("a dedicated programmer")
//     expect(emphatic).to.equal("You are ||a dedicated programmer||!")
//   });
