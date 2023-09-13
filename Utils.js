//Returns a Promise with a timeout. Has to be awaited to actually sleep
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

//Random float in range, minimum is inclusive and maximum is exclusive
function randomRange(min = 0, max = 1) {
    return (Math.random() * max) - min;
}

//Random integer in range, minimum is inclusive and maximum is exclusive
function randomRangeInt(min = 0, max = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function randomColor() {
    return '#' + ((Math.random() * 0xFFFFFF) | 0).toString(16).padStart(6, '0');
}

function clamp(val, min = 0, max = 1) {
    return Math.min(Math.max(val, min), max)
}

function highestInArray(arr) {
  return arr.length === 0 ? null : Math.max(...arr);
}

function normalizeArray(arr) {
  const highest = highestInArray(arr);

  return arr.map(item => item / highest);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function now() {
  return new Date().valueOf();
}

function inRange(val, min, max) {
  return val >= min && val <= max;
}

function lerp(a, b, alpha) {
  return a + alpha * (b — a);
}

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(radians) {
  return radians * (180 / Math.PI);
}

function sqrMagnitude(x1, y1, x2, y2) {
  const dx = x2 — x1;
  const dy = y2 — y1;
  return dx * dx + dy * dy;
}

function distance(x1, y1, x2, y2) {
  const dx = x2 — x1;
  const dy = y2 — y1;
  return Math.sqrt(dx * dx + dy * dy);
}

function haversineDistance(lat1, lon1, lat2, lon2, unit = "km") {
    const R = {
        km: 6371,
        m: 6371000,
        mi: 3959,
        nmi: 3440,
        yd: 1093611,
    };
    
    const latDif = degToRad(lat2 - lat1) / 2;
    const lonDif = degToRad(lon2 - lon1) / 2;

    lat1 = degToRad(lat1);
    lat2 = degToRad(lat2);

    const a = Math.sin(latDif) * Math.sin(latDif) + Math.sin(lonDif) * Math.sin(lonDif) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let distance = R[unit] * c;

    return distance;
}

function hexToRGB(hex) {
    return { r: (hex >> 16) & 0xff, g: (hex >> 8) & 0xff, b: hex & 0xff };
};

function rgbToHex(r, g, b) {
    r = clamp(r, 0, 255).toString(16).padStart(2, '0');
    g = clamp(g, 0, 255).toString(16).padStart(2, '0');
    b = clamp(b, 0, 255).toString(16).padStart(2, '0');

    return `#${r}${g}${b}`.toUpperCase();
}

function colorLerp(a, b, alpha) {
    a = a.startsWith("#") ? a : `#${a}`;
    b = b.startsWith("#") ? b : `#${b}`;

    const { r: ar, g: ag, b: ab } = hexToRGB(parseInt(a.replace("#", ""), 16));
    const { r: br, g: bg, b: bb } = hexToRGB(parseInt(b.replace("#", ""), 16));

    const rr = ar + alpha * (br - ar);
    const rg = ag + alpha * (bg - ag);
    const rb = ab + alpha * (bb - ab);

    return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1).toUpperCase()}`;
}

function toData(str, dataType = "text/plain") {
  return 'data:' + dataType + ';base64,' + btoa(str.replace(/\n/g, '\r\n'));
}
