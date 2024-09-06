const   hourArrow   = document.querySelector('.h'),
        minuteArrow = document.querySelector('.m'),
        secondArrow = document.querySelector('.s'),
        hoursBox    = document.querySelector('.hours'),
        minutesBox  = document.querySelector('.minutes');
        
function watch() {
    
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours   = time.getHours()
        
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
        minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
        
        setTimeout(() => watch(), 1000)
        
}
watch()


// рекурсия - это когда функция запускает саму себя внутри
// setTimeout() - это функция которая запускает что то с указанной задержкой

let i = 0;

function qwerty() {
    if(i < 10) {
        console.log(i);
        i++
        setTimeout(() =>  qwerty(), 1000)
       
    }
}
qwerty()


const links = document.querySelectorAll('.tabsItem') 
const tabs  = document.querySelectorAll('.tabsContentItem') 

console.log(links);

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}




const stopHours = document.querySelector('.stopwatch__hours'),
      stopMinutes = document.querySelector('.stopwatch__minutes'),
      stopSeconds = document.querySelector('.stopwatch__seconds'),
      stopBtn     = document.querySelector('.stopwatch__btn');

// let timer;

// stopBtn.addEventListener('click', () => {
//     if (stopBtn.textContent === 'Start') {
//         stopBtn.textContent = 'Stop';

//         function runTimer() {
//             stopSeconds.textContent++;

//             if (stopSeconds.textContent == 60) {
//                 stopSeconds.textContent = 0;
//                 stopMinutes.textContent++;
//             }

//             if (stopMinutes.textContent == 60) {
//                 stopMinutes.textContent = 0;
//                 stopHours.textContent++;
//             }

//             timer = setTimeout(runTimer, 1000);  // Рекурсивный вызов
//         }

//         runTimer();  // Запуск таймера

//     } else if (stopBtn.textContent === 'Stop') {
//         clearTimeout(timer);  // Остановить таймер
//         stopBtn.textContent = 'Clear';

//     } else {
//         // Сбросить значения
//         stopSeconds.textContent = 0;
//         stopMinutes.textContent = 0;
//         stopHours.textContent = 0;
//         stopBtn.textContent = 'Start';  // Вернуть кнопку к исходному состоянию
//     }
// });


let timer;


stopBtn.addEventListener('click',() => {
    if(stopBtn.textContent === 'Start'){
        stopBtn.textContent = 'Stop'


        function runTimer(){
            stopSeconds.textContent++

            if(stopSeconds.textContent == 60){
                stopSeconds.textContent = 0;
                stopMinutes.textContent++
            }
            if(stopMinutes== 60){
                stopMinutes.textContent = 0
                stopHours.textContent++
            }

            timer = setTimeout(runTimer,1000)
        }
        runTimer()
    }
    else if(stopBtn.textContent === 'Stop'){
        clearTimeout(timer);
        stopBtn.textContent = 'Clear'
    }else{
        stopSeconds.textContent = 0;
        stopMinutes.textContent = 0;
        stopHours.textContent = 0;
        stopBtn.textContent = 'Start'
    }
})






