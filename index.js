var _div_services = document.getElementById('services');

let _content =  `<div class="col-md-6 icon-box position-relative">
                <i class="bi bi-briefcase"></i>
                <h4><a href="" class="stretched-link">Jad zaiter services</a></h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div><!-- Icon-Box -->`
let _data = [
        {name:'Charbel',description:'Description 01'},
        {name:'Houssam',description:'Description 02'},
        {name:'Ramia', description:'Description 03'},
        {name:'Jad', description:'Description 04'}
    ];

_data.forEach(element => {
     let _div_test = document.createElement('div')
    _div_test.innerHTML =`<div class="col-md-6 icon-box position-relative">
                <i class="bi bi-briefcase"></i>
                <h4><a href="" class="stretched-link">${element.name} services</a></h4>
                <p>${element.description}</p>
              </div><!-- Icon-Box -->`;
    _div_services.appendChild(_div_test);    
});

