// 1
function age(a,b){
    return a+b;
  }
  function details(name,age){
    console.log(`${name} ${age}`);
  }
  details("Dharani",age(10,15));
// 2
setTimeout(()=>{
    let count=1;
    console.log(count++);
    setTimeout(()=>{
        console.log(count++);
        setTimeout(()=>{
            console.log(count++);
            setTimeout(()=>{
                console.log(count++);
                setTimeout(()=>{
                    console.log(count++);
                    setTimeout(()=>{
                        console.log(count++);
                        setTimeout(()=>{
                            console.log(count++);
                        },7000);
                    },6000);
                },5000);
            },4000);
        },3000);
    },2000);
},1000);
// 3


const newpromise=new Promise((resolve, reject) => {
    let batch="EA18";
    if(batch=="EA18"){
        resolve("welcome to EA18 batch");
    }
    else{
        reject("sorry please try again!");
    }
    
})
newpromise.then((x)=>{
    console.log(x);
}).catch((x)=>{
    console.log(x);
})
// 4
function test(batch){
    const newpromise=new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(batch=="EA18"){
                resolve("welcome to EA18 batch");
            }
            else{
                reject("sorry please try again!");
            }
        },1000);   
    });
    return newpromise;
}

test("EA18").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
// 5
function Foo(p1){ 
    p1();
}

Foo(function cb(){
    console.log("I am callback function");
}); 
// 6
function asyncfun1(cb){
    setTimeout(()=>{
      cb();
    },1000);
  }
  function asyncfun2(cb){
    setTimeout(()=>{
      cb();
    },2000);
  }
  function asyncfun3(cb){
    setTimeout(()=>{
      cb();
    },3000);
  }function asyncfun4(cb){
    setTimeout(()=>{
      cb();
    },4000);
  }
  function asyncfun5(cb){
    setTimeout(()=>{
      cb();
    },5000);
  }
  function asyncfun6(cb){
    setTimeout(()=>{
      cb();
    },6000);
  }
  function asyncfun7(cb){
    setTimeout(()=>{
      cb();
    },7000);
  }
  asyncfun1(function(){
    console.log(1)
    asyncfun2(function(){
      console.log(2)
      asyncfun3(function(){
        console.log(3)
        asyncfun4(function(){
          console.log(4)
          asyncfun5(function(){
            console.log(5)
            asyncfun6(function(){
              console.log(6)
              asyncfun7(function(){
                console.log(7)
              })
            })
          })
        })
      })
    })
  })
//   7
function test(batch){
    const newpromise=new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(batch=="EA18"){
                resolve("welcome to EA18 batch");
            }
            else{
                reject("sorry please try again!");
            }
        },1000);   
    });
    return newpromise;
}

test("EA18").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}); 
// 8
function evenorodd(num){
    const myPromise=new Promise((resolve,reject)=>{
      if(num%2==0){
      resolve("Its an Even number");
    }
      else{
        reject("Its an Odd number");
      }
    })
    return myPromise;
  }
  async function GetDataErr(){
    try{
      let data=await evenorodd(98);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }
  GetDataErr();
//   9
const promise1 = Promise.resolve(3);
        const promise2 = 42;
        const promise3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, 'foo');
        });
        
        Promise.all([promise1, promise2, promise3]).then((values) => {
            console.log(values);
        });