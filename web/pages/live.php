    <style>
        #container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            margin: 20px;
        }
        #video, #canvas {
            width: 45%;
            border: 1px solid black;
        }
        #output {
            margin-top: 20px;
        }
    </style>
    <h1>Enhanced Book Cover Recognition</h1>
    <div id="container">
        <video id="video" width="1280" height="720" autoplay></video>
        <button id="capture">Capture Photo</button>
        <canvas id="canvas" width="1280" height="720"></canvas>
    </div>
    <button id="capture">Capture and Recognize Book Cover</button>
    <div id="output"></div>

    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>
    <script src="https://cdn.jsdelivr.net/npm/tesseract.js@2"></script>
 <script src="/js/live.js"></script>
