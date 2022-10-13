let clock = function () {
    
    let getClock = function (clock) {
        console.log(clock);
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const secondsString = String(seconds);
        
        clock.innerText = `${hours} : ${minutes} : ${secondsString.padStart(2, '0')}`;
    }

    const clock = document.querySelector('h2#clock');
    
    getClock(clock);

    setInterval(getClock, 1000, clock);
}

clock();