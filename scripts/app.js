const sections = document.querySelectorAll('.section');
const btns = document.querySelectorAll('.controls');
const btn = document.querySelectorAll('.control');

const allSections = document.querySelector('.main-content');

function pageTransitions(){
    
    ///button click active class
    for(let i = 0; i< btns.length; i++ ){
        btns[i].addEventListener('click', (e) =>{
            document.querySelector('.active-btn').classList.remove('active-btn')
            e.target.classList.add('active-btn')
        })
    }

     ///sections
     allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            ///remove selected
            btns.forEach((button) =>{
                button.classList.remove('active')
            })  

            ///hide sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
   

}

pageTransitions();