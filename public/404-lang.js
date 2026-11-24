(function () {
  var template = document.querySelector('template[data-view="en"]');
  var plView = document.querySelector('div[data-view="pl"]');
  if (!template || !plView) return;
  if (/^\/en(\/|$)/.test(location.pathname)) {
    document.documentElement.lang = "en";
    document.title = template.getAttribute("data-title") || document.title;
    plView.remove();
    template.replaceWith(template.content);
  } else {
    template.remove();
  }
})();
