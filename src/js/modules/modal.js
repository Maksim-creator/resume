const modal = (triggerSelector,modalSelector) => {
    const modalWindow = document.querySelector(modalSelector),
        trigger = document.querySelectorAll(triggerSelector);

    let scroll = calcScroll()

    modalWindow.classList.add('animated')    

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            document.body.style.backgroundColor = 'rgba(232,235,231, .5)'
            modalWindow.style.display = 'block';
            modalWindow.classList.add('fadeIn');
            modalWindow.classList.remove('fadeOut');
        })
    });

    modalWindow.addEventListener('click', (e) => {
        const target = e.target;
        if(target || target.classList.contains('overlay') || target.tagName === 'BUTTON'){
            document.body.style.marginRight = '0px'
            modalWindow.classList.remove('fadeIn');
            modalWindow.classList.add('fadeOut');
            modalWindow.style.display = 'none';
            document.body.style.overflow = '';
        }
    })

    function calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
}

export default modal