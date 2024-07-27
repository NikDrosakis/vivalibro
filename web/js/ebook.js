  $(document).on('click',"#openPopup",function(){
  $('#ebookPopup').css('display','flex');
  var name=this.getAttribute('name');
  var file=this.getAttribute('file');
  renderPDF('/pdf/'+name+'/'+file);
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
