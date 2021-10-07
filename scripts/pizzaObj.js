function store() { //stores items in the sessionStorage

    // gets the values of the fields from the form
    var name = document.getElementById("name").value;
    var picture = document.getElementById("pic").src;
    var heat = document.getElementById("heat").value;
    var price = document.getElementById("cost").value;
    var toppings = document.getElementById("toppings").value;

    // a pizza object is created
    const pizza = {
        name: name,
        picture: picture,
        heat: heat,
        price: price,
        toppings: toppings,

    }

    // object is made into a string and stored in sessionStorage, 
    // its value being pizzas name since there cannot be duplicate names
    window.sessionStorage.setItem(name, JSON.stringify(pizza));

}

// the container of main div
const container = document.querySelector('#main');

// creates various elements of a card and stores it in the main div
// the values are being given by the last item to be added to sessionStorage
function dataSet(name, picture, heat, price, toppings) {

    // currency mark is being added for clarity
    price = price + '€';

    // all the required elements created here
    var maindiv = document.createElement("div");
    var a = document.createElement("a");
    var img = document.createElement("img");
    var namediv = document.createElement("div");
    var pricediv = document.createElement("div");
    var dltbutton = document.createElement("button");
    var namehead = document.createElement("h2");
    var peppers1 = document.createElement("img");
    var peppers2 = document.createElement("img");
    var peppers3 = document.createElement("img");
    var topdesc = document.createElement("h2");

    // below all the elements are configured
    pricediv.className = "rightCircle";
    pricediv.innerText = price;


    maindiv.className = "gallery";
    maindiv.id = name + ';' + price + ';' + heat;

    img.className = "pizza";
    img.src = picture;
    a.appendChild(img);

    namehead.className = "collapsible";
    namehead.innerText = name;

    peppers1.src = "images/chilli.png";
    peppers1.className = "chilli1";

    peppers2.src = "images/chilli.png";
    peppers2.className = "chilli2";

    peppers3.src = "images/chilli.png";
    peppers3.className = "chilli3";

    dltbutton.onclick = function() { Delete(this); };
    dltbutton.innerText = "x";
    dltbutton.className = "deletebtn";

    topdesc.innerText = "Toppings: " + toppings;
    topdesc.className = "description";

    maindiv.appendChild(pricediv);
    maindiv.appendChild(a);
    namediv.appendChild(namehead);

    // a really brute-force way to show heat of pizzas, could have been done way more efficiantly
    if (heat == 1)
        namediv.appendChild(peppers3);
    else if (heat == 2) {
        namediv.appendChild(peppers3);
        namediv.appendChild(peppers2);
    } else if (heat == 3) {
        namediv.appendChild(peppers3);
        namediv.appendChild(peppers2);
        namediv.appendChild(peppers1);
    }

    maindiv.appendChild(namediv);
    maindiv.appendChild(dltbutton);
    maindiv.appendChild(topdesc);

    // everything is being inserted before the add element card
    container.insertBefore(maindiv, document.getElementById("main").firstChild);

}

// after the form submition new data gets displayed in a card
function saveAndDisplay() {

    var name = document.getElementById("name").value;
    var pizza = JSON.parse(sessionStorage.getItem(name))
    dataSet(name, pizza.picture, pizza.heat, pizza.price, pizza.toppings);


}

// upon an accidental refresh or after page tab change data gets rescued from the sessionStorage
window.onload = function() {
    for (var i = 0; i < sessionStorage.length; i++) {
        var name = sessionStorage.key(i);
        var pizza = JSON.parse(sessionStorage.getItem(name))
        dataSet(pizza.name, pizza.picture, pizza.heat, pizza.price, pizza.toppings);
    }
};


//Deletes pizza card if confirmed
function Delete(element) {

    if (confirm("Do you wish to delete this Pizza?")) {
        document.getElementById(element.parentNode.id).remove();
        sessionStorage.removeItem(element.parentNode.id.split(';')[0]);
    } // if else, does nothing

}