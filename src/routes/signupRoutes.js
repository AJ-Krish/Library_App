const express= require('express');
const signupRouter=express.Router();


function signuproutes(nav){
    


// var authors=[
//     {
//         name:'Joseph',
//         genre:'cartoon',
//         work:'tom and jerry'
//     },
//     {
//         name:'jk rowling',
//         genre:'fantasy',
//         work:'Harry potter'
//     }
// ];


signupRouter.get('/',function (req,res) {
    res.render("signup",
    {
        nav,
        title:'SIGNUP'
        
    });
    
});




    return signupRouter;

}
module.exports=signuproutes;
