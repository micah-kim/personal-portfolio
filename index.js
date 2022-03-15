import renderNavbar from './js/navbar.js';
import renderAbout from './js/about.js';
import {renderNews, renderNewsFilter} from './js/news.js';
import {renderProjects, renderProjectPage, renderProjectFilter} from './js/projects.js';

fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
	const queryString = window.location.search;
	const urlSearchParams = new URLSearchParams(queryString).get("projects");
	if (!!urlSearchParams) {
    	renderNavbar("other")
		renderProjectPage(data.projects[urlSearchParams]);
	} else {
		renderMainPage(data);
	}
});

function renderMainPage(data) {
  	const main = document.querySelector('.content-container');

  	renderNavbar('main');
	main.innerHTML+=renderAbout(data.about);
	main.innerHTML+=renderNews(data.news);
	main.innerHTML+=renderProjects(data.projects);
	renderNewsFilter(data);
	renderProjectFilter(data);
}