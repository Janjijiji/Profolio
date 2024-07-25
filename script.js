let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelector('section');
let navLinks = document.querySelector('header nava');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

function radial_animate() {
    $('svg.radial-progress').each(function (index, value) {
        $(this).find('circle.bar--animated').removeAttr('style');
        // Get element in Viewport
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            var percent = $(value).data('countervalue');
            var radius = $(this).find('circle.bar--animated').attr('r');
            var circumference = 2 * Math.PI * radius;
            var strokeDashOffset = circumference - ((percent * circumference) / 100);
            $(this).find('circle.bar--animated').css({
                'stroke-dasharray': circumference,
                'stroke-dashoffset': circumference
            }).animate({ 'stroke-dashoffset': strokeDashOffset }, 2800);
        }
    });
}
// Skill
// To check If it is in Viewport 
var $window = $(window);
function check_if_in_view() {
    $('.countervalue').each(function () {
        if ($(this).hasClass('start')) {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).removeClass('start');
                $('.countervalue').text();
                var myNumbers = $(this).text();
                if (myNumbers == Math.floor(myNumbers)) {
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2800,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now) + '%');
                        }
                    });
                } else {
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2800,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(now.toFixed(2) + '$');
                        }
                    });
                }

                radial_animate();
            }
        }
    });
}

$window.on('scroll', check_if_in_view);
$window.on('load', check_if_in_view);

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = 'conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)';
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// end Skill


window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
});


document.getElementById('download-cv').addEventListener('click', function (event) {
    event.preventDefault(); // ป้องกันการดำเนินการเริ่มต้นของลิงก์
    var url = this.href;
    // เปิดแท็บใหม่
    window.open(url, '_blank');

    // สร้างลิงก์ใหม่เพื่อดาวน์โหลดไฟล์
    var a = document.createElement('a');
    a.href = url;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// const skillsSection = document.getElementById('skills-section');

// const progressBars = document.querySelectorAll('.progress-bar');

// function showProgress(){
//     progressBars.forEach(progressBar=> {
//         const value = progressBar.data-progress;
//         progressBar.style.opacity = 1;
//         progressBar.style.width = '90';

//     });
// }

// window.addEventListener('scroll',() => {
//     const sectionPos = skillsSection.getBoundingClientRect().top;
//     const screenPos = window.innerHeight;
//     log.info(sectionPos);
//     log.info(screenPos);
//     //if(sectionPos < screenPos){
//         showProgress();
//     //}else{
//         //hideProgress();
//     //}
// })