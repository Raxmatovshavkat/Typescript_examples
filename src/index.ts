//1-misol

// const swap=<T>(a:T,b:T):[T,T]=>{
//     return [b,a]
// }

// console.log(swap(1,2));

/////////////////////////////////////////////////////////////////////////////////

//2-misol

// const assertString = (str: any): void => {
//     try {
//         if (typeof str === "string") {
//             console.log('Input is string');

//         }
//         else{
//             console.log('Input is not string');
            
//         }

//     } catch (error) {
//         if (error instanceof Error) {
//             console.log(error.message);
//         } else {
//             console.log('Unknown error');
//         }
//     }
// }

// assertString('hello')
// assertString(12)

///////////////////////////////////////////////////////////////////////////

//3-misol


// const array=Array.from ({length:100},()=>Math.floor(Math.random()*1000))

// const quicksortStart = performance.now();
// const quicSort=(arr:number[]):number[]=>{
//     if (arr.length<=1){
//         return arr
//     }

//     const orta=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for (let i:number=0;i<arr.length-1;i++){
//         if(arr[i]<orta){
//             leftArr.push(arr[i])
//         }
//         else{
//             rightArr.push(arr[i]);
//         }
//     }
    
//     return [...quicSort(leftArr),orta,...quicSort(rightArr)]
// }
// const quicksortEnd = performance.now();

// console.log(quicSort(array));
// console.log(`Quicksort ishlash vaqti: ${quicksortEnd - quicksortStart} ms`);

// const mergesortStart = performance.now();
// const mergeSort=(array:number[]):number[]=>{
//     if (array.length <= 1) {
//         return array
//     }

//     const middle=Math.floor(array.length/2);
//     const left=array.slice(0,middle);
//     const right=array.slice(middle);
//     return merge(mergeSort(left),mergeSort(right));
// }

// const merge=(left:number[],right:number[]):number[]=>{
//     let result:number[]=[]
//     let leftIndex=0;
//     let rightIndex=0;


//     while (leftIndex<left.length && rightIndex<right.length){
//         if (left[leftIndex]<right[rightIndex]){
//             result.push(left[leftIndex])
//             leftIndex++;
//         }
//         else{
//             result.push(right[rightIndex]);
//             rightIndex++
//         }
//     }
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
// const mergesortEnd = performance.now();

// console.log(mergeSort(array));
// console.log(`Mergesort ishlash vaqti: ${mergesortEnd - mergesortStart} ms`);



///////////////////////////////////////////////////////////////////////////////////

//Amaliyot uchun misollar 
//1-misol

// interface Profile<T>{
//     name:string;
//     data:T;
// }

// const createProfile=<T>(name:string,data:T):Profile<T>=>{
//     return {
//         name:name,
//         data:data
//     }
// }

// interface Preferences {
//     theme:string,
//     notifications:boolean
// }

// const userProfile = createProfile<Preferences>("Alice", { theme: "dark", notifications: true });

// console.log(userProfile);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2-misol

enum OrderStatus {
    Pending="Pending",
    Shipped="Shipped",
    Delivered="Delivered",
    Cancelled="Cancelled"
}

interface Order {
    id:number,
    product:string,
    status:OrderStatus
}


const updateOrderStatus=(order:Order,status:OrderStatus)=>{
    order.status=status
}

const order: Order = { id: 1, product: "Laptop", status: OrderStatus.Pending };

updateOrderStatus(order, OrderStatus.Shipped);
console.log(order.status); // Shipped

updateOrderStatus(order, OrderStatus.Delivered);
console.log(order.status); // Delivered