
window.onload = function checkCookies() {
    let maxNumber = getCookie("maxNumber");
    if (maxNumber !== "") {
        alert("Дані, збережені в куках: " + maxNumber);
        let confirmation = confirm("Після натискання кнопки 'ОК' дані будуть видалені з куків.");
        if (confirmation) {
            document.cookie = "maxNumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            alert("Куки видалено. Сторінка буде перезавантажена.");
            location.reload();
        }
    }
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "";
}

