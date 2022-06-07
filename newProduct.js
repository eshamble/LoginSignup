var selectType = document.getElementById("selectType");
var selectTypeOptions = ["charm", "print", "button", "pin"];

        for(var i = 0; i < selectTypeOptions.length; i++) {
            var opt = selectTypeOptions[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectType.appendChild(el);
        }

var selectFandom = document.getElementById("selectFandom");
var selectFandomOptions = ["bnha", "dn", "ut", "su"];

        for(var i = 0; i < selectFandomOptions.length; i++) {
            var opt = selectFandomOptions[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectFandom.appendChild(el);
        }

//Not quite ready yet!

/*var printOptions = ["5 x 7", "8.5 x 11", "9 x 12"];
var buttonOptions = ["1 in", "2.5 in"];
var selectSize = document.getElementById("selectSize");
var selectTypeValue = selectType.options[selectType.selectedIndex].value;

function updateSize(){
    selectTypeValue = selectType.options[selectType.selectedIndex].value;
    console.log(selectTypeValue);
    if(selectSize.options.length > 0){
        var i, L = selectSize.options.length - 1;
        for(i = L; i >= 0; i--) {
            selectSize.remove(i);
        }
    }

    if(selectTypeValue === "print"){
        for(var i = 0; i < selectSize.length; i++) {
            var opt = printOptions[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectSize.appendChild(el);
        }
    } else if(selectTypeValue === "button"){
        for(var i = 0; i < selectSize.length; i++) {
            var opt = buttonOptions[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectSize.appendChild(el);
        }
    }
}*/