// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
var btns = document.querySelectorAll('button');
btns.forEach(function (btn) { return btn.addEventListener('click', function (e) {
    e.preventDefault();
    var formData = updateFormData();
    if (validateFormData(formData)) {
        checkFormData(formData);
    }
}); });
function updateFormData() {
    var email = document.querySelector('#email');
    var title = document.querySelector('#title');
    var text = document.querySelector('#text');
    var checkbox = document.querySelector('#checkbox');
    return {
        email: email ? email.value : "",
        title: title ? title.value : "",
        text: text ? text.value : "",
        checkbox: checkbox ? checkbox.checked : false
    };
}
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    for (var el in data) {
        if (!data[el]) {
            console.log("Please, complete all fields");
            createWarning(true, "Please, complete all fields");
            return false;
        }
        else {
            continue;
        }
    }
    createWarning(false);
    return true;
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    var filteredEmails = emails.filter(function (el) { return el === email; });
    if (filteredEmails.length > 0) {
        console.log("This email is already exist");
        createWarning(true, "This email is already exist");
        return false;
    }
    else {
        console.log("Posting data...");
        createWarning(true, "Posting data...");
        setTimeout(function () {
            var forms = document.querySelectorAll("form");
            forms.forEach(function (form) {
                form.reset();
            });
            createWarning(false);
        }, 2000);
        return true;
    }
}
function createWarning(flag, msg) {
    if (flag === void 0) { flag = false; }
    if (msg === void 0) { msg = ""; }
    var p = document.querySelector('#warningFlag');
    if (p) {
        p.remove();
    }
    if (flag) {
        var newP = document.createElement('p');
        newP.id = 'warningFlag';
        newP.textContent = msg;
        var body = document.querySelector('body');
        if (body) {
            body.append(newP);
        }
    }
}
