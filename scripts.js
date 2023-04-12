
setInterval(() => {

    let currentdate = new Date();
    let hour = currentdate.getHours();
    let min = currentdate.getMinutes();
    let second = currentdate.getSeconds();
    hrotation = hour*30 + min*(0.5) + second*(0.5)/60;
    mrotation = 6*min + (0.1)*second;
    srotation = 6*second;

    hourlid = document.getElementById('myhour');
    minlid = document.getElementById('mymin');
    seclid = document.getElementById('mysec');

    hourlid.style.transform = `rotate(${hrotation}deg)`;
    minlid.style.transform = `rotate(${mrotation}deg)`;
    seclid.style.transform = `rotate(${srotation}deg)`;

}, 1000);