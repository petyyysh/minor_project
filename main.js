function verify() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let m = parseInt(document.getElementById("m").value);
    let k = parseInt(document.getElementById("k").value);

    let boxSizes = [a, b, c].sort((x, y) => x - y);
    let doorSizes = [m, k].sort((x, y) => x - y);

    console.log("Размеры коробки (отсортированные):", boxSizes);
    console.log("Размеры двери (отсортированные):", doorSizes);

    let result;
    let check = false;

    if (boxSizes[0] <= doorSizes[0] && boxSizes[1] <= doorSizes[1]) {
        result = "Поздравляю! Коробка проходит в дверь, ваша скидка 15%!";
        check = true;
    } else {
        result = "К сожалению, коробка не проходит в дверь. Попробуйте ещё раз.";
    }

    document.getElementById("result").innerText = result;

    return check;
}

function send() {
    let check = verify();
    if (check) {
        alert("Красава, скидка 15% твоя!");
    } else {
        alert("Неправильно, бро, скидка недоступна.");
    }
}

// Событие на кнопку "Отправить"
document.getElementById("send").addEventListener('click', send);
