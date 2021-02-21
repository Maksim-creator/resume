const scrolling = () => {
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
                
            requestAnimationFrame(step);

            function step(time){
                if(!start){
                    start = time
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);
                console.log(toBlock, start);
                if(r != widthTop + toBlock){
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash
                }
                
            }
        })
    })
}

export default scrolling;