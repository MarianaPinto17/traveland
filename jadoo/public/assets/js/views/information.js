const body = document.body;
body.onload = fill;

var contacts = '{\
                "email": "geral@traveland.com", \
                "phone": "+351123456789", \
                "address": "Campus Santigo, Aveiro "\
                }';

function fill(){
    let data = JSON.parse(contacts);
    let html = "";
    html += "<tr>";
    html += "<td>" + data.email + "</td>";
    html += "<td>" + data.phone + "</td>";
    html += "<td>" + data.address + "</td>";
    html += "</tr>";

    document.getElementById("contacts").innerHTML = html;
}

