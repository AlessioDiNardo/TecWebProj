var entries = []

function display() {  
    alert("Questo tasto implementerà una funzionalità di !Javascript!!")
    var ul = document.createElement('ul');
    document.getElementById('myItemList').appendChild(ul);
    var entry_content = document.getElementById("entry").value;
    entries.push(entry_content);

    entries.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
    
        li.innerHTML += item;
        entries.pop()
    });
    entry_content.innerHTML.value = ""

    //document.getElementById("listName").innerHTML = entries + "\n";
    //entries=entries

}


function myFilter() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function success() {
    if(document.getElementById("entry").value==="") {
           document.getElementById('entryButton').disabled = true;
           document.getElementById("entryButton").setAttribute("disabled","disabled");
           //alert("VUOTO") 
        }  else { 
           document.getElementById('entryButton').disabled = false;
           document.getElementById("entryButton").removeAttribute("disabled"); 
       }
   }



    