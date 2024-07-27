<!DOCTYPE html>
<html>
<head>
    <title>Dynamic World Map with Paper.js</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js"></script>
    <style>
        canvas {
            width: 100%;
            height: 100vh;
            background-color: #f3f3f3;
        }
    </style>
</head>
<body>
<canvas id="world-map" resize></canvas>

<script type="text/paperscript" canvas="world-map">
    var countries = [
        { name: 'Country1', path: 'M 100,100 L 200,100 L 200,200 L 100,200 Z', progress: 70 },
        { name: 'Country2', path: 'M 250,100 L 350,100 L 350,200 L 250,200 Z', progress: 50 },
        { name: 'Country3', path: 'M 350,100 L 450,100 L 550,200 L 650,200 Z', progress: 90 },
        // Add more countries here
    ];

    // Function to get color based on progress
    function getColor(progress) {
        return progress > 80 ? 'green' :
            progress > 60 ? 'yellow' :
                progress > 40 ? 'orange' : 'red';
    }

    // Draw countries
    countries.forEach(function(country) {
        var path = new Path(country.path);
        path.fillColor = getColor(country.progress);
        path.onClick = function(event) {
            alert(country.name + ' Progress: ' + country.progress + '%');
        };
    });


    // Function to update country progress
    function updateCountryProgress(countryName, newProgress) {
        countries.forEach(function(country) {
            if (country.name === countryName) {
                country.progress = newProgress;
                var path = project.activeLayer.children[countryName];
                if (path) {
                    path.fillColor = getColor(newProgress);
                }
            }
        });
    }

    // Example: Update progress for Country1
    updateCountryProgress('Country1', 85);

    // Adding hover effects
    countries.forEach(function(country) {
        var path = new Path(country.path);
        path.fillColor = getColor(country.progress);
        path.name = country.name;
        path.onMouseEnter = function(event) {
            this.fillColor = 'blue';
        };
        path.onMouseLeave = function(event) {
            this.fillColor = getColor(country.progress);
        };
        path.onClick = function(event) {
            alert(country.name + ' Progress: ' + country.progress + '%');
        };
    });
</script>

</body>
</html>
