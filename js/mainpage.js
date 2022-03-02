import renderNavbar from './js/navbar.js';
import renderAbout from './js/about.js';
import {renderNews, renderNewsItem} from './js/news.js';
import {renderProjects, renderProjectItem} from './js/projects.js';

export default function renderMainPage(data) {
    const main = document.querySelector('.content-container');
  
    renderNavbar('main');
      main.innerHTML+=renderAbout(data.about);
      main.innerHTML+=renderNews(data.news);
      main.innerHTML+=renderProjects(data.projects);
      renderInteractions(data);

      
  }


