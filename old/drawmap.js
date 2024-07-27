// Setup Paper.js
paper.install(window);
window.onload = function() {
    paper.setup('myCanvas');

    const mapWidth = view.size.width;
    const mapHeight = view.size.height;

    function generateContinent(center, radius, segments) {
        let path = new Path();
        path.fillColor = 'green';

        let points = [];
        for (let i = 0; i < segments; i++) {
            let angle = (360 / segments) * i;
            let delta = new Point({
                length: radius * (Math.random() * 0.5 + 0.75),
                angle: angle
            });
            points.push(center + delta);
        }

        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            let nextPoint = points[(i + 1) % points.length];
            let handleIn = (points[i] - center).rotate(90) * 0.2;
            let handleOut = (points[(i + 1) % points.length] - center).rotate(-90) * 0.2;

            if (i === 0) {
                path.add(point);
            }
            path.cubicCurveTo(point + handleOut, nextPoint - handleIn, nextPoint);
        }

        path.closed = true;
        path.smooth();
        return path;
    }

    function drawSea() {
        let sea = new Path.Rectangle({
            point: [0, 0],
            size: [mapWidth, mapHeight],
            fillColor: 'blue'
        });
        return sea;
    }

    function createMap() {
        drawSea();
        let center = new Point(mapWidth / 2, mapHeight / 2);
        let radius = Math.min(mapWidth, mapHeight) / 3;
        generateContinent(center, radius, 10);
    }

    createMap();
};
