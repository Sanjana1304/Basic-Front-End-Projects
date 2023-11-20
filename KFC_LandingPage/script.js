const menutoggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const desc_arr = ["Discover the unbeatable joy of KFC's world-famous Fried Chicken and crispy, golden Fries. Our secret recipe, expertly crafted over years, guarantees a mouthwatering, crunchy experience. Paired with our signature seasoned fries, it's a combo that's hard to resist. Dive into KFC's legendary flavor today!","Indulge in the crispy delight of our French Fries at KFC. Each golden strip is expertly seasoned to perfection, ensuring a burst of flavor in every bite. Whether as a snack or paired with our famous Fried Chicken, our fries are the ultimate crispy companions to satisfy your cravings.","Experience the ultimate burger bliss at KFC. Our juicy, tender patties are cooked to perfection and layered with fresh, crispy veggies, all encased in a soft, toasted bun. Every bite is a mouthwatering journey of flavors and textures. Elevate your mealtime with our delicious burgers.","Indulge in a flavor explosion with KFC's chicken wings. Crispy on the outside, tender on the inside, and drenched in your choice of signature sauces, our wings are a taste sensation like no other. Whether you like them mild or fiery hot, get ready for a wing experience that's simply irresistible."];
const p_desc = document.getElementById("item_desc");

i = 0;
function ActiveSlide(n){
    for(slide of slides)
    slide.classList.remove('active');
    slides[n].classList.add('active');
}


next.addEventListener('click', function(){
    if(i == slides.length - 1){
        i = 0;
        ActiveSlide(i);
        p_desc.innerHTML = desc_arr[i];
    }
    else {
        i++;
        ActiveSlide(i);
        p_desc.innerHTML = desc_arr[i];
    }
});

prev.addEventListener('click', function(){
    if(i == 0){
        i = slides.length - 1;
        ActiveSlide(i);
        p_desc.innerHTML = desc_arr[i];
    }
    else {
        i--;
        ActiveSlide(i);
        p_desc.innerHTML = desc_arr[i];
    }
});
