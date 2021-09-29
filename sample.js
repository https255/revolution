let angle = 0,
    angle1 = 0,
    angle2 = 0,
    angle3 = 0,
    angle4 = 0,
    radiusX1 = 260,
    radiusY1 = 130,
    radiusX2 = 240,
    radiusY2 = 120,
    radiusX3 = 220,
    radiusY3 = 110,
    radiusX4 = 200,
    radiusY4 = 100,
    canvas,
    canvas1 = document.getElementById("canvas1"),
    canvas2 = document.getElementById("canvas2"),
    canvas3 = document.getElementById("canvas3"),
    canvas4 = document.getElementById("canvas4"),
    canvas5 = document.getElementById("canvas5"),
    canvas6 = document.getElementById("canvas6"),
    canvas7 = document.getElementById("canvas7"),
    canvas8 = document.getElementById("canvas8"),
    ctx,
    x,
    y,
    ctx1 = canvas1.getContext("2d"),
    ctx2 = canvas2.getContext("2d"),
    ctx3 = canvas3.getContext("2d"),
    ctx4 = canvas4.getContext("2d"),
    ctx5 = canvas5.getContext("2d"),
    ctx6 = canvas6.getContext("2d"),
    ctx7 = canvas7.getContext("2d"),
    ctx8 = canvas8.getContext("2d"),
    width = canvas1.width = canvas2.width = canvas3.width = canvas4.width = canvas5.width = canvas6.width = canvas7.width = canvas8.width = window.innerWidth,
    height = canvas1.height = canvas2.height = canvas3.height = canvas4.height = canvas5.height = canvas6.height = canvas7.height = canvas8.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2;

drawContent();

function drawContent() {
    ctx1.clearRect(0, 0, width, height);
    ctx2.clearRect(0, 0, width, height);
    ctx3.clearRect(0, 0, width, height);
    ctx4.clearRect(0, 0, width, height);
    //各座標
    x1 = centerX + Math.cos(angle1) * radiusX1;
    y1 = centerY + Math.sin(angle1) * radiusY1;
    x2 = centerX + Math.cos(angle2) * radiusX2;
    y2 = centerY + Math.sin(angle2) * radiusY2;
    x3 = centerX + Math.cos(angle3) * radiusX3;
    y3 = centerY + Math.sin(angle3) * radiusY3;
    x4 = centerX + Math.cos(angle4) * radiusX4;
    y4 = centerY + Math.sin(angle4) * radiusY4;
    //各スタイル
    ctx1.fillStyle = "#00f";
    ctx1.beginPath();
    ctx1.arc(x1, y1, 5, 0, Math.PI * 2, false);
    ctx1.fill();
    ctx2.fillStyle = "#00f";
    ctx2.beginPath();
    ctx2.arc(x2, y2, 4, 0, Math.PI * 2, false);
    ctx2.fill();
    ctx3.fillStyle = "#00f";
    ctx3.beginPath();
    ctx3.arc(x3, y3, 3, 0, Math.PI * 2, false);
    ctx3.fill();
    ctx4.fillStyle = "#00f";
    ctx4.beginPath();
    ctx4.arc(x4, y4, 2.5, 0, Math.PI * 2, false);
    ctx4.fill();
    //各スピード
    angle1 += 0.04;
    angle2 += 0.035;
    angle3 += 0.03;
    angle4 += 0.025;
    if (angle1 < Math.PI * 2) {
        ctx5.fillStyle = "#fff";
        ctx5.beginPath();
        ctx5.arc(x1, y1, 1, 0, Math.PI * 2, false);
        ctx5.fill();
    };
    if (angle2 < Math.PI * 2) {
        ctx6.fillStyle = "#fff";
        ctx6.beginPath();
        ctx6.arc(x2, y2, 1, 0, Math.PI * 2, false);
        ctx6.fill();
    };
    if (angle3 < Math.PI * 2) {
        ctx7.fillStyle = "#fff";
        ctx7.beginPath();
        ctx7.arc(x3, y3, 1, 0, Math.PI * 2, false);
        ctx7.fill();
    };
    if (angle4 < Math.PI * 2) {
        ctx8.fillStyle = "#fff";
        ctx8.beginPath();
        ctx8.arc(x4, y4, 1, 0, Math.PI * 2, false);
        ctx8.fill();
    };
    requestAnimationFrame(drawContent);
}