const sections = document.querySelectorAll('section');
const btns = document.querySelectorAll('.round');
const btn = document.querySelectorAll('.control');

const allSections = document.querySelector('main');

function pageTransitions(){
    
    ///button click active class
    for(let i = 0; i< btns.length; i++ ){
        btns[i].addEventListener('click', (e) =>{
            removeallActives()
            document.getElementById(e.target.dataset.id).classList.add('active')
            e.target.classList.add('active')
        })
    }
}

function workExperience(){
    const jobs = document.getElementById('jobs')
    const jobThumbs = jobs.querySelectorAll('div')

    console.log(jobThumbs)
    for(let i = 0; i< jobThumbs.length; i++ ){
        jobThumbs[i].addEventListener('click', (e) =>{
            removeallShows()
            document.getElementById(jobThumbs[i].getAttribute("data-id")).classList.add('show')
            jobThumbs[i].classList.add('show')
        })
    }
}

function removeallActives(){
    actives = document.querySelectorAll('.active')
    for(let i=0; i<actives.length;i++){
        actives[i].classList.remove('active')
    }
}

function removeallShows(){
    shows = document.querySelectorAll('.show')
    for(let i=0; i<shows.length;i++){
        shows[i].classList.remove('show')
    }
}

pageTransitions();
workExperience();