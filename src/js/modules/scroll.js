const scroll = () => {
    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop >688){
            document.querySelectorAll('[data-time]')[0].classList.add('animated', 'fadeIn')
        }
        if(document.documentElement.scrollTop > 1680){
            document.querySelectorAll('[data-time]')[1].classList.add('animated', 'fadeIn')
        }
    })


}

export default scroll;