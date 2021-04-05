const time = 3000; //ms
let activate = true;

// Numbers counter
const outNum = (num, elem) => {
   const l = document.querySelector('#' + elem);
   let n = 0;
   const t = Math.round(time / num)
   const interval = setInterval(() => {
      n = n + 1;
      if (n == num) {
         clearInterval(interval);
      }
      l.innerHTML = n;
      
   }, t);
}

// Intersection Observer API
const options = {}

const observer = new IntersectionObserver(function(entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting == true && activate == true) {
         //Start counters
         outNum(12 , 'num-1');
         outNum(120 , 'num-2');
         outNum(23 , 'num-3');
         outNum(99 , 'num-4');
         activate = false;
         return activate;
      }
   });
}, options);

// Target for observer
const target = document.querySelector('#numbers-viewport');
observer.observe(target);