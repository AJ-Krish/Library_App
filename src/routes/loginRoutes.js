const express= require('express');
const loginRouter=express.Router();


function loginroutes(nav){
    


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


loginRouter.get('/',function (req,res) {
    res.render("login",
    {
        nav,
        title:'LOGIN'
        
    });
    
});




    return loginRouter;

}
module.exports=loginroutes;
