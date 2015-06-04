// ==UserScript==
// @name         ima bot lol
// @namespace    https://github.com/volundr-/imabotlol
// @version      0.11
// @description  whee ima bot lol
// @author       Volundr
// @match        http://agar.io/
// @grant        none
// ==/UserScript==

/** Victor.js */
/*!
 MIT License

 Copyright (c) 2011 Max Kueng, George Crabtree

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
if (!typeof Victor === 'function') {!function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.Victor=t()}}(function(){return function t(n,i,o){function r(s,h){if(!i[s]){if(!n[s]){var u="function"==typeof require&&require;if(!h&&u)return u(s,!0);if(e)return e(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=i[s]={exports:{}};n[s][0].call(p.exports,function(t){var i=n[s][1][t];return r(i?i:t)},p,p.exports,t,n,i,o)}return i[s].exports}for(var e="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(t,n,i){function o(t,n){return this instanceof o?(this.x=t||0,void(this.y=n||0)):new o(t,n)}function r(t,n){return Math.floor(Math.random()*(n-t+1)+t)}function e(t){return t*h}function s(t){return t/h}i=n.exports=o,o.fromArray=function(t){return new o(t[0]||0,t[1]||0)},o.fromObject=function(t){return new o(t.x||0,t.y||0)},o.prototype.addX=function(t){return this.x+=t.x,this},o.prototype.addY=function(t){return this.y+=t.y,this},o.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},o.prototype.subtractX=function(t){return this.x-=t.x,this},o.prototype.subtractY=function(t){return this.y-=t.y,this},o.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},o.prototype.divideX=function(t){return this.x/=t.x,this},o.prototype.divideY=function(t){return this.y/=t.y,this},o.prototype.divide=function(t){return this.x/=t.x,this.y/=t.y,this},o.prototype.invertX=function(){return this.x*=-1,this},o.prototype.invertY=function(){return this.y*=-1,this},o.prototype.invert=function(){return this.invertX(),this.invertY(),this},o.prototype.multiplyX=function(t){return this.x*=t.x,this},o.prototype.multiplyY=function(t){return this.y*=t.y,this},o.prototype.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},o.prototype.normalize=function(){var t=this.length();return 0===t?(this.x=1,this.y=0):this.divide(o(t,t)),this},o.prototype.norm=o.prototype.normalize,o.prototype.limit=function(t,n){return Math.abs(this.x)>t&&(this.x*=n),Math.abs(this.y)>t&&(this.y*=n),this},o.prototype.randomize=function(t,n){return this.randomizeX(t,n),this.randomizeY(t,n),this},o.prototype.randomizeX=function(t,n){var i=Math.min(t.x,n.x),o=Math.max(t.x,n.x);return this.x=r(i,o),this},o.prototype.randomizeY=function(t,n){var i=Math.min(t.y,n.y),o=Math.max(t.y,n.y);return this.y=r(i,o),this},o.prototype.randomizeAny=function(t,n){return Math.round(Math.random())?this.randomizeX(t,n):this.randomizeY(t,n),this},o.prototype.unfloat=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},o.prototype.mixX=function(t,n){return"undefined"==typeof n&&(n=.5),this.x=(1-n)*this.x+n*t.x,this},o.prototype.mixY=function(t,n){return"undefined"==typeof n&&(n=.5),this.y=(1-n)*this.y+n*t.y,this},o.prototype.mix=function(t,n){return this.mixX(t,n),this.mixY(t,n),this},o.prototype.clone=function(){return new o(this.x,this.y)},o.prototype.copyX=function(t){return this.x=t.x,this},o.prototype.copyY=function(t){return this.y=t.y,this},o.prototype.copy=function(t){return this.copyX(t),this.copyY(t),this},o.prototype.zero=function(){return this.x=this.y=0,this},o.prototype.dot=function(t){return this.x*t.x+this.y*t.y},o.prototype.cross=function(t){return this.x*t.y-this.y*t.x},o.prototype.projectOnto=function(t){var n=(this.x*t.x+this.y*t.y)/(t.x*t.x+t.y*t.y);return this.x=n*t.x,this.y=n*t.y,this},o.prototype.horizontalAngle=function(){return Math.atan2(this.y,this.x)},o.prototype.horizontalAngleDeg=function(){return e(this.horizontalAngle())},o.prototype.verticalAngle=function(){return Math.atan2(this.x,this.y)},o.prototype.verticalAngleDeg=function(){return e(this.verticalAngle())},o.prototype.angle=o.prototype.horizontalAngle,o.prototype.angleDeg=o.prototype.horizontalAngleDeg,o.prototype.direction=o.prototype.horizontalAngle,o.prototype.rotate=function(t){var n=this.x*Math.cos(t)-this.y*Math.sin(t),i=this.x*Math.sin(t)+this.y*Math.cos(t);return this.x=n,this.y=i,this},o.prototype.rotateDeg=function(t){return t=s(t),this.rotate(t)},o.prototype.rotateBy=function(t){var n=this.angle()+t;return this.rotate(n)},o.prototype.rotateByDeg=function(t){return t=s(t),this.rotateBy(t)},o.prototype.distanceX=function(t){return this.x-t.x},o.prototype.absDistanceX=function(t){return Math.abs(this.distanceX(t))},o.prototype.distanceY=function(t){return this.y-t.y},o.prototype.absDistanceY=function(t){return Math.abs(this.distanceY(t))},o.prototype.distance=function(t){return Math.sqrt(this.distanceSq(t))},o.prototype.distanceSq=function(t){var n=this.distanceX(t),i=this.distanceY(t);return n*n+i*i},o.prototype.length=function(){return Math.sqrt(this.lengthSq())},o.prototype.lengthSq=function(){return this.x*this.x+this.y*this.y},o.prototype.magnitude=o.prototype.length,o.prototype.isZero=function(){return 0===this.x&&0===this.y},o.prototype.isEqualTo=function(t){return this.x===t.x&&this.y===t.y},o.prototype.toString=function(){return"x:"+this.x+", y:"+this.y},o.prototype.toArray=function(){return[this.x,this.y]},o.prototype.toObject=function(){return{x:this.x,y:this.y}};var h=180/Math.PI},{}]},{},[1])(1)});}
function Vector (x, y) {
    if (!(this instanceof Vector)) {
        return new Vector(x, y);
    }

    if (typeof x !== 'number') {
        console.log (typeof x);
        throw new TypeError('x coordinate must be a Number');
    }
    if (typeof y !== 'number') {
        throw new TypeError('y coordinate must be a Number');
    }

    this.x = x;
    this.y = y;
};

Vector.fromArray = function (arr) {
    return new Vector(arr[0], arr[1]);
};

Vector.fromObject = function (obj) {
    return new Vector(obj.x, obj.y);
};

Vector.prototype.add = function (vec) {
    return new Vector(this.x + vec.x, this.y + vec.y);
};

Vector.prototype.subtract = function (vec) {
    return new Vector(this.x - vec.x, this.y - vec.y);
};

Vector.prototype.invert = function () {
    return new Vector(-this.x, -this.y);
};

Vector.prototype.multiply = function (vec) {
    return new Vector(vec.x * this.x, vec.y * this.y);
};

Vector.prototype.divide = function (vec) {
    return new Vector(this.x / vec.x, this.y / vec.y);;
};

Vector.prototype.lengthSq = function () {
    return this.x * this.x + this.y * this.y;
};

Vector.prototype.length = function () {
    return Math.sqrt(this.lengthSq());
};

/**
 * Returns a vector of the same direction but with a length of 1, or the given length.
 * @param  {number} [scalar=1] Length of returned vector.
 * @return {Vector}
 */
Vector.prototype.normalize = function (scalar) {
    var length = this.length();
    if (length === 0) {
        return Vector(1, 0);
    }
    return this.divide(Vector(length, length));
};

Vector.prototype.mix = function (vec, amount) {
    amount = amount || 0.5;
    var x = (1 - amount) * this.x + amount * vec.x;
    var y = (1 - amount) * this.y + amount * vec.y;
    return new Vector(x, y);
};

Vector.prototype.perpendicular = function () {
    return new Vector(-this.y, this.x); // this is 90 degrees counter-clockwise
};

Vector.prototype.snap = function (snapTo) {
    var snap = function(val) {
        return Math.round(val / snapTo) * snapTo;
    };
    return new Vector(snap(this.x), snap(this.y));
};

/**
 * Expand this vector to a given minimum length in the same direction as the original.
 *
 * Not valid on zero-length vectors.
 *
 * @param  {number} scalar Minimum length
 * @return {Vector}
 */
Vector.prototype.minLength = function (scalar) {
    return this.length() < scalar ? this.normalize(scalar) : this;
};

Vector.prototype.clone = function () {
    return new Vector(this.x, this.y);
};

Vector.prototype.dot = function (vec2) {
    return this.x * vec2.x + this.y * vec2.y;
};

Vector.prototype.projectOnto = function (vec2) {
    return vec2.multiply(this.dot(vec2) / vec2.lengthSq());
};

Vector.prototype.angle = function () {
    return Math.atan2(this.y, this.x);
};

Vector.prototype.angleDeg = function () {
    return radian2degrees(this.angle());
};

Vector.prototype.slope = function () {
    return this.y / this.x;
};

Vector.prototype.toString = function () {
    return 'x:' + this.x + ', y:' + this.y;
};

Vector.prototype.toArray = function () {
    return [ this.x, this.y ];
};

Vector.prototype.toObject = function () {
    return { x: this.x, y: this.y };
};

Vector.prototype.equals = function (vec) {
    return this.x === vec.x && this.y === vec.y;
};

Vector.prototype.magnitude = Vector.prototype.length;

Vector.prototype.distanceSq = function(vec) {
    var dx = this.x - vec.x,
        dy = this.y - vec.y;
    return dx * dx + dy * dy;
};

Vector.prototype.distance = function(vec) {
    return Math.sqrt(this.distanceSq(vec));
};

var degrees = 180 / Math.PI;

function radian2degrees (rad) {
    return rad * degrees;
}

function degrees2radian (deg) {
    return deg / degrees;
}


(function(f, g) {
    function Na() {
        ia = !0;
        wa();
        setInterval(wa, 18E4);
        A = ja = document.getElementById("canvas");
        e = A.getContext("2d");
        A.onmousedown = function(a) {
            if (xa) {
                var b = a.clientX - (5 + q / 5 / 2),
                    c = a.clientY - (5 + q / 5 / 2);
                if (Math.sqrt(b * b + c * c) <= q / 5 / 2) {
                    K();
                    B(17);
                    return
                }
            }
            S = a.clientX;
            T = a.clientY;
            ka();
            K()
        };
        A.onmousemove = function(a) {
            S = a.clientX;
            T = a.clientY;
            ka()
        };
        A.onmouseup = function(a) {};
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", ya, !1) : document.body.onmousewheel = ya;
        var a = !1,
            b = !1,
            c = !1;
        f.onkeydown = function(d) {
            32 != d.keyCode || a || (K(), B(17), a = !0);
            81 != d.keyCode || b || (B(18), b = !0);
            87 != d.keyCode || c || (K(), B(21), c = !0);
            27 == d.keyCode && za(!0)
        };
        f.onkeyup = function(d) {
            32 == d.keyCode && (a = !1);
            87 == d.keyCode && (c = !1);
            81 == d.keyCode && b && (B(19), b = !1)
        };
        f.onblur = function() {
            B(19);
            c = b = a = !1
        };
        f.onresize = Aa;
        Aa();
        f.requestAnimationFrame ? f.requestAnimationFrame(Ba) : setInterval(la, 1E3 / 60);
        setInterval(K, 40);
        u && g("#region").val(u);
        Ca();
        U(g("#region").val());
        null == m && u && V();
        g("#overlays").show()
    }

    function ya(a) {
        C *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        1 > C && (C = 1);
        C > 4 / h && (C = 4 / h)
    }

    function Oa() {
        if (.35 > h) L = null;
        else {
            for (var a = Number.POSITIVE_INFINITY, b = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY, d = Number.NEGATIVE_INFINITY, e = 0, p = 0; p < n.length; p++) n[p].shouldRender() && (e = Math.max(n[p].size, e), a = Math.min(n[p].x, a), b = Math.min(n[p].y, b), c = Math.max(n[p].x, c), d = Math.max(n[p].y, d));
            L = QUAD.init({
                minX: a - (e + 100),
                minY: b - (e + 100),
                maxX: c + (e + 100),
                maxY: d + (e + 100)
            });
            for (p = 0; p < n.length; p++)
                if (a = n[p], a.shouldRender())
                    for (b = 0; b < a.points.length; ++b) L.insert(a.points[b])
        }
    }

    function ka() {
        W = (S - q / 2) / h + s;
        X = (T - r / 2) / h + t
    }

    function wa() {
        null == Y && (Y = {}, g("#region").children().each(function() {
            var a = g(this),
                b = a.val();
            b && (Y[b] = a.text())
        }));
        g.get(F + "//m.agar.io/info", function(a) {
            var b = {},
                c;
            for (c in a.regions) {
                var d = c.split(":")[0];
                b[d] = b[d] || 0;
                b[d] += a.regions[c].numPlayers
            }
            for (c in b) g('#region option[value="' + c + '"]').text(Y[c] + " (" + b[c] + " players)")
        }, "json")
    }

    function Da() {
        g("#adsBottom").hide();
        g("#overlays").hide();
        Ca()
    }

    function U(a) {
        a && a != u && (g("#region").val() != a && g("#region").val(a),
            u = f.localStorage.location = a, g(".region-message").hide(), g(".region-message." + a).show(), g(".btn-needs-server").prop("disabled", !1), ia && V())
    }

    function za(a) {
        D = null;
        g("#overlays").fadeIn(a ? 200 : 3E3);
        a || g("#adsBottom").fadeIn(3E3)
    }

    function Ca() {
        g("#region").val() ? f.localStorage.location = g("#region").val() : f.localStorage.location && g("#region").val(f.localStorage.location);
        g("#region").val() ? g("#locationKnown").append(g("#region")) : g("#locationUnknown").append(g("#region"))
    }

    function ma() {
        console.log("Find " +
            u + M);
        g.ajax(F + "//m.agar.io/", {
            error: function() {
                setTimeout(ma, 1E3)
            },
            success: function(a) {
                a = a.split("\n");
                "45.79.222.79:443" == a[0] ? ma() : Ea("ws://" + a[0])
            },
            dataType: "text",
            method: "POST",
            cache: !1,
            crossDomain: !0,
            data: u + M || "?"
        })
    }

    function V() {
        ia && u && (g("#connecting").show(), ma())
    }

    function Ea(a) {
        if (m) {
            m.onopen = null;
            m.onmessage = null;
            m.onclose = null;
            try {
                m.close()
            } catch (b) {}
            m = null
        }
        var c = f.location.search.slice(1);
        /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+:[0-9]+$/.test(c) && (a = "ws://" + c);
        Pa && (a = a.split(":"), a = a[0] + "s://ip-" +
            a[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + (+a[2] + 2E3));
        E = [];
        l = [];
        y = {};
        n = [];
        G = [];
        z = [];
        v = w = null;
        H = 0;
        console.log("Connecting to " + a);
        m = new WebSocket(a);
        m.binaryType = "arraybuffer";
        m.onopen = Qa;
        m.onmessage = Ra;
        m.onclose = Sa;
        m.onerror = function() {
            console.log("socket error")
        }
    }

    function Qa(a) {
        Z = 500;
        g("#connecting").hide();
        console.log("socket open");
        a = new ArrayBuffer(5);
        var b = new DataView(a);
        b.setUint8(0, 254);
        b.setUint32(1, 4, !0);
        m.send(a);
        a = new ArrayBuffer(5);
        b = new DataView(a);
        b.setUint8(0, 255);
        b.setUint32(1, 1, !0);
        m.send(a);
        Fa()
    }

    function Sa(a) {
        console.log("socket close");
        setTimeout(V, Z);
        Z *= 1.5
    }

    function Ra(a) {
        function b() {
            for (var a = "";;) {
                var b = d.getUint16(c, !0);
                c += 2;
                if (0 == b) break;
                a += String.fromCharCode(b)
            }
            return a
        }
        var c = 1,
            d = new DataView(a.data);
        switch (d.getUint8(0)) {
            case 16:
                Ta(d);
                break;
            case 17:
                N = d.getFloat32(1, !0);
                O = d.getFloat32(5, !0);
                P = d.getFloat32(9, !0);
                break;
            case 20:
                l = [];
                E = [];
                break;
            case 21:
                na = d.getInt16(1, !0);
                oa = d.getInt16(3, !0);
                pa || (pa = !0, $ = na, aa = oa);
                break;
            case 32:
                E.push(d.getUint32(1, !0));
                break;
            case 49:
                if (null != w) break;
                a = d.getUint32(c, !0);
                c += 4;
                z = [];
                for (var e = 0; e < a; ++e) {
                    var p = d.getUint32(c, !0),
                        c = c + 4;
                    z.push({
                        id: p,
                        name: b()
                    })
                }
                Ga();
                break;
            case 50:
                w = [];
                a = d.getUint32(c, !0);
                c += 4;
                for (e = 0; e < a; ++e) w.push(d.getFloat32(c, !0)), c += 4;
                Ga();
                break;
            case 64:
                ba = d.getFloat64(1, !0), ca = d.getFloat64(9, !0), da = d.getFloat64(17, !0), ea = d.getFloat64(25, !0), N = (da + ba) / 2, O = (ea + ca) / 2, P = 1, 0 == l.length && (s = N, t = O, h = P)
        }
    }

    function Ta(a) {
        I = +new Date;
        var b = Math.random(),
            c = 1;
        qa = !1;
        for (var d = a.getUint16(c, !0), c = c + 2, e = 0; e < d; ++e) {
            var p =
                    y[a.getUint32(c, !0)],
                f = y[a.getUint32(c + 4, !0)],
                c = c + 8;
            p && f && (f.destroy(), f.ox = f.x, f.oy = f.y, f.oSize = f.size, f.nx = p.x, f.ny = p.y, f.nSize = f.size, f.updateTime = I)
        }
        for (e = 0;;) {
            d = a.getUint32(c, !0);
            c += 4;
            if (0 == d) break;
            ++e;
            var g, p = a.getInt16(c, !0),
                c = c + 2,
                f = a.getInt16(c, !0),
                c = c + 2;
            g = a.getInt16(c, !0);
            for (var c = c + 2, h = a.getUint8(c++), m = a.getUint8(c++), q = a.getUint8(c++), h = (h << 16 | m << 8 | q).toString(16); 6 > h.length;) h = "0" + h;
            var h = "#" + h,
                k = a.getUint8(c++),
                m = !!(k & 1),
                q = !!(k & 16);
            k & 2 && (c += 4);
            k & 4 && (c += 8);
            k & 8 && (c += 16);
            for (var n, k = "";;) {
                n = a.getUint16(c, !0);
                c += 2;
                if (0 == n) break;
                k += String.fromCharCode(n)
            }
            n = k;
            k = null;
            y.hasOwnProperty(d) ? (k = y[d], k.updatePos(), k.ox = k.x, k.oy = k.y, k.oSize = k.size, k.color = h) : (k = new Ha(d, p, f, g, h, n), k.pX = p, k.pY = f);
            k.isVirus = m;
            k.isAgitated = q;
            k.nx = p;
            k.ny = f;
            k.nSize = g;
            k.updateCode = b;
            k.updateTime = I;
            n && k.setName(n); - 1 != E.indexOf(d) && -1 == l.indexOf(k) && (document.getElementById("overlays").style.display = "none", l.push(k), 1 == l.length && (s = k.x, t = k.y))
        }
        b = a.getUint32(c, !0);
        c += 4;
        for (e = 0; e < b; e++) d = a.getUint32(c, !0), c += 4, k = y[d], null != k && k.destroy();
        qa && 0 == l.length && za(!1)
    }

    function K() {
        if (ra()) {
            var a = S - q / 2,
                b = T - r / 2;
            64 > a * a + b * b || Ia == W && Ja == X || (Ia = W, Ja = X, a = new ArrayBuffer(21), b = new DataView(a), b.setUint8(0, 16), b.setFloat64(1, W, !0), b.setFloat64(9, X, !0), b.setUint32(17, 0, !0), m.send(a))
        }
    }

    function Fa() {
        if (ra() && null != D) {
            var a = new ArrayBuffer(1 + 2 * D.length),
                b = new DataView(a);
            b.setUint8(0, 0);
            for (var c = 0; c < D.length; ++c) b.setUint16(1 + 2 * c, D.charCodeAt(c), !0);
            m.send(a)
        }
    }

    function ra() {
        return null != m && m.readyState == m.OPEN
    }

    function B(a) {
        if (ra()) {
            var b = new ArrayBuffer(1);
            (new DataView(b)).setUint8(0, a);
            m.send(b)
        }
    }

    function Ba() {
        la();
        f.requestAnimationFrame(Ba)
    }

    function Aa() {
        q = f.innerWidth;
        r = f.innerHeight;
        ja.width = A.width = q;
        ja.height = A.height = r;
        la()
    }

    function Ka() {
        var a;
        a = 1 * Math.max(r / 1080, q / 1920);
        return a *= C
    }

    function Ua() {
        if (0 != l.length) {
            for (var a = 0, b = 0; b < l.length; b++) a += l[b].size;
            a = Math.pow(Math.min(64 / a, 1), .4) * Ka();
            h = (9 * h + a) / 10
        }
    }

    function la() {
        var a, b, c = +new Date;
        ++Va;
        I = +new Date;
        if (0 < l.length) {
            Ua();
            for (var d = a = b = 0; d < l.length; d++) l[d].updatePos(),
                b += l[d].x / l.length, a += l[d].y / l.length;
            N = b;
            O = a;
            P = h;
            s = (s + b) / 2;
            t = (t + a) / 2
        } else s = (29 * s + N) / 30, t = (29 * t + O) / 30, h = (9 * h + P * Ka()) / 10;
        Oa();
        ka();
        e.clearRect(0, 0, q, r);
        e.fillStyle = sa ? "#111111" : "#F2FBFF";
        e.fillRect(0, 0, q, r);
        e.save();
        e.strokeStyle = sa ? "#AAAAAA" : "#000000";
        e.globalAlpha = .2;
        e.scale(h, h);
        b = q / h;
        a = r / h;
        for (d = -.5 + (-s + b / 2) % 50; d < b; d += 50) e.beginPath(), e.moveTo(d, 0), e.lineTo(d, a), e.stroke();
        for (d = -.5 + (-t + a / 2) % 50; d < a; d += 50) e.beginPath(), e.moveTo(0, d), e.lineTo(b, d), e.stroke();
        e.restore();
        n.sort(function(a, b) {
            return a.size ==
            b.size ? a.id - b.id : a.size - b.size
        });
        e.save();
        e.translate(q / 2, r / 2);
        e.scale(h, h);
        e.translate(-s, -t);
        preRender();
        for (d = 0; d < G.length; d++) G[d].draw();
        for (d = 0; d < n.length; d++) n[d].draw();
        postRender();
        if (pa) {
            $ = (3 * $ + na) / 4;
            aa = (3 * aa + oa) / 4;
            e.save();
            e.strokeStyle = "#FFAAAA";
            e.lineWidth = 10;
            e.lineCap = "round";
            e.lineJoin = "round";
            e.globalAlpha = .5;
            e.beginPath();
            for (d = 0; d < l.length; d++) e.moveTo(l[d].x, l[d].y), e.lineTo($, aa);
            e.stroke();
            e.restore()
        }
        e.restore();
        v && v.width && e.drawImage(v, q - v.width - 10, 10);
        H = Math.max(H, Wa());
        flushDrawPoints();
        0 != H && (null == fa && (fa = new ga(24,
            "#FFFFFF")), fa.setValue("Score: " + ~~(H / 100) + getScoreText()), a = fa.render(), b = a.width, e.globalAlpha = .2, e.fillStyle = "#000000", e.fillRect(10, r - 10 - 24 - 10, b + 10, 34), e.globalAlpha = 1, e.drawImage(a, 15, r - 10 - 24 - 5));
        Xa();
        c = +new Date - c;
        c > 1E3 / 60 ? x -= .01 : c < 1E3 / 65 && (x += .01);.4 > x && (x = .4);
        1 < x && (x = 1)
    }

    function Xa() {
        if (xa && ta.width) {
            var a = q / 5;
            e.drawImage(ta, 5, 5, a, a)
        }
    }

    function Wa() {
        for (var a = 0, b = 0; b < l.length; b++) a += l[b].nSize * l[b].nSize;
        return a
    }

    function Ga() {
        v = null;
        if (null != w || 0 != z.length)
            if (null != w || ha) {
                v = document.createElement("canvas");
                var a = v.getContext("2d"),
                    b = 60,
                    b = null == w ? b + 24 * z.length : b + 180,
                    c = Math.min(200, .3 * q) / 200;
                v.width = 200 * c;
                v.height = b * c;
                a.scale(c, c);
                a.globalAlpha = .4;
                a.fillStyle = "#000000";
                a.fillRect(0, 0, 200, b);
                a.globalAlpha = 1;
                a.fillStyle = "#FFFFFF";
                c = null;
                c = "Leaderboard";
                a.font = "30px Ubuntu";
                a.fillText(c, 100 - a.measureText(c).width / 2, 40);
                if (null == w)
                    for (a.font = "20px Ubuntu", b = 0; b < z.length; ++b) c = z[b].name || "An unnamed cell", ha || (c = "An unnamed cell"), -1 != E.indexOf(z[b].id) ? (l[0].name && (c = l[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle =
                        "#FFFFFF", c = b + 1 + ". " + c, a.fillText(c, 100 - a.measureText(c).width / 2, 70 + 24 * b);
                else
                    for (b = c = 0; b < w.length; ++b) angEnd = c + w[b] * Math.PI * 2, a.fillStyle = Ya[b + 1], a.beginPath(), a.moveTo(100, 140), a.arc(100, 140, 80, c, angEnd, !1), a.fill(), c = angEnd
            }
    }

    function Ha(a, b, c, d, e, f) {
        n.push(this);
        y[a] = this;
        this.id = a;
        this.ox = this.x = b;
        this.oy = this.y = c;
        this.oSize = this.size = d;
        this.color = e;
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(f)
    }

    function ga(a, b, c, d) {
        a && (this._size = a);
        b && (this._color = b);
        this._stroke = !!c;
        d && (this._strokeColor = d)
    }
    var F = f.location.protocol,
        Pa = "https:" == F;
    if ("agar.io" != f.location.hostname && "localhost" != f.location.hostname && "10.10.2.13" != f.location.hostname) f.location = F + "//agar.io/";
    else if (f.top != f) f.top.location = F + "//agar.io/";
    else {
        var ja, e, A, q, r, L = null,
            m = null,
            s = 0,
            t = 0,
            E = [],
            l = [],
            y = {},
            n = [],
            G = [],
            z = [],
            S = 0,
            T = 0,
            W = -1,
            X = -1,
            Va = 0,
            I = 0,
            D = null,
            ba = 0,
            ca = 0,
            da = 1E4,
            ea = 1E4,
            h = 1,
            u = null,
            La = !0,
            ha = !0,
            ua = !1,
            qa = !1,
            H = 0,
            sa = !1,
            Ma = !1,
            N = s = ~~((ba + da) / 2),
            O = t = ~~((ca + ea) / 2),
            P = 1,
            M = "",
            w = null,
            ia = !1,
            pa = !1,
            na = 0,
            oa = 0,
            $ = 0,
            aa = 0,
            Q = 0,
            Ya = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
            C = 1,
            xa = "ontouchstart" in f && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            ta = new Image;
        ta.src = "img/split.png";
        Q = document.createElement("canvas");
        if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == Q || null == Q.getContext || null == f.localStorage) alert("You browser does not support this game, we recommend you to use Firefox to play this");
        else {
            var Y = null;
            f.setNick = function(a) {
                Da();
                D = a;
                Fa();
                H = 0
            };
            f.setRegion = U;
            f.setSkins = function(a) {
                La = a
            };
            f.setNames = function(a) {
                ha = a
            };
            f.setDarkTheme = function(a) {
                sa = a
            };
            f.setColors = function(a) {
                ua = a
            };
            f.setShowMass = function(a) {
                Ma = a
            };
            f.spectate = function() {
                D = null;
                B(1);
                Da()
            };
            f.setGameMode = function(a) {
                a != M && (M = a, V())
            };
            null != f.localStorage && (null == f.localStorage.AB8 && (f.localStorage.AB8 = 0 + ~~(100 * Math.random())), Q = +f.localStorage.AB8, f.ABGroup = Q);
            g.get(F + "//gc.agar.io", function(a) {
                var b = a.split(" ");
                a = b[0];
                b = b[1] || ""; - 1 == "DE IL PL HU BR AT UA".split(" ").indexOf(a) && va.push("nazi"); - 1 == ["UA"].indexOf(a) && va.push("ussr");
                R.hasOwnProperty(a) && ("string" == typeof R[a] ? u || U(R[a]) : R[a].hasOwnProperty(b) && (u || U(R[a][b])))
            }, "text");
            setTimeout(function() {}, 3E5);
            var R = {
                AF: "JP-Tokyo",
                AX: "EU-London",
                AL: "EU-London",
                DZ: "EU-London",
                AS: "SG-Singapore",
                AD: "EU-London",
                AO: "EU-London",
                AI: "US-Atlanta",
                AG: "US-Atlanta",
                AR: "BR-Brazil",
                AM: "JP-Tokyo",
                AW: "US-Atlanta",
                AU: "SG-Singapore",
                AT: "EU-London",
                AZ: "JP-Tokyo",
                BS: "US-Atlanta",
                BH: "JP-Tokyo",
                BD: "JP-Tokyo",
                BB: "US-Atlanta",
                BY: "EU-London",
                BE: "EU-London",
                BZ: "US-Atlanta",
                BJ: "EU-London",
                BM: "US-Atlanta",
                BT: "JP-Tokyo",
                BO: "BR-Brazil",
                BQ: "US-Atlanta",
                BA: "EU-London",
                BW: "EU-London",
                BR: "BR-Brazil",
                IO: "JP-Tokyo",
                VG: "US-Atlanta",
                BN: "JP-Tokyo",
                BG: "EU-London",
                BF: "EU-London",
                BI: "EU-London",
                KH: "JP-Tokyo",
                CM: "EU-London",
                CA: "US-Atlanta",
                CV: "EU-London",
                KY: "US-Atlanta",
                CF: "EU-London",
                TD: "EU-London",
                CL: "BR-Brazil",
                CN: "CN-China",
                CX: "JP-Tokyo",
                CC: "JP-Tokyo",
                CO: "BR-Brazil",
                KM: "EU-London",
                CD: "EU-London",
                CG: "EU-London",
                CK: "SG-Singapore",
                CR: "US-Atlanta",
                CI: "EU-London",
                HR: "EU-London",
                CU: "US-Atlanta",
                CW: "US-Atlanta",
                CY: "JP-Tokyo",
                CZ: "EU-London",
                DK: "EU-London",
                DJ: "EU-London",
                DM: "US-Atlanta",
                DO: "US-Atlanta",
                EC: "BR-Brazil",
                EG: "EU-London",
                SV: "US-Atlanta",
                GQ: "EU-London",
                ER: "EU-London",
                EE: "EU-London",
                ET: "EU-London",
                FO: "EU-London",
                FK: "BR-Brazil",
                FJ: "SG-Singapore",
                FI: "EU-London",
                FR: "EU-London",
                GF: "BR-Brazil",
                PF: "SG-Singapore",
                GA: "EU-London",
                GM: "EU-London",
                GE: "JP-Tokyo",
                DE: "EU-London",
                GH: "EU-London",
                GI: "EU-London",
                GR: "EU-London",
                GL: "US-Atlanta",
                GD: "US-Atlanta",
                GP: "US-Atlanta",
                GU: "SG-Singapore",
                GT: "US-Atlanta",
                GG: "EU-London",
                GN: "EU-London",
                GW: "EU-London",
                GY: "BR-Brazil",
                HT: "US-Atlanta",
                VA: "EU-London",
                HN: "US-Atlanta",
                HK: "JP-Tokyo",
                HU: "EU-London",
                IS: "EU-London",
                IN: "JP-Tokyo",
                ID: "JP-Tokyo",
                IR: "JP-Tokyo",
                IQ: "JP-Tokyo",
                IE: "EU-London",
                IM: "EU-London",
                IL: "JP-Tokyo",
                IT: "EU-London",
                JM: "US-Atlanta",
                JP: "JP-Tokyo",
                JE: "EU-London",
                JO: "JP-Tokyo",
                KZ: "JP-Tokyo",
                KE: "EU-London",
                KI: "SG-Singapore",
                KP: "JP-Tokyo",
                KR: "JP-Tokyo",
                KW: "JP-Tokyo",
                KG: "JP-Tokyo",
                LA: "JP-Tokyo",
                LV: "EU-London",
                LB: "JP-Tokyo",
                LS: "EU-London",
                LR: "EU-London",
                LY: "EU-London",
                LI: "EU-London",
                LT: "EU-London",
                LU: "EU-London",
                MO: "JP-Tokyo",
                MK: "EU-London",
                MG: "EU-London",
                MW: "EU-London",
                MY: "JP-Tokyo",
                MV: "JP-Tokyo",
                ML: "EU-London",
                MT: "EU-London",
                MH: "SG-Singapore",
                MQ: "US-Atlanta",
                MR: "EU-London",
                MU: "EU-London",
                YT: "EU-London",
                MX: "US-Atlanta",
                FM: "SG-Singapore",
                MD: "EU-London",
                MC: "EU-London",
                MN: "JP-Tokyo",
                ME: "EU-London",
                MS: "US-Atlanta",
                MA: "EU-London",
                MZ: "EU-London",
                MM: "JP-Tokyo",
                NA: "EU-London",
                NR: "SG-Singapore",
                NP: "JP-Tokyo",
                NL: "EU-London",
                NC: "SG-Singapore",
                NZ: "SG-Singapore",
                NI: "US-Atlanta",
                NE: "EU-London",
                NG: "EU-London",
                NU: "SG-Singapore",
                NF: "SG-Singapore",
                MP: "SG-Singapore",
                NO: "EU-London",
                OM: "JP-Tokyo",
                PK: "JP-Tokyo",
                PW: "SG-Singapore",
                PS: "JP-Tokyo",
                PA: "US-Atlanta",
                PG: "SG-Singapore",
                PY: "BR-Brazil",
                PE: "BR-Brazil",
                PH: "JP-Tokyo",
                PN: "SG-Singapore",
                PL: "EU-London",
                PT: "EU-London",
                PR: "US-Atlanta",
                QA: "JP-Tokyo",
                RE: "EU-London",
                RO: "EU-London",
                RU: "RU-Russia",
                RW: "EU-London",
                BL: "US-Atlanta",
                SH: "EU-London",
                KN: "US-Atlanta",
                LC: "US-Atlanta",
                MF: "US-Atlanta",
                PM: "US-Atlanta",
                VC: "US-Atlanta",
                WS: "SG-Singapore",
                SM: "EU-London",
                ST: "EU-London",
                SA: "EU-London",
                SN: "EU-London",
                RS: "EU-London",
                SC: "EU-London",
                SL: "EU-London",
                SG: "JP-Tokyo",
                SX: "US-Atlanta",
                SK: "EU-London",
                SI: "EU-London",
                SB: "SG-Singapore",
                SO: "EU-London",
                ZA: "EU-London",
                SS: "EU-London",
                ES: "EU-London",
                LK: "JP-Tokyo",
                SD: "EU-London",
                SR: "BR-Brazil",
                SJ: "EU-London",
                SZ: "EU-London",
                SE: "EU-London",
                CH: "EU-London",
                SY: "EU-London",
                TW: "JP-Tokyo",
                TJ: "JP-Tokyo",
                TZ: "EU-London",
                TH: "JP-Tokyo",
                TL: "JP-Tokyo",
                TG: "EU-London",
                TK: "SG-Singapore",
                TO: "SG-Singapore",
                TT: "US-Atlanta",
                TN: "EU-London",
                TR: "TK-Turkey",
                TM: "JP-Tokyo",
                TC: "US-Atlanta",
                TV: "SG-Singapore",
                UG: "EU-London",
                UA: "EU-London",
                AE: "EU-London",
                GB: "EU-London",
                US: {
                    AL: "US-Atlanta",
                    AK: "US-Fremont",
                    AZ: "US-Fremont",
                    AR: "US-Atlanta",
                    CA: "US-Fremont",
                    CO: "US-Fremont",
                    CT: "US-Atlanta",
                    DE: "US-Atlanta",
                    FL: "US-Atlanta",
                    GA: "US-Atlanta",
                    HI: "US-Fremont",
                    ID: "US-Fremont",
                    IL: "US-Atlanta",
                    IN: "US-Atlanta",
                    IA: "US-Atlanta",
                    KS: "US-Atlanta",
                    KY: "US-Atlanta",
                    LA: "US-Atlanta",
                    ME: "US-Atlanta",
                    MD: "US-Atlanta",
                    MA: "US-Atlanta",
                    MI: "US-Atlanta",
                    MN: "US-Fremont",
                    MS: "US-Atlanta",
                    MO: "US-Atlanta",
                    MT: "US-Fremont",
                    NE: "US-Fremont",
                    NV: "US-Fremont",
                    NH: "US-Atlanta",
                    NJ: "US-Atlanta",
                    NM: "US-Fremont",
                    NY: "US-Atlanta",
                    NC: "US-Atlanta",
                    ND: "US-Fremont",
                    OH: "US-Atlanta",
                    OK: "US-Atlanta",
                    OR: "US-Fremont",
                    PA: "US-Atlanta",
                    RI: "US-Atlanta",
                    SC: "US-Atlanta",
                    SD: "US-Fremont",
                    TN: "US-Atlanta",
                    TX: "US-Atlanta",
                    UT: "US-Fremont",
                    VT: "US-Atlanta",
                    VA: "US-Atlanta",
                    WA: "US-Fremont",
                    WV: "US-Atlanta",
                    WI: "US-Atlanta",
                    WY: "US-Fremont",
                    DC: "US-Atlanta",
                    AS: "US-Atlanta",
                    GU: "US-Atlanta",
                    MP: "US-Atlanta",
                    PR: "US-Atlanta",
                    UM: "US-Atlanta",
                    VI: "US-Atlanta"
                },
                UM: "SG-Singapore",
                VI: "US-Atlanta",
                UY: "BR-Brazil",
                UZ: "JP-Tokyo",
                VU: "SG-Singapore",
                VE: "BR-Brazil",
                VN: "JP-Tokyo",
                WF: "SG-Singapore",
                EH: "EU-London",
                YE: "JP-Tokyo",
                ZM: "EU-London",
                ZW: "EU-London"
            };
            f.connect = Ea;
            var Z = 500,
                Ia = -1,
                Ja = -1,
                v = null,
                x = 1,
                fa = null,
                J = {},
                va = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;hitler;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal".split(";"),
                Za = ["8", "nasa"],
                $a = ["m'blob"];
            Ha.prototype = {
                id: 0,
                points: null,
                pointsAcc: null,
                name: null,
                nameCache: null,
                sizeCache: null,
                x: 0,
                y: 0,
                size: 0,
                ox: 0,
                oy: 0,
                oSize: 0,
                nx: 0,
                ny: 0,
                nSize: 0,
                updateTime: 0,
                updateCode: 0,
                drawTime: 0,
                destroyed: !1,
                isVirus: !1,
                isAgitated: !1,
                wasSimpleDrawing: !0,
                destroy: function() {
                    var a;
                    for (a = 0; a < n.length; a++)
                        if (n[a] == this) {
                            n.splice(a, 1);
                            break
                        }
                    delete y[this.id];
                    a = l.indexOf(this); - 1 != a && (qa = !0, l.splice(a, 1));
                    a = E.indexOf(this.id); - 1 != a && E.splice(a, 1);
                    this.destroyed = !0;
                    G.push(this)
                },
                getNameSize: function() {
                    return Math.max(~~(.3 * this.size), 24)
                },
                setName: function(a) {
                    if (this.name = a) null == this.nameCache ? this.nameCache = new ga(this.getNameSize(), "#FFFFFF", !0, "#000000") : this.nameCache.setSize(this.getNameSize()), this.nameCache.setValue(this.name)
                },
                createPoints: function() {
                    for (var a = this.getNumPoints(); this.points.length > a;) {
                        var b = ~~(Math.random() * this.points.length);
                        this.points.splice(b, 1);
                        this.pointsAcc.splice(b, 1)
                    }
                    0 == this.points.length && 0 < a && (this.points.push({
                        c: this,
                        v: this.size,
                        x: this.x,
                        y: this.y
                    }), this.pointsAcc.push(Math.random() - .5));
                    for (; this.points.length < a;) {
                        var b = ~~(Math.random() * this.points.length),
                            c = this.points[b];
                        this.points.splice(b, 0, {
                            c: this,
                            v: c.v,
                            x: c.x,
                            y: c.y
                        });
                        this.pointsAcc.splice(b, 0, this.pointsAcc[b])
                    }
                },
                getNumPoints: function() {
                    var a = 10;
                    20 > this.size && (a = 5);
                    this.isVirus && (a = 30);
                    return ~~Math.max(this.size * h * (this.isVirus ? Math.min(2 * x, 1) : x), a)
                },
                movePoints: function() {
                    this.createPoints();
                    for (var a = this.points, b = this.pointsAcc, c = a.length, d = 0; d < c; ++d) {
                        var e = b[(d - 1 + c) % c],
                            f = b[(d + 1) % c];
                        b[d] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
                        b[d] *= .7;
                        10 < b[d] && (b[d] = 10); - 10 > b[d] && (b[d] = -10);
                        b[d] = (e + f + 8 * b[d]) / 10
                    }
                    for (var h = this, d = 0; d < c; ++d) {
                        var g = a[d].v,
                            e = a[(d - 1 + c) % c].v,
                            f = a[(d + 1) % c].v;
                        if (15 < this.size && null != L) {
                            var l = !1,
                                m = a[d].x,
                                n = a[d].y;
                            L.retrieve2(m - 5, n - 5, 10, 10, function(a) {
                                a.c != h && 25 > (m - a.x) * (m - a.x) + (n - a.y) * (n - a.y) && (l = !0)
                            });
                            !l && (a[d].x < ba || a[d].y < ca || a[d].x > da || a[d].y > ea) && (l = !0);
                            l && (0 < b[d] && (b[d] = 0), b[d] -= 1)
                        }
                        g += b[d];
                        0 > g && (g = 0);
                        g = this.isAgitated ? (19 * g + this.size) / 20 : (12 * g + this.size) / 13;
                        a[d].v = (e + f + 8 * g) / 10;
                        e = 2 * Math.PI / c;
                        f = this.points[d].v;
                        this.isVirus && 0 == d % 2 && (f += 5);
                        a[d].x = this.x + Math.cos(e * d) * f;
                        a[d].y = this.y + Math.sin(e * d) * f
                    }
                },
                updatePos: function() {
                    var a;
                    a = (I - this.updateTime) / 120;
                    a = 0 > a ? 0 : 1 < a ? 1 : a;
                    var b = 0 > a ? 0 : 1 < a ? 1 : a;
                    this.getNameSize();
                    if (this.destroyed && 1 <= b) {
                        var c = G.indexOf(this); - 1 != c && G.splice(c, 1)
                    }
                    this.x = a * (this.nx - this.ox) + this.ox;
                    this.y = a * (this.ny - this.oy) + this.oy;
                    this.size = b * (this.nSize - this.oSize) + this.oSize;
                    return b
                },
                shouldRender: function() {
                    return this.x + this.size + 40 < s - q / 2 / h || this.y + this.size + 40 < t - r / 2 / h || this.x - this.size - 40 >
                    s + q / 2 / h || this.y - this.size - 40 > t + r / 2 / h ? !1 : !0
                },
                draw: function() {
                    if (this.shouldRender()) {
                        var a = !this.isVirus && !this.isAgitated && .35 > h;
                        if (this.wasSimpleDrawing && !a)
                            for (var b = 0; b < this.points.length; b++) this.points[b].v = this.size;
                        this.wasSimpleDrawing = a;
                        e.save();
                        this.drawTime = I;
                        b = this.updatePos();
                        this.destroyed && (e.globalAlpha *= 1 - b);
                        e.lineWidth = 10;
                        e.lineCap = "round";
                        e.lineJoin = this.isVirus ? "mitter" : "round";
                        ua ? (e.fillStyle = "#FFFFFF", e.strokeStyle = "#AAAAAA") : (e.fillStyle = this.color, e.strokeStyle = this.color);
                        if (a) e.beginPath(), e.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1);
                        else {
                            this.movePoints();
                            e.beginPath();
                            var c = this.getNumPoints();
                            e.moveTo(this.points[0].x, this.points[0].y);
                            for (b = 1; b <= c; ++b) {
                                var d = b % c;
                                e.lineTo(this.points[d].x, this.points[d].y)
                            }
                        }
                        e.closePath();
                        c = this.name.toLowerCase();
                        !this.isAgitated && La && "" == M ? -1 != va.indexOf(c) ? (J.hasOwnProperty(c) || (J[c] = new Image, J[c].src = "skins/" + c + ".png"), b = 0 != J[c].width && J[c].complete ? J[c] : null) : b = null : b = null;
                        b = (d = b) ? -1 != $a.indexOf(c) : !1;
                        a || e.stroke();
                        e.fill();
                        null == d || b || (e.save(), e.clip(), e.drawImage(d, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size), e.restore());
                        (ua || 15 < this.size) && !a && (e.strokeStyle = "#000000", e.globalAlpha *= .1, e.stroke());
                        e.globalAlpha = 1;
                        null != d && b && e.drawImage(d, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
                        b = -1 != l.indexOf(this);
                        a = ~~this.y;
                        if ((ha || b) && this.name && this.nameCache && (null == d || -1 == Za.indexOf(c))) {
                            d = this.nameCache;
                            d.setValue(this.name);
                            d.setSize(this.getNameSize());
                            c = Math.ceil(10 * h) / 10;
                            d.setScale(c);
                            var d = d.render(),
                                f = ~~(d.width / c),
                                g = ~~(d.height / c);
                            e.drawImage(d, ~~this.x - ~~(f / 2), a - ~~(g / 2), f, g);
                            a += d.height / 2 / c + 4
                        }
                        Ma && (b || 0 == l.length && (!this.isVirus || this.isAgitated) && 20 < this.size) && (null == this.sizeCache && (this.sizeCache = new ga(this.getNameSize() / 2, "#FFFFFF", !0, "#000000")), b = this.sizeCache, b.setSize(this.getNameSize() / 2), b.setValue(~~(this.size * this.size / 100)), c = Math.ceil(10 * h) / 10, b.setScale(c), d = b.render(), f = ~~(d.width / c), g = ~~(d.height / c), e.drawImage(d, ~~this.x - ~~(f / 2), a - ~~(g / 2), f, g));
                        e.restore()
                    }
                }
            };
            ga.prototype = {
                _value: "",
                _color: "#000000",
                _stroke: !1,
                _strokeColor: "#000000",
                _size: 16,
                _canvas: null,
                _ctx: null,
                _dirty: !1,
                _scale: 1,
                setSize: function(a) {
                    this._size != a && (this._size = a, this._dirty = !0)
                },
                setScale: function(a) {
                    this._scale != a && (this._scale = a, this._dirty = !0)
                },
                setColor: function(a) {
                    this._color != a && (this._color = a, this._dirty = !0)
                },
                setStroke: function(a) {
                    this._stroke != a && (this._stroke = a, this._dirty = !0)
                },
                setStrokeColor: function(a) {
                    this._strokeColor != a && (this._strokeColor = a, this._dirty = !0)
                },
                setValue: function(a) {
                    a != this._value && (this._value = a, this._dirty = !0)
                },
                render: function() {
                    null == this._canvas && (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"));
                    if (this._dirty) {
                        this._dirty = !1;
                        var a = this._canvas,
                            b = this._ctx,
                            c = this._value,
                            d = this._scale,
                            e = this._size,
                            f = e + "px Ubuntu";
                        b.font = f;
                        var g = b.measureText(c).width,
                            h = ~~(.2 * e);
                        a.width = (g + 6) * d;
                        a.height = (e + h) * d;
                        b.font = f;
                        b.scale(d, d);
                        b.globalAlpha = 1;
                        b.lineWidth = 3;
                        b.strokeStyle = this._strokeColor;
                        b.fillStyle = this._color;
                        this._stroke && b.strokeText(c, 3, e - h / 2);
                        b.fillText(c, 3, e - h / 2)
                    }
                    return this._canvas
                }
            };
            f.onload = Na
        }
    }
    /** PATCH BEGINS HERE **/
        // Inject lodash
    jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.9.3/lodash.min.js");

    /** Variable Fixups (as of v527)*/
    /* 2d canvas Context */

    function getContext() {
        return e;
    }

    /* setter for movement target X and Y */
    function setTarget(x, y) {
        var now = Date.now();
        // Rate limit commands to every 15 ms.
        if (now > lastSetTarget + 45) {
            W = x;
            X = y;
            lastSetTarget = now;
        }
    }

    /* Function that calculates target position when mouse is moved */
    var mouseMoveApplierFunc = 'ka';
    var buildRatioFunc = 'Ua';
    var processDataFunc = 'Oa';
    var Cell = Ha;

    function getUpdateTime() {
        return I;
    }

    function getRatio() {
        return h;
    }

    function setRatio(val) {
        h = val;
    }

    function getWidth() {
        return q;
    }

    function getHeight() {
        return r;
    }

    function getOffsetX() {
        return N;
    }

    function getOffsetY() {
        return O;
    }

    function isTeams() {
        return M == ':teams';
    }

    function getRawScore() {
        return H;
    }

    /** my variables */

    var dPoints = [];
    var samplePoints = [];
    var sampleHeads = [];
    var destroyed = [];
    var lastSampledSize = 0;
    var bestRound = 0;
    var bestTime = 0;
    var startTime = 0;
    var _ratio;
    var autoPilotX = -1;
    var autoPilotY = -1;
    var resolutionMultiplier = 1;
    var velocityToSizeRatios = {};
    var caches = {};
    var lastSetTarget = 0;
    var toggles = {
        drawDebug: false,
        autoPilot: false,
        colorEnemies: true
    };
    var state = {
        isThreatened: false
    };

    /** Debugging functions **/
    self.get = function(k) {
        return eval(k)
    };

    function set(k, v) {
        return eval(k + ' = ' + JSON.stringify(v))
    }

    function isCached(k) {
        return typeof caches[k] !== 'undefined';
    }

    function setCache(k, v) {
        caches[k] = v;
    }

    function getCache(k) {
        return (k in caches) ? caches[k] : undefined;
    }

    function clearCache() {
        caches = {};
    }

    function SamplePoint(pos) {
        this.pos = pos;
        this.risk = 0;
        this.next = null;
        this.children = [];
    }

    SamplePoint.prototype.draw = function (center) {
        drawPoint(this.pos.x + center.x, this.pos.y + center.y, calculateRiskColor(this.risk));
    };

    SamplePoint.prototype.updateRisk = function (me) {
        this.risk = calculateRisk(Vector(this.pos.x + me.x, this.pos.y + me.y), me);
    };

    SamplePoint.prototype.getChainRiskTotal = function () {
        // Chain tails are weighted less than chain heads.
        return this.risk
            + /*1/(this.children.length?this.children.length:1)
                **/ _.reduce(this.children, function(result, n) {return result + n.getChainRiskTotal();}, 0);
            //(this.next ? 0.75 * this.next.getChainRiskTotal() : 0);
    };

    function getMe() {
        return l;
    }

    function getOthers(includeDestroyed) {
        if (_.isUndefined(includeDestroyed)) {
            includeDestroyed = true;
        }
        if (includeDestroyed) {
        return n.concat(destroyed);
    }
        return n;
    }

    function preRender() {
        if (getMe().length) {
            var me = getBiggestMe();
            _.each(getOthers(), function (player) {
                if (player.originalColor === null) {
                    player.originalColor = player.color;
                }
                player.color = getEnemyColor(me, player);
            });
        }
    }

    function getScoreText() {
        return " Best: " + bestRound + " Best Time: " + (bestTime / 1000);
    }

    function getEnemyColor(me, player) {
        if (!toggles.colorEnemies) {
            return player.originalColor;
        }
        if (_.contains(getMe(), player)) {
            return "#666";
        }
        if (!me.isEnemy(player)) {
            return "#090";
        }
        if (player.isVirus || player.size < 20) return player.color;
        if (player.size / 2 > 1.1 * me.size) {
            return "#F00";
        } else if (player.size > 1.1 * me.size) {
            return "#FF0";
        } else if (player.size * 1.25 < me.size / 2) {
            return "#FCC";
        } else if (player.size * 1.25 < me.size) {
            return "#00F";
        } else {
            return "#0F0";
        }
    }

    function postRender() {
        if (getMe().length) {
            var me = getBiggestMe(), playerVel, meVel = me.getVelocity();
            _.each(getOthers(), function (player) {
                if ((!player.isVirus && player.size < 20) || isMe(player)) {
                    return;
                }

                drawLine(me.x, me.y, player.x, player.y, getEnemyColor(me, player), 3);
                playerVel = player.getVelocity();
                drawLine(player.x, player.y, player.x + playerVel.x, player.y + playerVel.y, '#000', 5);
            });

            // Draw velocity line
            drawLine(me.x, me.y, me.x + meVel.x, me.y + meVel.y, '#000', 5);
            findBestDirection();
            drawBestDirectionLine();
        }
    }

    function drawLine(x1, y1, x2, y2, color, width) {
        if (!toggles.drawDebug) return;
        var ctx = getContext();
        ctx.save();
        ctx.lineWidth = width || 1;
        ctx.strokeStyle = color || '#999';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }

    /**
     *
     * @returns Cell
     */
    function getBiggestMe() {
        var me;
        _.each(getMe(), function (m) {
            if (!me || m.nSize > me.nSize) me = m
        });
        return me;
    }

    function isMe(other) {
        return !(getMe().indexOf(other) === -1);
    }

    function drawPoint(x_1, y_1, drawColor) {
        var x1 = ((x_1 - getOffsetX()) * getRatio()) + getWidth() / 2;
        var y1 = ((y_1 - getOffsetY()) * getRatio()) + getHeight() / 2;
        dPoints.push([x1, y1, drawColor]);
    }

    function clearPoints() {
        dPoints = [];
    }

    function flushDrawPoints() {
        if (!toggles.drawDebug) {
            return;
        }
        var ctx = getContext();
        while (dPoints.length) {
            var pt = dPoints.pop();
            var radius = 10;

            ctx.beginPath();
            ctx.arc(pt[0], pt[1], radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = pt[2];

            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#003300';
            ctx.stroke();
        }
    }


    function createSamplePoints() {
        var numPoints = 3,
            me = getBiggestMe(),
            numHeads = 10,
            increment = (2 * Math.PI) / numHeads;
        if (!me) return;
        if (Math.abs(me.size - lastSampledSize) < 10) {
            return;
        }

        var resolution = me.size * 1.3 * resolutionMultiplier;
        samplePoints = [];
        sampleHeads = [];

        for (var angle = 0; angle < Math.PI * 2; angle += increment) {
            sampleHeads.push(createSamplePoint(1.6 * resolution, angle, increment, 2, numPoints));
        }
    }

    function createSamplePoint(distance, angle, increment, numChildren, ttl) {
        var pos = calculatePosition(angle, distance, Vector(0, 0)),
            point = new SamplePoint(pos);
        samplePoints.push(point);
        var startAngle = angle - increment / 3,
            childAngle;
        increment = increment / numChildren;
        distance *= 1.6;
        if (ttl > 1) {
            for (var i = 0; i < numChildren; i++) {
                childAngle = startAngle + i * increment;
                point.children.push(
                    createSamplePoint(
                        distance,
                        childAngle,
                        increment,
                        numChildren,
                        ttl - 1
                    )
                );
            }
        }
        return point;
    }

    function updateSamplePoints() {
        var me = getBiggestMe();
        if (!me) return;
        _.each(samplePoints, function (point) {
            point.updateRisk(me);
        });
    }

    function drawSamplePoints() {
        var me = getBiggestMe();
        if (!me) return;
        var mePos = Vector(me.x, me.y);
        _.each(samplePoints, function (point) {
            point.draw(mePos);
        });
    }

    function findBestDirection() {
        var bestRisk = null, v, me = getBiggestMe(),
            chainRiskTotal,
            newVel = Vector(0, 0),
            x = 0, y = 0;

        _.each(sampleHeads, function (head) {
            chainRiskTotal = head.getChainRiskTotal();
            v = [chainRiskTotal, head];
            newVel = newVel.add(head.pos.normalize().multiply(Vector(chainRiskTotal, chainRiskTotal)));
            if (bestRisk === null || bestRisk[0] < chainRiskTotal) {
                bestRisk = v;
            }
        });

        // This term will allow us to escape local minima by reducing sampling
        // resolution when the simulation is dithering over where to go.
        if (resolutionMultiplier > 1) {
            // Reduce resolution multiplier to 1 if it is above
            resolutionMultiplier -= (resolutionMultiplier - 1) / 60;
            // force recreation of sample points
            // TODO: use dirty flag
            lastSampledSize = 0;
        }
        var autoPilotMagnitude = newVel.magnitude();
        if (autoPilotMagnitude < 1) {
            resolutionMultiplier = Math.min(10, resolutionMultiplier * 2);
            // force recreation of sample points
            // TODO: use dirty flag
            lastSampledSize = 0;
        }

        // newVel is the vector showing the direction of the risk/reward gradient at the location of
        // the player

        // Scale the vector to the approximate maximum achievable velocity of the player
        newVel = scaleMagnitudeTo(newVel, me.getMaxVelocity());

        me.bestDirection = newVel.clone();

        // Add the difference between the current velocity vector and the desired velocity vector
        // to the desired velocity vector - this will make the steering "overcorrect" and get
        // on target faster.
        //newVel = newVel.add(newVel.subtract(me.getVelocity()));

        // Re-scale the final steering vector to slightly more than the maximum achievable
        // velocity of the player.
        newVel = scaleMagnitudeTo(newVel, me.getMaxVelocity() * 1.1);

        // Set your course for the Alderaan system.
        autoPilotX = me.x + newVel.x;
        autoPilotY = me.y + newVel.y;
    }

    /**
     * scale a vector so its magnitude equals mag
     * @param vec
     * @param mag
     */
    function scaleMagnitudeTo(vec, mag) {
        var factor = mag / vec.magnitude();
        return vec.multiply(Vector(factor, factor));
    }

    function drawBestDirectionLine() {
        var me = getBiggestMe(), myBestDirection = me.getBestDirection();
        drawLine(me.x, me.y, autoPilotX, autoPilotY, '#0C0', 5);
        drawLine(me.x, me.y, W, X, '#F3C', 5);
        drawLine(me.x, me.y, myBestDirection.x + me.x, myBestDirection.y + me.y, '#C0C', 5);
    }

    function calculatePosition(angle, distance, center) {
        return center.add(Vector(Math.cos(angle), Math.sin(angle)).multiply(Vector(distance, distance)));
    }

    function getRiskConstant(me, player) {
        if (!me.isEnemy(player)) {
            // In team mode, we want to subtly avoid teammates.
            return -0.5;
        }
        var relativeSize = me.size / player.size;
        if (player.name == "ima bot lol") {
            return -50;
        }

        // Special handling for viruses
        if (player.isVirus) {
            if (relativeSize > 0.9) {
                // Bigs can have a lot of risk from viruses
                return -10 * relativeSize;
            }
            // Small can like being near viruses
            return state.threatened ? 1 : 0;
        }

        /*if (player.size < 20) {
            // Calculate risk constant for foods.
            // We want to eat foods that are close by more than far away foods.
            // This equation takes that preference into account.
            //return 1 + Math.max(Math.min(2, (me.size * (2 / log10(me.size))) / distance), 0);
            return 1 / relativeSize;
        }*/

        return getRiskConstantForRelativeSize(relativeSize);
    }

    function getRiskConstantForRelativeSize(relativeSize) {
        // TODO: reimplement juice for splitting
        /*if (relativeSize >= 2.5) {
         // I can split and still eat them
         return 1 / relativeSize;
         }*/
        if (relativeSize >= 1.25) {
            // I can absorb
            return 1 / relativeSize;
        }
        if (relativeSize >= 0.85) {
            // No risk
            return 0;
        }
        if (relativeSize >= 0.5) {
            // I am in danger of being absorbed
            return -2.5;
        }

        if (relativeSize >= 0.2) {
            // They can (and want to) split and eat me!
        return -3.5;
        }
        // blobs that are huge in comparison to me are not that dangerous.
        return -1;
    }

    function log10(v) {
        return Math.log(v) / Math.LN10;
    }

    /**
     *
     * @param position
     * @param me
     * @returns {*}
     */
    function calculateRisk(position, me) {
        var risk = getSideAndCornerRisk(position, me.size),
            Cr = 0,
            intersectDistance = 0,
            addedRisk = 0,
            power = 0,
            otherPos,
            // deltaTToPoint = amount of time it would take for player to reach this position at full velocity
            deltaTToPoint = me.getDeltaTForPosition(position),
            projectedDistance,
            numerator, denominator,
            absoluteRelativeSize, meVec = Vector(me.nx, me.ny);

        _.each(getOthers(), function (other) {
            if (isMe(other)) {
                return;
            }

            // Extrapolate other's position forward by deltaTToPoint,
            // assuming they continue moving in their current direction
            // TODO incorporate dv/dt as well
            // The 0.75 term here is to compensate for dv/dt - a bad fudge
            otherPos = other.getProjectedPosition(deltaTToPoint * 0.75);

            projectedDistance = position.distance(otherPos);

            // Give ourselves a bit of wiggle room in the intersect distance
            intersectDistance = (me.size / 2 + other.size / 2) * 1.1;

            // This constant makes it so that safety is preferred over food, but hunting behavior in
            // a safe environment is still very effective.
            power = (me.size > other.size) ? 1 : 2;


            Cr = getRiskConstant(me, other);
            if (Cr == 0) {
                return 0;
            }
            absoluteRelativeSize = Math.max(me.size, other.size) / Math.min(me.size, other.size);
            if (me.size <= other.size)
                absoluteRelativeSize *= absoluteRelativeSize;


            numerator = (Cr * Math.PI * absoluteRelativeSize);
            denominator = (Math.abs(Cr) > 0
                && lineSegmentIntersectsCircleVolume(meVec, position, otherPos, other.nSize / 2))
                ? 1
                : (1 + Math.pow(Math.max(0, projectedDistance - intersectDistance), 0.7));
            addedRisk = numerator / denominator;

//            addedRisk = (Cr * other.size) / (1 + Math.max(0, projectedDistance - other.size / 2 - me.size / 2));

            // Viruses that offer shelter should be favorable, but not too favorable...
            if (other.isVirus) {
                addedRisk = Math.min(2, addedRisk)
            }
            risk += addedRisk;
        });
        return risk;
    }

    function getSideAndCornerRisk(position, size) {
        var maxCoord = 11200, mco2 = maxCoord / 2,
            xDistFromSide = Math.min(position.x, maxCoord - position.x) - size / 2,
            yDistFromSide = Math.min(position.y, maxCoord - position.y) - size / 2,
            dangerZone = 400;

        return -1 * ((dangerZone / Math.max(dangerZone / 10, xDistFromSide + 1) + dangerZone / Math.max(dangerZone / 10, yDistFromSide + 1)))
    }

    function calculateRiskColor(risk) {
        if (risk < 0.25 && risk > -0.25) {
            return '#FFF';
        }
        var green = false;
        if (risk > 0) {
            green = true;
        }
        risk = parseInt(254 - Math.min(254, 15 * Math.abs(risk))).toString(16);
        if (green) {
            return '#' + risk + 'FF' + risk;
        }
        return '#' + 'FF' + risk + risk;
    }

    function forceRatio() {
        if (typeof _ratio == 'number') {
            setRatio(_ratio);
        }
    }

    function startAI() {
        startTime = Date.now();
        clearCache();
        setNick("ima bot lol");
    }

    function updateAI() {
        var me = getBiggestMe();
        if (!me) {
            if (toggles.autoPilot) {
                startAI();
            }
            return;
        }
        if (startTime) {
            var time = Date.now() - startTime;
            if (time > bestTime)
                bestTime = time;
        }
        if (~~(getRawScore() / 100) > bestRound) {
            bestRound = ~~(getRawScore() / 100);
        }

        updateDestroyed();

        // TODO calculate angle between threat's velocity vector and the vector pointing to me
        // If headed towards me, i'm threatened
        state.threatened = calculateRisk(Vector(me.x, me.y), me) < -1.5;

        createSamplePoints();
        updateSamplePoints();
        drawSamplePoints();
    }

    /**
     * determines if a line segment denoted by points a, b intersects a
     * circular volume defined by center c radius r.
     * @param a Point 1 defining line segment
     * @param b Point 2 defining line segment
     * @param c Center of circle
     * @param r Radius of circle
     * @returns {boolean}
     */
    function lineSegmentIntersectsCircleVolume(a, b, c, r) {
        var ac = a.distance(c);
        if (ac <= r || b.distance(c) <= r) {
            // If either point is inside the circle, the line intersects.
            // Even if both points are inside the circle, it intersects the volume.
            return true;
        }

        // Shift coordinate system so center of circle is defined as (0, 0)
        var x1 = a.x - c.x,
            x2 = b.x - c.x,
            y1 = a.y - c.y,
            y2 = b.y - c.y;

        // use formula given at http://mathworld.wolfram.com/Circle-LineIntersection.html
        // to determine if an intersection exists on the infinite line defined by p1 -> p2
        var dx = x2 - x1,
            dy = y2 - y1,
            dr2 = dx * dx + dy * dy,
            D = x1 * y2 - x2 * y1,
            intersects = r * r * dr2 - D * D >= 0;

        if (!intersects) {
            return false;
        }

        // Final logic
        // the infinite line intersects, but the line segment may not.
        // Determine if the angle <acb is less than the angle formed by
        // a tangent line from a, with point c as the vertex
        var t = Math.acos(r / ac),
            p = angleBetweenVectors(Vector(x1, y1), Vector(x2, y2));

        return p > t;
    }

    function angleBetweenVectors(a, b) {
        return Math.acos(a.dot(b) / (a.magnitude() * b.magnitude()));
    }

    // Destroyed cells persist for 10 seconds
    var destroyedTtl = 1E4;
    Cell.prototype.destroyedTime = 0;
    Cell.origSize = 0;
    Cell.prototype.destroyOld = Cell.prototype.destroy;
    Cell.prototype.destroy = function() {
        if (!_.contains(destroyed, this)) {
            destroyed.push(this);
            this.destroyedTime = Date.now();
            this.origSize = this.size;
        }
        this.destroyOld();
    };

    function updateDestroyed() {
        var toRemove = [],
            now = Date.now(),
            me = getBiggestMe(),
            liveOthers = _.pluck(getOthers(false), 'id');

        _.each(destroyed, function(cell) {
            var elapsed = now - cell.destroyedTime;
            if (!cell.destroyed || elapsed > destroyedTtl || _.contains(liveOthers, cell.id)) {
                toRemove.push(cell);
                return;
            }

            // Size of cell gradually diminishes over time.
            cell.size = cell.origSize * ((destroyedTtl - elapsed) / destroyedTtl);

            // If size of remembered cell gets less than my size, forget it.
            // We only need this memory for enemies, not food.
            if (cell.size < me.size * 1.1) {
                toRemove.push(cell);
            }
        });

        destroyed = _.difference(destroyed, toRemove);
    }

    // Cell velocity tracking
    Cell.prototype.bestDirection = null;
    Cell.prototype.pastPositions = null;
    Cell.prototype.vel = null;
    Cell.prototype.lastUpdateTime = 0;
    Cell.prototype.oldUpdatePos = Cell.prototype.updatePos;
    Cell.prototype.getBestDirection = function() {
        if (this.bestDirection instanceof Vector) {
            return this.bestDirection;
        }
        return Vector(0, 0);
    };
    Cell.prototype.getVelocity = function() {
        if (!(this.vel instanceof Vector)) {
            this.vel = Vector(0, 0);
        }

        return this.vel;
    };
    Cell.prototype.updatePos = function() {
        this.oldUpdatePos();
        if (this.isVirus || this.size < 20 || this.updateTime === this.lastUpdateTime) return;
        if (!_.isArray(this.pastPositions)) {
            this.pastPositions = [];
        }
        this.pastPositions.push([Vector(this.nx, this.ny), this.updateTime]);
        this.lastUpdateTime = this.updateTime;
        if (this.pastPositions.length > 10) {
            this.pastPositions.shift();
        }
        var vel = Vector(0, 0);
        var c = this,
            pos = null,
            t1, dt;
        _.each(this.pastPositions, function(p) {
            if (pos === null) {
                pos = p[0];
                t1 = p[1];
                return;
            }

            // Get delta t and convert to seconds
            dt = (p[1] - t1) / 1000;
            vel = vel.add(p[0].subtract(pos).divide(Vector(dt, dt)));
            /*vel.x += (p[0].x - pos.x) / dt;
            vel.y += (p[0].y - pos.y) / dt;*/
            pos = p[0];
            t1 = p[1];
        });
        if (this.pastPositions.length > 1) {
            vel = vel.divide(Vector(this.pastPositions.length - 1, this.pastPositions.length - 1));
            /*vel.x /= this.pastPositions.length - 1;
            vel.y /= this.pastPositions.length - 1;*/
        }
        this.vel = vel;
    };

    /**
     * Compute maximum velocity for this cell's size
     * @returns {number}
     */
    Cell.prototype.getMaxVelocity = function () {
        // This is obtained by plotting size vs velocity in excel, removing outliers, and applying a power trendline.
        return 2045.9 * Math.pow(this.size, -0.409);
    };

    /**
     * Compute change in time required to reach position given by [x,y]
     * @param vec
     * @returns {number}
     */
    Cell.prototype.getDeltaTForPosition = function(vec) {
        return Vector(this.x, this.y).distance(vec) / this.getMaxVelocity();
    };

    /**
     * Given known position, velocity and acceleration, project the cell's velocity after a delta time of
     * t.
     * @param {number} t time
     */
    Cell.prototype.getProjectedPosition = function(t) {
        return Vector(this.x, this.y).add(this.getVelocity().multiply(Vector(t, t)));
    };

    Cell.prototype.originalColor = null;
    Cell.prototype.isEnemy = function(other) {
        if (!isTeams()) return true;
        var cacheKey = 'isEnemy.' + this.id + '.' + other.id,
            cached;

        if (typeof (cached = getCache(cacheKey)) !== 'undefined') {
            return cached;
        }
        if (other.originalColor === null || this.originalColor === null || other.size < 20) {
            return true;
        }
        var orgb = other.getOriginalRGB(),
            rgb = this.getOriginalRGB(),
            e = Math.abs(orgb[0] - rgb[0]) +
                Math.abs(orgb[1] - rgb[1]) +
                Math.abs(orgb[2] - rgb[2]) > 150; // 150 seems reasonable...
        setCache(cacheKey, e);
        return e;
    };

    Cell.prototype.getOriginalRGB = function() {
        var r, g, b;
        r = g = b = '00';
        if (this.originalColor === null) {
            return [0, 0, 0];
        }
        if (this.originalColor.length == 4) {
            r = this.originalColor.substr(1,1);
            r = r + r;
            g = this.originalColor.substr(2,1);
            g = g + g;
            b = this.originalColor.substr(3,1);
            b = b + b;
        } else if (this.originalColor.length == 7) {
            r = this.originalColor.substr(1,2);
            g = this.originalColor.substr(3,2);
            b = this.originalColor.substr(5,2);
        }
        return [
            parseInt(r, 16),
            parseInt(g, 16),
            parseInt(b, 16)
        ]
    };

    self.addEventListener('keydown', function (e) {
        if (!(68 != e.keyCode)) {
            toggles.drawDebug = !toggles.drawDebug;
        }
        if (!(84 != e.keyCode)) {
            setGameMode(":teams");
        }
        if (!(65 != e.keyCode)) {
            toggles.autoPilot = !toggles.autoPilot;
        }
        if (!(67 != e.keyCode)) {
            toggles.colorEnemies = !toggles.colorEnemies;
        }
    }, false);

    self.onmousewheel = function (event) {
        if (!_ratio) {
            _ratio = 1;
        }
        if (event.wheelDelta < 0) {
            _ratio *= 0.9;
        } else if (event.wheelDelta > 0) {
            _ratio *= 1.1;
        }
        event.preventDefault();
    };

    var originalMouseMoveApplier = get(mouseMoveApplierFunc);
    var patchedMouseMoveApplier = function () {
        if (!toggles.autoPilot) {
            originalMouseMoveApplier();
        } else {
            setTarget(autoPilotX, autoPilotY);
        }
    };
    eval(mouseMoveApplierFunc + ' = patchedMouseMoveApplier');

    var originalBuildRatioFunc = get(buildRatioFunc);
    var patchedBuildRatioFunc = function () {
        originalBuildRatioFunc();
        forceRatio();
    };
    eval(buildRatioFunc + ' = patchedBuildRatioFunc');

    var originalProcessDataFunc = get(processDataFunc);
    var patchedProcessDataFunc = function () {
        originalProcessDataFunc();
        clearPoints();
        updateAI();
    };
    eval(processDataFunc + ' = patchedProcessDataFunc');

    var originalSetNick = setNick;
    window.setNick = function(a) {
        originalSetNick(a);
        clearCache();
    };

})(window, jQuery);
