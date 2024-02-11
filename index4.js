// https://youtu.be/uJOsl4x7pAo?si=5qjjIdMyLX9wRhp8 (video 4)

x = 1;
do
{
    x++;
    console.log(`my x value is ${x}`);
} while (x<5);

console.log("");

const first_func = (parameter) => 
    { 
        console.log(`printing parameter: ${parameter}`);
    }

first_func("Jitendra");  // "Jitendra" is argument


const second_func = (parameter) => { console.log(`printing parameter: ${parameter}`);}

second_func("Jitendra");
