$(function () {
    var oC = document.getElementById('canvas');
    var gd = oC.getContext('2d');
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var N = 100;
    cSize(oC);
    oC.width = winW;
    oC.height = winH;
    var state = 0
    draw();
    window.onresize = function () {
        cSize(oC);
    };
    oC.onclick = function () {
        state++;
        state %= 12;
    }
    function draw() {

        var aPoint = [];
        for (var i = 0; i < N; i++) {
            aPoint[i] = {
                r: 5,
                x: rnd(10, winW - 10),
                y: rnd(10, winH - 10),
            };
        }

        setInterval(function () {
            switch (state) {
                case 0:
                    aPoint.sort(function (n1, n2) {
                        return n1.x - n2.x
                    })
                    break;
                case 1:
                    aPoint.sort(function (n1, n2) {
                        return n1.y - n2.y
                    })
                    break;
                case 2:
                    aPoint.sort(function (n1, n2) {
                        return (n1.x - n1.y + 500) / Math.sqrt(2) - (n2.x - n2.y + 500) / Math.sqrt(2)
                    })
                    break;
                case 3:
                    aPoint.sort(function (n1, n2) {
                        return (n1.x + n1.y) / Math.sqrt(2) - (n2.x + n2.y) / Math.sqrt(2)
                    })
                    break;
                case 4:
                    aPoint.sort(function (n1, n2) {
                        var a = Math.atan2((n1.x - oC.width / 2), (n1.y - oC.height / 2))
                        var b = Math.atan2((n2.x - oC.width / 2), (n2.y - oC.height / 2))
                        if (a > Math.PI) {
                            a = a - Math.PI * 2
                        }
                        if (b > Math.PI) {
                            b = b - Math.PI * 2
                        }
                        return a - b
                    })
                    break;
                case 5:
                    aPoint.sort(function (n1, n2) {
                        return Math.atan2((n1.x), (n1.y - oC.height)) - Math.atan2((n2.x), (n2.y - oC.height))
                    })
                    break;
                case 6:
                    aPoint.sort(function (n1, n2) {
                        return Math.atan2((n1.x - oC.width), (n1.y - oC.height / 2)) - Math.atan2((n2.x - oC.width), (n2.y - oC.height / 2))
                    })
                    break;
                case 7:
                    aPoint.sort(function (n1, n2) {
                        return Math.atan2((n1.x - oC.width), (n1.y - oC.height)) - Math.atan2((n2.x - oC.width), (n2.y - oC.height))
                    })
                    break;
                case 8:
                    aPoint.sort(function (n1, n2) {
                        return Math.atan2((n1.x), (n1.y)) - Math.atan2((n2.x), (n2.y))
                    })
                    break;
                case 9:
                    aPoint.sort(function (n1, n2) {
                        return Math.atan2((n1.x - oC.width*0.4), (n1.y - oC.height*0.8)) - Math.atan2((n2.x - oC.width*0.4), (n2.y - oC.height*0.8))
                    })
                    break;
                case 10:
                    var arr = []
                    aPoint.sort(function (n1, n2) {
                        return Math.sqrt((n1.x - oC.width / 2) * (n1.x - oC.width / 2) + (n1.y - oC.height / 2) * (n1.y - oC.height / 2)) - Math.sqrt((n2.x - oC.width / 2) * (n2.x - oC.width / 2) + (n2.y - oC.height / 2) * (n2.y - oC.height / 2))
                    })

                    arr.push(aPoint.pop())

                    var n = 0
                    while (aPoint.length != 0) {
                        aPoint.sort(function (n1, n2) {
                            var c = Math.atan2((arr[n].x - oC.width / 2), (arr[n].y - oC.height / 2))
                            c = -c + Math.PI
                            var a = (Math.atan2((n1.x - arr[n].x), (n1.y - arr[n].y)) + c)
                            var b = (Math.atan2((n2.x - arr[n].x), (n2.y - arr[n].y)) + c)
                            if (a > Math.PI) {
                                a = a - Math.PI * 2
                            }
                            if (b > Math.PI) {
                                b = b - Math.PI * 2
                            }
                            return a - b
                        })

                        arr.push(aPoint.pop())
                        n++
                    }
                    aPoint = arr
                    break;
                case 11:
                    var arr1 = []
                    var arr2 = []
                    var arr3 = []
                    var arr4 = []
                    for(var i=0; i<aPoint.length; i++){
                        if(aPoint[i].x<oC.width/2 && aPoint[i].y<oC.height/2){
                            arr1.push(aPoint[i])
                        }else if(aPoint[i].x>=oC.width/2 && aPoint[i].y<=oC.height/2){
                            arr2.push(aPoint[i])
                        }else if(aPoint[i].x<=oC.width/2 && aPoint[i].y>=oC.height/2){
                            arr4.push(aPoint[i])
                        }else if(aPoint[i].x>oC.width/2 && aPoint[i].y>oC.height/2){
                            arr3.push(aPoint[i])
                        }
                    }
                    arr1.sort(function (n1, n2) {
                        return Math.atan2((n1.x), (n1.y)) - Math.atan2((n2.x), (n2.y))
                    })
                    arr2.sort(function (n1, n2) {
                        return Math.atan2((n1.x-oC.width), (n1.y)) - Math.atan2((n2.x-oC.width), (n2.y))
                    })
                    arr3.sort(function (n1, n2) {
                        return Math.atan2((n1.x - oC.width), (n1.y - oC.height)) - Math.atan2((n2.x - oC.width), (n2.y - oC.height))
                    })
                    arr4.sort(function (n1, n2) {
                        return Math.atan2((n1.x), (n1.y - oC.height)) - Math.atan2((n2.x), (n2.y - oC.height))
                    })
                    aPoint = arr1.concat(arr2,arr3,arr4)
                    break;
                default:
                    break;
            }
            gd.clearRect(0, 0, oC.width, oC.height);
            gd.fillStyle = "#666666";
            gd.fillRect(0, 0, oC.width, oC.height);
            for (var i = 0; i < N; i++) {
                drawPoint(aPoint[i]);
            }

            for (var i = 0; i < N - 1; i++) {
                drawLine(aPoint[i], aPoint[i + 1])
            }
        }, 16);
    }
    function drawPoint(p) {
        gd.beginPath();
        gd.moveTo(p.x, p.y);
        gd.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
        gd.fillStyle = "rgba(187,187,187,1)";
        gd.fill();
    }
    function drawLine(a, b) {
        gd.beginPath();
        gd.moveTo(a.x, a.y);
        gd.lineTo(b.x, b.y);
        gd.strokeStyle = "rgba(187,187,187,1)";
        gd.stroke();
    }
});