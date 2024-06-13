var i = 0;
var txt = 'Hi, I am a web and email developer with 3+ years of experience. able to build professional website designs and develop efficient and intuitive user interfaces for web applications. Able to complete projects efficiently and satisfy customers with attractive, user-friendly websites.';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    ++i;
    setTimeout(typeWriter, speed);
  }
}