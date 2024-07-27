<style>
    /* styles.css */

    body {
        font-family: Arial, sans-serif;
    }

    button {
        padding: 10px 20px;
        margin: 10px;
    }

    .popup {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        justify-content: center;
        align-items: center;
    }

    .popup-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        position: relative;
        max-width: 90%;
        max-height: 90%;
        overflow: auto;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        cursor: pointer;
    }

    #pdfCanvas {
        width: 100%;
        height: auto;
    }

    .navigation {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

</style>
<button id="openPopup">Read eBook</button>

<div id="ebookPopup" class="popup">
    <div class="popup-content">
        <span id="closePopup" class="close">&times;</span>
        <canvas id="pdfCanvas"></canvas>
        <div class="navigation">
            <button id="prevPage">Previous</button>
            <span id="pageNum"></span> / <span id="pageCount"></span>
            <button id="nextPage">Next</button>
        </div>
    </div>
</div>

<script>

  // script.js

  document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('ebookPopup').style.display = 'flex';
    renderPDF('/pdf/AIwithPython.pdf'); // Replace with the path to your PDF
  });

  document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('ebookPopup').style.display = 'none';
  });

  let pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 1.5,
    canvas = document.getElementById('pdfCanvas'),
    ctx = canvas.getContext('2d');

  function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function (page) {
      const viewport = page.getViewport({ scale: scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      const renderTask = page.render(renderContext);

      renderTask.promise.then(function () {
        pageRendering = false;
        if (pageNumPending !== null) {
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });
    });

    document.getElementById('pageNum').textContent = num;
  }

  function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  document.getElementById('prevPage').addEventListener('click', function () {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  });

  document.getElementById('nextPage').addEventListener('click', function () {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  });

  function renderPDF(url) {
    pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
      pdfDoc = pdfDoc_;
      document.getElementById('pageCount').textContent = pdfDoc.numPages;
      renderPage(pageNum);
    });
  }

</script>
