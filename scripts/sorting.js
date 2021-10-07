//Sorting function
//number would be a sorting preference since the main 
//pizza card div id is all the required elements
// 0 - name
// 1 - price
// 2 - heat
function sortBy(number) {
    const main = document.querySelector('#main');
    const divs = [...main.children];

    divs.sort(function(a, b) {
        if (a.id.split(';')[number] < b.id.split(';')[number]) { return -1; }
        if (a.id.split(';')[number] > b.id.split(';')[number]) { return 1; }
        return 0;
    })

    divs.forEach(div => main.appendChild(div));


}