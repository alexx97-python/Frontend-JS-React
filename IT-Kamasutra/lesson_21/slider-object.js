let slider_1 = {
    imageUrls: [],
    imageCount: 0,
    showPrevBtn: document.getElementById('show-prev-btn'),
    showNextBtn: document.getElementById('show-next-btn'),
    imgSlider: document.getElementById('slide-image'),

    initialitation: () => {
        this.showPrevBtn.addEventListener('click', this.onShowPrevBtnClick.bind(slider_1));
        this.showNextBtn.addEventListener('click', this.onShowNextBtnClick.bind(slider_1));

        this.imageUrls.push('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg');
        this.imageUrls.push('https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=');
        this.imageUrls.push('https://images.ctfassets.net/hrltx12pl8hq/1zlEl4XHkxeDuukJUJyQ7Y/a149a908727e2084d503dc103a620d7f/lohp-image-img-3.jpg?fit=fill&w=480&h=270');
        this.imageUrls.push('https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg');
        this.imageUrls.push('https://image.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg');
    },

    onShowPrevBtnClick: (event) => {
        if (this.imageCount != 0) {
            this.imageCount--;
            this.imgSlider.src = this.imageUrls[imageCount];
            console.log('Prev was clicked');
            if (this.showNextBtn.disabled = true) {
                this.showNextBtn.disabled = false;
            }
        } else {
            console.log('it was the last number')
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: () => {
        this.imageCount++;
    if (this.imageCount < this.imageUrls.length) {
        this.imgSlider.src = this.imageUrls[imageCount];
        console.log('Next was clicked');
        if (this.showPrevBtn.disabled = true) {
            this.showPrevBtn.disabled = false;
        }
    } else {
        console.log('it was the last image.');
        this.showNextBtn.disabled = true;
    }
    }
}

slider_1.initialitation();