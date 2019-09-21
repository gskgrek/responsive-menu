let App = function(){};

App.prototype = function(){

    let init = () => {

        prepareNav();
        prepareScroll();

    };

    let prepareNav = () => {

        let navbar = document.querySelector('.navbar');
        navbar.querySelector('.navbar__toggler').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            navbar.classList.toggle('open');
        });
        document.body.addEventListener('click', () => {
            navbar.classList.remove('open');
        });
        navbar.querySelectorAll('.navbar__item').forEach( (item) => {
            item.addEventListener('click', (e) => {
                if( e.currentTarget.querySelectorAll('.navbar__submenu').length > 0 ){
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    e.currentTarget.classList.toggle('open');
                }
            });
        });

    };

    let scrollHandler = () => {
        let documentElement = document.documentElement;
        let body = document.body;
        let scrollTop = (window.pageYOffset || documentElement.scrollTop)  - (documentElement.clientTop || 0);
        if( scrollTop > 0 ){
            body.classList.add('scrolled');
        }else{
            body.classList.remove('scrolled');
        }
    };

    let prepareScroll = () => {
        window.addEventListener('scroll', scrollHandler);
        scrollHandler();
    };

    return {
        init: init,
    }

}();

let app = new App();
app.init();
