


const test = async ()=>{
   let response =  await new Promise((resolve, reject) => {
       console.log('Initial');

       resolve("resolved");
   })
       .then((data) => {

           console.log("inside promise",data);
       })
       .catch(() => {
           console.error('Do that');
       })

    return response;
}
const test2 =async ()=> 5;
const temp = test2();
console.log("Finally", temp)
