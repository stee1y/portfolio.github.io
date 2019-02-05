document.addEventListener('DOMContentLoaded', function () {

    var widthDevice = window.innerWidth;
    var menuToggle = document.getElementsByClassName('main-nav__toggle')[0];
    var userListHidden = document.getElementById('user-list');
    var siteListHidden = document.getElementById('site-list');
    var menuMain = document.getElementById('container');
    var overlayMenu = document.getElementsByClassName('header')[0];
    var menuShedow = document.getElementsByClassName('main-nav')[0];


    function menuMainHidden() {
        menuMain.style.flexDirection='row';
        userListHidden.style.display='none';
        siteListHidden.style.display='none';
    };

    function menuMainVisible() {
        userListHidden.style.display='flex';
        siteListHidden.style.display='flex';
    };

    if (widthDevice >=320 && widthDevice <= 1169) {
        menuToggle.style.display='block';
        overlayMenu.style.position='absolute';
        overlayMenu.style.height='auto';
        menuMainHidden();
    } else if (widthDevice >=1170) {
        menuToggle.style.display='none';
        menuMainVisible();
    };

    window.onresize = function () {
        widthDevice = window.innerWidth;
        if (widthDevice >=320 && widthDevice <= 749) {
            menuMainHidden();
            menuToggle.classList.remove('main-nav__toggle-closed');
            overlayMenu.style.height='auto';
            overlayMenu.style.backgroundColor='transparent';
            menuShedow.style.boxShadow='0 0 0';
            menuToggle.style.display='block';
            overlayMenu.style.position='absolute';
        } else if (widthDevice >=750 && widthDevice <= 1169) {
            menuMainHidden();
            menuShedow.style.boxShadow='0 0 0';
            menuToggle.style.display='block';
            overlayMenu.style.position='absolute';
            overlayMenu.style.height='auto';
            menuToggle.classList.remove('main-nav__toggle-closed');
            overlayMenu.style.backgroundColor='transparent';
        } else if (widthDevice >=1170) {
            menuMainVisible();
            menuShedow.style.boxShadow='0 0 0';
            menuToggle.style.display='none';
            overlayMenu.style.height='auto';
            overlayMenu.style.backgroundColor='transparent';
        };
    };

    menuToggle.addEventListener('click', function () {

        if (menuToggle.className == 'main-nav__toggle' ) {
            menuToggle.classList.add('main-nav__toggle-closed');
            menuShedow.style.boxShadow='5px 5px 20px #000';
            menuMain.style.flexDirection='column';
            userListHidden.style.display='block';
            siteListHidden.style.display='block';
            overlayMenu.style.height='100vh';
            overlayMenu.style.position='fixed';
            overlayMenu.style.backgroundColor='rgba(57,24,88, 0.5)';

        } else {
            menuToggle.classList.remove('main-nav__toggle-closed');
            menuShedow.style.boxShadow='0 0 0';
            menuMain.style.flexDirection='row';
            userListHidden.style.display='none';
            siteListHidden.style.display='none';
            overlayMenu.style.position='absolute';
            overlayMenu.style.height='auto';
            overlayMenu.style.backgroundColor='transparent';
        }
    });


    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            var w = window.pageYOffset,  // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)

                                                            // Скрытие меню после нажатия

                    if (menuToggle.className != 'main-nav__toggle' ) {
                        menuToggle.classList.remove('main-nav__toggle-closed');
                        menuShedow.style.boxShadow='0 0 0';
                        menuMain.style.flexDirection='row';
                        userListHidden.style.display='none';
                        siteListHidden.style.display='none';
                        overlayMenu.style.position='absolute';
                        overlayMenu.style.height='auto';
                        overlayMenu.style.backgroundColor='transparent';
                    } else {
                        return
                    }


                } else {
                    location.hash = hash  // URL с хэшем
                }
            }
        }, false);
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB3aWR0aERldmljZSA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdmFyIG1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW5hdl9fdG9nZ2xlJylbMF07XHJcbiAgICB2YXIgdXNlckxpc3RIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1saXN0Jyk7XHJcbiAgICB2YXIgc2l0ZUxpc3RIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1saXN0Jyk7XHJcbiAgICB2YXIgbWVudU1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XHJcbiAgICB2YXIgb3ZlcmxheU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXTtcclxuICAgIHZhciBtZW51U2hlZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXYnKVswXTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbWVudU1haW5IaWRkZW4oKSB7XHJcbiAgICAgICAgbWVudU1haW4uc3R5bGUuZmxleERpcmVjdGlvbj0ncm93JztcclxuICAgICAgICB1c2VyTGlzdEhpZGRlbi5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICBzaXRlTGlzdEhpZGRlbi5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbWVudU1haW5WaXNpYmxlKCkge1xyXG4gICAgICAgIHVzZXJMaXN0SGlkZGVuLnN0eWxlLmRpc3BsYXk9J2ZsZXgnO1xyXG4gICAgICAgIHNpdGVMaXN0SGlkZGVuLnN0eWxlLmRpc3BsYXk9J2ZsZXgnO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAod2lkdGhEZXZpY2UgPj0zMjAgJiYgd2lkdGhEZXZpY2UgPD0gMTE2OSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGUuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xyXG4gICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLnBvc2l0aW9uPSdhYnNvbHV0ZSc7XHJcbiAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PSdhdXRvJztcclxuICAgICAgICBtZW51TWFpbkhpZGRlbigpO1xyXG4gICAgfSBlbHNlIGlmICh3aWR0aERldmljZSA+PTExNzApIHtcclxuICAgICAgICBtZW51VG9nZ2xlLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4gICAgICAgIG1lbnVNYWluVmlzaWJsZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2lkdGhEZXZpY2UgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBpZiAod2lkdGhEZXZpY2UgPj0zMjAgJiYgd2lkdGhEZXZpY2UgPD0gNzQ5KSB7XHJcbiAgICAgICAgICAgIG1lbnVNYWluSGlkZGVuKCk7XHJcbiAgICAgICAgICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXZfX3RvZ2dsZS1jbG9zZWQnKTtcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PSdhdXRvJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yPSd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgIG1lbnVTaGVkb3cuc3R5bGUuYm94U2hhZG93PScwIDAgMCc7XHJcbiAgICAgICAgICAgIG1lbnVUb2dnbGUuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5wb3NpdGlvbj0nYWJzb2x1dGUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGhEZXZpY2UgPj03NTAgJiYgd2lkdGhEZXZpY2UgPD0gMTE2OSkge1xyXG4gICAgICAgICAgICBtZW51TWFpbkhpZGRlbigpO1xyXG4gICAgICAgICAgICBtZW51U2hlZG93LnN0eWxlLmJveFNoYWRvdz0nMCAwIDAnO1xyXG4gICAgICAgICAgICBtZW51VG9nZ2xlLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUucG9zaXRpb249J2Fic29sdXRlJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PSdhdXRvJztcclxuICAgICAgICAgICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdl9fdG9nZ2xlLWNsb3NlZCcpO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J3RyYW5zcGFyZW50JztcclxuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoRGV2aWNlID49MTE3MCkge1xyXG4gICAgICAgICAgICBtZW51TWFpblZpc2libGUoKTtcclxuICAgICAgICAgICAgbWVudVNoZWRvdy5zdHlsZS5ib3hTaGFkb3c9JzAgMCAwJztcclxuICAgICAgICAgICAgbWVudVRvZ2dsZS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PSdhdXRvJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yPSd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKG1lbnVUb2dnbGUuY2xhc3NOYW1lID09ICdtYWluLW5hdl9fdG9nZ2xlJyApIHtcclxuICAgICAgICAgICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdl9fdG9nZ2xlLWNsb3NlZCcpO1xyXG4gICAgICAgICAgICBtZW51U2hlZG93LnN0eWxlLmJveFNoYWRvdz0nNXB4IDVweCAyMHB4ICMwMDAnO1xyXG4gICAgICAgICAgICBtZW51TWFpbi5zdHlsZS5mbGV4RGlyZWN0aW9uPSdjb2x1bW4nO1xyXG4gICAgICAgICAgICB1c2VyTGlzdEhpZGRlbi5zdHlsZS5kaXNwbGF5PSdibG9jayc7XHJcbiAgICAgICAgICAgIHNpdGVMaXN0SGlkZGVuLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PScxMDB2aCc7XHJcbiAgICAgICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLnBvc2l0aW9uPSdmaXhlZCc7XHJcbiAgICAgICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLmJhY2tncm91bmRDb2xvcj0ncmdiYSg1NywyNCw4OCwgMC41KSc7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXZfX3RvZ2dsZS1jbG9zZWQnKTtcclxuICAgICAgICAgICAgbWVudVNoZWRvdy5zdHlsZS5ib3hTaGFkb3c9JzAgMCAwJztcclxuICAgICAgICAgICAgbWVudU1haW4uc3R5bGUuZmxleERpcmVjdGlvbj0ncm93JztcclxuICAgICAgICAgICAgdXNlckxpc3RIaWRkZW4uc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcbiAgICAgICAgICAgIHNpdGVMaXN0SGlkZGVuLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5wb3NpdGlvbj0nYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5oZWlnaHQ9J2F1dG8nO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J3RyYW5zcGFyZW50JztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIGxpbmtOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaHJlZl49XCIjXCJdJyksIC8v0LLRi9Cx0LjRgNCw0LXQvCDQstGB0LUg0YHRgdGL0LvQutC4INC6INGP0LrQvtGA0Y4g0L3QsCDRgdGC0YDQsNC90LjRhtC1XHJcbiAgICAgICAgViA9IDE7ICAvLyDRgdC60L7RgNC+0YHRgtGMLCDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0LTRgNC+0LHQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRh9C10YDQtdC3INGC0L7Rh9C60YMgKNGH0LXQvCDQvNC10L3RjNGI0LUg0LfQvdCw0YfQtdC90LjQtSAtINGC0LXQvCDQsdC+0LvRjNGI0LUg0YHQutC+0YDQvtGB0YLRjClcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua05hdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxpbmtOYXZbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7IC8v0L/QviDQutC70LjQutGDINC90LAg0YHRgdGL0LvQutGDXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy/QvtGC0LzQtdC90Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1XHJcbiAgICAgICAgICAgIHZhciB3ID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAgLy8g0L/RgNC+0LjQt9Cy0L7QtNC40Lwg0L/RgNC+0LrRgNGD0YLQutCwINC/0YDQvtC60YDRg9GC0LrQsFxyXG4gICAgICAgICAgICAgICAgaGFzaCA9IHRoaXMuaHJlZi5yZXBsYWNlKC9bXiNdKiguKikvLCAnJDEnKTsgIC8vINC6IGlkINGN0LvQtdC80LXQvdGC0LAsINC6INC60L7RgtC+0YDQvtC80YMg0L3Rg9C20L3QviDQv9C10YDQtdC50YLQuFxyXG4gICAgICAgICAgICB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYXNoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsICAvLyDQvtGC0YHRgtGD0L8g0L7RgiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwINC00L4gaWRcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApOyAgLy8g0L/QvtC00YDQvtCx0L3QtdC1INC/0YDQviDRhNGD0L3QutGG0LjRjiDQsNC90LjQvNCw0YbQuNC4IFtkZXZlbG9wZXIubW96aWxsYS5vcmddXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXAodGltZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aW1lIC0gc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgciA9ICh0IDwgMCA/IE1hdGgubWF4KHcgLSBwcm9ncmVzcy9WLCB3ICsgdCkgOiBNYXRoLm1pbih3ICsgcHJvZ3Jlc3MvViwgdyArIHQpKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLHIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgIT0gdyArIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCh0LrRgNGL0YLQuNC1INC80LXQvdGOINC/0L7RgdC70LUg0L3QsNC20LDRgtC40Y9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnVUb2dnbGUuY2xhc3NOYW1lICE9ICdtYWluLW5hdl9fdG9nZ2xlJyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdl9fdG9nZ2xlLWNsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U2hlZG93LnN0eWxlLmJveFNoYWRvdz0nMCAwIDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51TWFpbi5zdHlsZS5mbGV4RGlyZWN0aW9uPSdyb3cnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdEhpZGRlbi5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZUxpc3RIaWRkZW4uc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLnBvc2l0aW9uPSdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLmhlaWdodD0nYXV0byc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLmJhY2tncm91bmRDb2xvcj0ndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaCAgLy8gVVJMINGBINGF0Y3RiNC10LxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxufSk7Il19
