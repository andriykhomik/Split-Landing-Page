const container = document.querySelector('.container');
const splits = document.querySelectorAll('.split');

splits[0].addEventListener('mouseenter', ()=>  container.classList.add ('hover-left'))
splits[0].addEventListener('mouseleave', () => container.classList.remove ('hover-left'))

splits[1].addEventListener('mouseenter', ()=> container.classList.add('hover-right'));
splits[1].addEventListener('mouseleave', ()=> container.classList.remove('hover-right'));



// splits.forEach((split, i) => {                           // for improving
//     split.addEventListener('mousemove', () => {
//         if (split.className.includes('left')){
//             container.classList.remove('hover-right')
//             container.classList.add('hover-left');
//         } else if (split.className.includes('right')){
//             container.classList.remove('hover-left')
//             container.classList.add('hover-right');
//         } else {
//             container.classList.remove('hover-left')
//         }
//     })
//
// })

// split[0].addEventListener('mousemove', ()=>{     // for improving
//
//     if (container.className.includes('right')){
//         container.classList.remove('hover-right');
//     }
//     container.classList.add('hover-left');
// })
//
// split[1].addEventListener('mousemove', ()=>{
//
//     if (container.className.includes('left')){
//         container.classList.remove('hover-left');
//     }
//     container.classList.add('hover-right');
// })



