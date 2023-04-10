let arr = [
    ["Go to gym", 0],
    ["Prepare for the test", 0],
    ["Maths assignment", 0],
    ["Basketball classes", 0],
    ["Buy stationary items", 0]
];

let s = `<input type="checkbox" class="checkbox" oninput = "markasdone(z)">
        <div class="content" >abc</div>
        <div class="cross"><button class = "remove" onclick = "removetask(z)"><span class="material-symbols-outlined">
            close</span></button>`;
let n = 0;
function update(arr) {
    let element;
    let line;
    let location_ = document.querySelector(".taskarea")
    for (let i of arr) {
        _s = s.replace("z", n);
        s_ = _s.replace("z", n);
        s__ = s_.replace("abc", i[0]);
        element = document.createElement("div");
        line = document.createElement("hr");
        line.classList.add("divider");
        element.classList.add("task");
        element.id = n;
        line.id = "l" + n;
        element.innerHTML = s__;
        location_.appendChild(element);
        location_.appendChild(line);
        n++;
    }
}

function addtask() {
    let element = document.getElementById("inp");
    let str = element.value;
    if (str.length != 0) {
        element.value = "";
        arr.push([str, 0]);
        update([[str, 0]]);
    }
}

function markasdone(n) {
    let element = document.getElementById(n);
    if ((arr[n])[1] == 0) {
        element.classList.add("dashed");
        (arr[n])[1]++;
    } else {
        if ((arr[n])[1] == 1) {
            element.classList.remove("dashed");
            (arr[n])[1]--;
        }
    }
}

function removetask(n) {
    let element = document.getElementById(n);
    let line = document.getElementById(("l" + n));
    element.remove();
    line.remove();
}

update(arr);