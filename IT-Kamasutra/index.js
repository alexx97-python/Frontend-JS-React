
var firstNameId = 'first-name';
var firstNameE1 = document.getElementById(firstNameId);
var lastNameId = 'last-name';
var lastNameE1 = document.getElementById(lastNameId);
var addressId = 'address';
var addressE1 = document.getElementById(addressId);
var citiesId = 'cities';
var citiesE1 = document.getElementById(citiesId);
var hobbiesId = 'hobbies';
var hobbiesE1 = document.getElementById(hobbiesId);
var avatarWrapperId = 'avatar-container';
var avatarWrapperE1 = document.getElementById(avatarWrapperId);

        /* 
            window.alert(firstNameE1.value);
            window.alert(lastNameE1.value);
            window.alert(addressE1.value);
            window.alert(citiesE1.value); */
        //window.alert(citiesE1.innerHTML);
        //window.alert(avatarWrapperE1.innerHTML);

window.alert(lastNameE1.className);
        //lastNameE1.setAttribute('class', 'error-input');

lastNameE1.className = 'error-input';
avatarWrapperE1.innerHTML = '<ul><li>1</li><li>2</li></ul>'




