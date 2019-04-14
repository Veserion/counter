const getCookies = () => JSON.parse($.cookie('list_values') || JSON.stringify([])) ;
const setCookies = (cookie) =>  $.cookie('list_values', JSON.stringify(cookie));

const PopUpShow = () => $("#containerForForm").show();
const PopUpHide = () => $("#containerForForm").hide();

$(document).ready(function () {
    PopUpHide();
    refresh();

});

function insertRow() {
    const cookies = getCookies();
    const formValues = conventArray($('#addForm').serializeArray());
    cookies.push(formValues);
    setCookies(cookies);
    refresh();
}

function removeRow(index) {
    const cookies = getCookies();
    cookies.splice(index, 1);
    setCookies(cookies);
    refresh()
}

function conventArray(data) {
    let out = { };
    data.forEach(({name, value}) => out[name] = value);
    return out
}

function refresh() {
    const title = '<tr ><td>id</td><td>Дата</td><td>Сумма</td><td>Комментарий</td><tr>';
    const cookies = getCookies();
    const data = cookies.map(({date, cost, comment},index) =>
        `<tr id="${index}"><th>${index}</th>><td>${date}</td><td>${cost}</td><td>${comment}</td></tr>`
    );
    $('#outTable').html(`${title}${data}`);

    $('#idSelector').html(cookies.map((_,index) => `<option>${index}</option>`))
}
