

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.qsk__accordeon-group');

    items.forEach(function(item) {
        const question = item.querySelector('.qsk__question');
        const answer = item.nextElementSibling; 

        question.addEventListener("click", function() {
           
            items.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.nextElementSibling.style.display = 'none'; 
                }
            });

            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.display = 'block'; 
            } else {
                answer.style.display = 'none'; 
            }
        });
    });

    const textMore = document.querySelector(".new__text-more")
    const newBox = document.querySelector(".new__box")
    const hidenn = document.querySelector('.new__hidden')

    let isVisible = false;
   textMore.addEventListener('click', function() {
    if (isVisible) {
        newBox.style.display = "none"; 
    } else {
        newBox.style.display = "block"; 
    }
 
});
if (hidenn) {
    hidenn.addEventListener('click', function() {
        newBox.style.display = "none"; 
        isVisible = false; 
    });
}

btn.onclick= function(){
    modal.style.display="block";
}

closenModal.onclick=function(){
    modal.style.display="none"
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Скрыть модальное окно
    }
}


function checkWindowSize() {
    if (window.innerWidth > 1000) {
        modal.style.display = 'none'; // 
    }
}

// Добавляем обработчик события resize
window.addEventListener('resize', checkWindowSize);
});



