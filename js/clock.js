
const clcok = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clcok.innerText = (`${hours}:${minutes}:${seconds}`);

}
getClock();
setInterval(getClock, 1000);



/*








const clcok = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
    clcok.innerText = (`${hours}:${minutes}:${seconds}`);

}
getClock();
setInterval(getClock, 1000);


const clcok = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clcok.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

}
getClock();
setInterval(getClock, 1000);


setInterval(sayHello, 5000);

setTimeout(sayHello, 1000);


*/

