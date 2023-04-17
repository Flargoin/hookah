const header = function() {
    const header = document.querySelector('.header'),
          hero = document.querySelector('.hero'),
          heroHeight = hero.style.height;
          

    document.addEventListener('scroll', () => {
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > '700') {
            header.style.backgroundColor = '#fff';
            header.querySelector('.header__container').style.backgroundColor = '#fff';
            header.style.boxShadow = '0px 16px 20px rgba(0, 0, 0, 0.03)';
            document.querySelectorAll('.dropdown__menu').forEach(item => item.style.backgroundColor = '#fff');
        } else {
            header.style.backgroundColor = '';
            header.querySelector('.header__container').style.backgroundColor = '';
            header.style.boxShadow = '';
            document.querySelectorAll('.dropdown__menu').forEach(item => item.style.backgroundColor = '');
        }
    });




}

export default header;