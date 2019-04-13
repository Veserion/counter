$(document).ready(function () {
    PopUpHide();
});


// function createRow(){
//     var row = new NewRow();
// }



function PopUpShow() {
    $("#addForm").show();
}

function PopUpHide() {
    $("#addForm").hide();
}

function NewRow() {
    let cookies = JSON.parse($.cookie('list_values')) || JSON.stringify([]);
    console.log(cookies)
    let formValues = conventArray($('#addForm').serializeArray());
    cookies.push(formValues);
    $.cookie('list_values', JSON.stringify(cookies));
    console.log(cookies)
    // $('#outTable').append('<tr><td>my data</td><td>more data</td><td>more data</td></tr>');

}

function conventArray(data) {
    let out = { };
    data.forEach(({name, value}) => out[name] = value);
    return out
}