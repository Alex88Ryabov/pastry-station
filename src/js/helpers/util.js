(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: (evt, action) => {
      if (evt.keyCode === ESC_KEYCODE) {
        action(evt)
      }
    },

    isEnterEvent: (evt, action) => {
      if (evt.keyCode === ENTER_KEYCODE) {
        action(evt)
      }
    },

    getQueryParams: (searchValue) => {
      const queryParams = searchValue.slice(searchValue.indexOf('?') + 1).split('&').reduce((acc, query) => {
        const parts = query.split('=');
        acc[parts[0]] = parts[1] ? decodeURIComponent(parts[1]) : parts[1];
        return acc;
      }, {});
      return queryParams;
    },

    createTag: (tagName, tagClassName, tagInnerText) => {
      const tag = document.createElement(tagName);
      tag.className = tagClassName;
      tag.innerText = tagInnerText;
      return tag;
    }
  }
})();
