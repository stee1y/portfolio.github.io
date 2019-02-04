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
            overlayMenu.style.height='auto';
        } else if (widthDevice >=750 && widthDevice <= 1169) {
            menuMainHidden();
            menuShedow.style.boxShadow='0 0 0';
            menuToggle.style.display='block';
            overlayMenu.style.position='absolute';
            overlayMenu.style.height='auto';
            menuToggle.classList.remove('main-nav__toggle-closed');
            overlayMenu.style.height='auto';
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
            overlayMenu.style.height='auto';
            overlayMenu.style.backgroundColor='transparent';
        }
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB3aWR0aERldmljZSA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdmFyIG1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW5hdl9fdG9nZ2xlJylbMF07XHJcbiAgICB2YXIgdXNlckxpc3RIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1saXN0Jyk7XHJcbiAgICB2YXIgc2l0ZUxpc3RIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1saXN0Jyk7XHJcbiAgICB2YXIgbWVudU1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XHJcbiAgICB2YXIgb3ZlcmxheU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXTtcclxuICAgIHZhciBtZW51U2hlZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXYnKVswXTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbWVudU1haW5IaWRkZW4oKSB7XHJcbiAgICAgICAgbWVudU1haW4uc3R5bGUuZmxleERpcmVjdGlvbj0ncm93JztcclxuICAgICAgICB1c2VyTGlzdEhpZGRlbi5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICBzaXRlTGlzdEhpZGRlbi5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbWVudU1haW5WaXNpYmxlKCkge1xyXG4gICAgICAgIHVzZXJMaXN0SGlkZGVuLnN0eWxlLmRpc3BsYXk9J2ZsZXgnO1xyXG4gICAgICAgIHNpdGVMaXN0SGlkZGVuLnN0eWxlLmRpc3BsYXk9J2ZsZXgnO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAod2lkdGhEZXZpY2UgPj0zMjAgJiYgd2lkdGhEZXZpY2UgPD0gMTE2OSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGUuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xyXG4gICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLnBvc2l0aW9uPSdhYnNvbHV0ZSc7XHJcbiAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PSdhdXRvJztcclxuICAgICAgICBtZW51TWFpbkhpZGRlbigpO1xyXG4gICAgfSBlbHNlIGlmICh3aWR0aERldmljZSA+PTExNzApIHtcclxuICAgICAgICBtZW51VG9nZ2xlLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4gICAgICAgIG1lbnVNYWluVmlzaWJsZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2lkdGhEZXZpY2UgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBpZiAod2lkdGhEZXZpY2UgPj0zMjAgJiYgd2lkdGhEZXZpY2UgPD0gNzQ5KSB7XHJcbiAgICAgICAgICAgIG1lbnVNYWluSGlkZGVuKCk7XHJcbiAgICAgICAgICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXZfX3RvZ2dsZS1jbG9zZWQnKTtcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PSdhdXRvJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yPSd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgIG1lbnVTaGVkb3cuc3R5bGUuYm94U2hhZG93PScwIDAgMCc7XHJcbiAgICAgICAgICAgIG1lbnVUb2dnbGUuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5wb3NpdGlvbj0nYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5oZWlnaHQ9J2F1dG8nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGhEZXZpY2UgPj03NTAgJiYgd2lkdGhEZXZpY2UgPD0gMTE2OSkge1xyXG4gICAgICAgICAgICBtZW51TWFpbkhpZGRlbigpO1xyXG4gICAgICAgICAgICBtZW51U2hlZG93LnN0eWxlLmJveFNoYWRvdz0nMCAwIDAnO1xyXG4gICAgICAgICAgICBtZW51VG9nZ2xlLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUucG9zaXRpb249J2Fic29sdXRlJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PSdhdXRvJztcclxuICAgICAgICAgICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdl9fdG9nZ2xlLWNsb3NlZCcpO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5oZWlnaHQ9J2F1dG8nO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J3RyYW5zcGFyZW50JztcclxuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoRGV2aWNlID49MTE3MCkge1xyXG4gICAgICAgICAgICBtZW51TWFpblZpc2libGUoKTtcclxuICAgICAgICAgICAgbWVudVNoZWRvdy5zdHlsZS5ib3hTaGFkb3c9JzAgMCAwJztcclxuICAgICAgICAgICAgbWVudVRvZ2dsZS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuaGVpZ2h0PSdhdXRvJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yPSd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKG1lbnVUb2dnbGUuY2xhc3NOYW1lID09ICdtYWluLW5hdl9fdG9nZ2xlJyApIHtcclxuICAgICAgICAgICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdl9fdG9nZ2xlLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICAgICAgbWVudVNoZWRvdy5zdHlsZS5ib3hTaGFkb3c9JzVweCA1cHggMjBweCAjMDAwJztcclxuXHJcbiAgICAgICAgICAgIG1lbnVNYWluLnN0eWxlLmZsZXhEaXJlY3Rpb249J2NvbHVtbic7XHJcbiAgICAgICAgICAgIHVzZXJMaXN0SGlkZGVuLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztcclxuICAgICAgICAgICAgc2l0ZUxpc3RIaWRkZW4uc3R5bGUuZGlzcGxheT0nYmxvY2snO1xyXG4gICAgICAgICAgICBvdmVybGF5TWVudS5zdHlsZS5oZWlnaHQ9JzEwMHZoJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUucG9zaXRpb249J2ZpeGVkJztcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZ2JhKDU3LDI0LDg4LCAwLjUpJztcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdl9fdG9nZ2xlLWNsb3NlZCcpO1xyXG4gICAgICAgICAgICBtZW51U2hlZG93LnN0eWxlLmJveFNoYWRvdz0nMCAwIDAnO1xyXG4gICAgICAgICAgICBtZW51TWFpbi5zdHlsZS5mbGV4RGlyZWN0aW9uPSdyb3cnO1xyXG4gICAgICAgICAgICB1c2VyTGlzdEhpZGRlbi5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICAgICAgc2l0ZUxpc3RIaWRkZW4uc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcbiAgICAgICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLmhlaWdodD0nYXV0byc7XHJcbiAgICAgICAgICAgIG92ZXJsYXlNZW51LnN0eWxlLmJhY2tncm91bmRDb2xvcj0ndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXX0=
