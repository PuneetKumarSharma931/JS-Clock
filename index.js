
let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let alarmbutton = document.getElementById('setAlarm');
let alarmAudio = new Audio('/alarm.wav');
let alarmValid = false;

setInterval(() => {

    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    date = a.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML = time + "<br>on " + date;

}, 1000);

alarmbutton.addEventListener('click', setAlarm);

function setAlarm() {

    let alarm = document.getElementById('alarm');
    let alarmValue = alarm.value;
    let regex = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}\s[0-9]{2}\:[0-9]{2}\:[0-9]{2}$/;

    if (regex.test(alarmValue)) {

        alarm.classList.remove('is-invalid');
        alarm.classList.add('is-valid');
        alarmValid = true;

        alarm.value = "";

        let alarmTime = new Date(alarmValue);

        let ringTime = new Date();

        let alarmDifference = alarmTime - ringTime;

        if (alarmDifference >= 0) {

            setTimeout(() => {

                ringAlarm();
            }, alarmDifference);
        }
    }
    else {

        alarmValid = false;

        alarm.classList.remove('is-valid');
        alarm.classList.add('is-invalid');
    }
}

function ringAlarm() {

    alarmAudio.play();
}