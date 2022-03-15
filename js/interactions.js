import {renderNewsItem} from './js/news.js';


export function renderInteractions(data) {
    const news = data.news;
    const searchBox = document.querySelector('.search input[name="news"]');
    searchBox.addEventListener('input', (event)=> {
      const term = event.target.value.toLowerCase();
      const filtered = news.filter(d=>d.title.toLowerCase().includes(term));
      const newsList = document.querySelector(".news-container");
      newsList.innerHTML = filtered.map(news=>renderNewsItem(news)).join("");
    });
  
    const projects = data.projects;
    let button = document.querySelectorAll('.filter input[name="filter"]');
    button.forEach(cond=>cond.addEventListener('change', function(event){
      const tag = event.target.value.toLowerCase();
      const filtered_proj = projects.filter(d=>d.type[0].toLowerCase().includes(tag));
      const projectList = document.querySelector(".project-container");
      projectList.innerHTML = filtered_proj.map(projects=>renderProjectItem(projects)).join("");
    }));
  }