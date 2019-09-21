let App = function(){};

App.prototype = function(){

    let init = () => {

        prepareNav();

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

    return {
        init: init,
    }

}();

let app = new App();
app.init();
