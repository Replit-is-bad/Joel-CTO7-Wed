
// let sum = 0;

function setup() {
//   // write your codes here
new Canvas(800, 400);
background(250)
//   // --- Exercise: Area of Triangle ---
//   // write your codes here

//   // --- Exercise: Sum of first 10 even numbers ---
//   // write your codes here

//   // --- Exercise: Age category classification ---
//   // write your codes here

//   // --- Exercise: Display odd numbers backward using while loop ---
//   // write your codes here

//   // --- Exercise: Array operations (groceries) ---
//   // write your codes here

//   let a = 5;
//   let b = 10;

//   let sum = a + b;
//   console.log(sum);
   
//   let product = a * b;
//   console.log(product);

//   fill(255,0,0);
textSize(16);
//   text("the sum is " + sum , 50,50);

//   text("the product is " + product , 50,100);


//   let base = 10;
//   let height = 40;
//   let area = 0.5 * base *height;

//   text("the area is " + area , 50,200);


  // for (let  i= 20; i>=1; i--) {
  //   console.log(i);
  // }
  // for (let  i= 3; i<47; i=i+3) {
  //   console.log(i);
  // }

  //  for (let  i= 2; i<=20; i=i+2) {
  //   console.log(i);
  //   text(i,20+ i* 20,50);
  //   sum +=i;
  // }
  // console.log(sum);
  // text('sum = ' + sum ,50,100)

// if (age <= 9) {
//   console.log('lower pri');
// } else if (age <= 12){
//   console.log('upper pri');
// } else {
//   console.log('sec');
// }

// let i = 19

// while (i >=0) {
//   console.log(i);
//   text(i,50 + (19 - i)*20,100);
//   i = i-2

// }

// let names = ["Me",'kayla',"Oliver","Ethan"];

// console.log(names[0]);
// names[2]="kv";

// console.log(names[2]);
// names.push('alan');

// console.log(names[4]);

// names.unshift("bruce");
// console.log(names[0]);

// names.splice(2,0,'christ');
// console.log(names[2]);

// names.splice(1,1);
// console.log(names);

// names.splice(namesindextOf("Joel"), 1);
// console.log(names);

// console.log(names.length);

// console.log(names.includes("kayla"));

// for(let item of names ) {
//   console.log(item);
// }
let i = 1;

let gro = ["apple","bread","milk"];

gro.push('orange');
gro.push('butter');

gro.shift();

gro.splice(1,1,"kalay");

console.log(gro);

for(let item of gro ) {
text(item ,i* 50 ,50 );

i = i+2;
}

}