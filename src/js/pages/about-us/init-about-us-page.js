import environment from "../../helpers/environment";

function initAboutUsPage() {
  const aboutUsTemplate = document.querySelector('.template-about-us');
  const aboutUsContent = document.querySelector('.js-about-us-wrap');
  const aboutUsItem = aboutUsTemplate.content.cloneNode(true);

  fetch(`${environment.apiUrl}/api/about-us`)
    .then(res => {
      res.json()
        .then(aboutData => {
          aboutUsItem.querySelector('h1').innerText = aboutData[0].title;

          aboutData[0].description.forEach(descr => {
            aboutUsItem.appendChild(window.util.createTag('p', 'about-us__text', descr.text));
          });
          aboutUsContent.appendChild(aboutUsItem);
        })
    })
    .catch(error => {
      console.log(error)
    })


}

module.exports = initAboutUsPage;
