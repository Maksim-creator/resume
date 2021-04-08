const toggleBtn = (trigger) => {
    const checkbox = document.querySelector(trigger);
    checkbox.addEventListener('click', (e) => {
        const themeLink = document.querySelector('.theme');
        if(checkbox.checked){
            let arr = themeLink.getAttribute('href').toString().split('/');
            arr[arr.length - 1] = 'night.css';
            arr = arr.join('/')
            themeLink.setAttribute('href', arr);
        } else {
            let arr = themeLink.getAttribute('href').toString().split('/');
            arr[arr.length - 1] = 'day.css';
            arr = arr.join('/')
            themeLink.setAttribute('href', arr);
        }
    })
}

export default toggleBtn;