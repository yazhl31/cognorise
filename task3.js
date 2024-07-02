document.addEventListener('DOMContentLoaded', () => {
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return { total, days, hours, minutes, seconds };
    }

    function initializeClock(endtime) {
        function updateClock() {
            const t = getTimeRemaining(endtime);
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // Set deadline to 15 days from now
    initializeClock(deadline);
});
