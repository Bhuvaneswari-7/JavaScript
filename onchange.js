function fun1() {
    let v = document.getElementById("a").value;
    let p = document.getElementById("p1");
    p.style.backgroundColor = document.getElementById("color").value;
    p.style.padding = "10px";
    p.style.color = "white";
    p.innerHTML = v;
    console.log(v);
}