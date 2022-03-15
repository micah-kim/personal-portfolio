export function renderNews(news) {
	return `
		<section id="News">
			<h2 class="title">News</h2>
			<div class="search">
				<input type="search" name='news' placeholder="Search News...">
			</div>
			<div class="news-container">
				${news.slice(0, 4).map(news=>renderNewsItem(news)).join("")}
			</div>
		</section>
	`;
}

export function renderNewsItem(news) {
    return `
        <div class="row">
            <div class="col-8">
                <div>${news.title}</div>
            </div>
            <div class="col-4 news-date-container">
                <div>${news.date}</div>
            </div>
        </div>
    `;
}

export function renderNewsFilter(data) {
	const news = data.news;
	const searchBox = document.querySelector('.search input[name="news"]');
	searchBox.addEventListener('input', (event)=> {
	  const term = event.target.value.toLowerCase();
	  const filtered = news.filter(d=>d.title.toLowerCase().includes(term));
	  const newsList = document.querySelector(".news-container");
	  newsList.innerHTML = filtered.map(news=>renderNewsItem(news)).join("");
	});
  }
  