alert("مرحبا بك في موقعي انا العنود وسوف احسب درجاتك"); 
let grade= prompt("ادخل درجتك");  
console.log(grade); 

if(grade>90 ){
    console.log("لقد حصلت على امتياز ز✌️😍"); 
} 
else if(grade>80 && grade<=89){
    console.log("لقد حصلت على جيد جداً😻");
} 
else if(grade>70 && grade<=79){
    console.log("لقد حصلت على جيد 😊");
} 
else if(grade>60 && grade<=69) {
    console.log("لقد حصلت على مقبوا 😕");
}
else if(grade>50 && grade<=59){
    console.log("لقد حصلت على ضعيف 😐");
}  

else if(grade<50){
    console.log("لقد حصلت على راسب 😥"); 
} 
// java script is not java