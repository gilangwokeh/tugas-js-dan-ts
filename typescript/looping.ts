const looping = () => {
  let i = ``;
for(let i = 0;i < 5;i++){
  console.log(`*`.repeat(i));
  }
console.log(`----------------------------------`)
for(let i = 0;i < 5;i++){
  console.log(`*`.repeat(5-i));
  }
}

looping()