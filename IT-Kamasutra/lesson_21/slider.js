// find elements
let showPrevBtn = document.getElementById('show-prev-btn');
let showNextBtn = document.getElementById('show-next-btn');
let imgSlider = document.getElementById('slide-image');
console.log(imgSlider);
let imageCount = 0;

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// images array
var imageUrls = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
'https://images.ctfassets.net/hrltx12pl8hq/1zlEl4XHkxeDuukJUJyQ7Y/a149a908727e2084d503dc103a620d7f/lohp-image-img-3.jpg?fit=fill&w=480&h=270',
'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg',
'https://image.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg'];


// functions definitions 
function onShowPrevBtnClick() {
    if (imageCount != 0) {
        imageCount--;
        imgSlider.src = imageUrls[imageCount];
        console.log('Prev was clicked');
        if (showNextBtn.disabled = true) {
            showNextBtn.disabled = false;
        }
} else {
        console.log('it was the last number')
        showPrevBtn.disabled = true;
    }
    
}

function onShowNextBtnClick() {
    imageCount++;
    if (imageCount < imageUrls.length) {
        imgSlider.src = imageUrls[imageCount];
        console.log('Next was clicked');
        if (showPrevBtn.disabled = true) {
            showPrevBtn.disabled = false;
        }
    } else {
        console.log('it was the last image.');
        showNextBtn.disabled = true;
    }
    
}



