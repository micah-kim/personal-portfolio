AOS.init();

fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
	renderMainPage(data);
});

// ${projects.map(projects=>renderProject(project)).join("")}

function renderMainPage(data) {
	const queryString = window.location.search;
	const urlSearchParams = new URLSearchParams(queryString).get("projects");
	const main = document.querySelector('.content-container');
	if (!!urlSearchParams) {
		renderNavbar('other');
		renderProjectPage(data.projects[urlSearchParams]);
	} else {
		renderNavbar('main');
		main.innerHTML+=renderAbout(data.about);
		main.innerHTML+=renderNews(data.news);
		main.innerHTML+=renderProjects(data.projects);
	}
}


function renderNavbar(page) {
	if (page === "main") {
		document.querySelector('nav').innerHTML = `

		<ul class="nav-list">
			<li class="nav-list-item">
			<a href="#About" class="nav-list-item-link">About</a>
			</li>
			<li class="nav-list-item">
				<a href="#News" class="nav-list-item-link">News</a>
			</li>
			<li class="nav-list-item">
				<a href="#Projects"class="nav-list-item-link">Projects</a>
			</li>
		</ul>

	`
	} else {
		document.querySelector('nav').innerHTML = `
		<ul class="nav-list">
            <li class="nav-list-item">
            	<a class="nav-list-item-link" href="index.html#About">Go Back</a>
            </li>
         </ul>
`
	};
}

function renderAbout(about) {
	return `
	<section id="About">
		<h2 class="title animate__animated animate__infinite animate__bounce animate__delay-2s">${about.name}</h2>
		<div class="row">
			<div class="col-5 about-container">
				<div class="img-container"><img src="${about.photo}" alt="Portrait of myself." class="portrait"></div>
				<!-- Personal Info -->
				<div class="about-info para-space">
					<div><strong>${about.title}</strong></div>
					<div>${about.email}</div>
					<div>${about.address}</div>
				</div>
				<!-- Social Links -->
				<div class="about-social para-space">
					<div class="resume-button">
						<a href="${about.social.resume}" target="_blank" class="about-social-item about-social-item-resume">
							Resume <i class="fas fa-external-link-square-alt"></i> </a>
					</div> |
					<a href="${about.social.twitter}" target="_blank"><i class="fab fa-twitter-square about-social-item about-social-item-twitter"></i></a> |
					<a href="${about.social.linkedin}" target="_blank"><i class="fab fa-linkedin about-social-item about-social-item-linkedin"></i></a> |
					<a href="${about.social.github}" target="_blank"><i class="fab fa-github-square about-social-item about-social-item-github"></i></a>
				</div>
			</div>
			<!-- Introduction -->
			<div class="col-7 about-description about-category">
				${renderAboutDescriptionItem(about.description)}
			</div>
		</div>
	</section>
	`;
}

function renderAboutDescriptionItem(description) {
	return description.map(d=>`
	<p>
		${d}
	</p>
	<br>
	`).join(' ');
}

function renderNews(news) {
	return `
		<section id="News">
			<h2 class="title">News</h2>
			<div class="news-container">
				${renderNewsItem(news)}
			</div>
		</section>
	`;
}

function renderNewsItem(news) {
	return news.map(d=>
		`
		<div class="row">
			<div class="col-8">
				<div>${d.title}</div>
			</div>
			<div class="col-4 news-date-container">
				<div>${d.date}</div>
			</div>
		</div>
	`).join(' ');
}
function renderProjects(projects) {
	return `
	<section id="Projects">
	<h2 class="title">Projects</h2>
	<div class="project-container">
		<!-- Project 1 -->
		${renderProjectItem(projects)}
	</div>
</section>
	`;
}

function renderProjectItem(projects) {
	return projects.map(d=>`
		<div class="row project-container para-space">
			<div class="col-4 img-row project-img">
				<img src="${d.images[0]}" alt="Swift source code." class="project2-img1">
				<img src="${d.images[1]}" alt="recycleable goods example." class="project2-img2">
			</div>
			<div class="col-8 project-info">
				<div><b><a class="highlight" href="?projects=${d.id}">${d.title}</a></b></div>
				<div>${d.contributors}</div>
				<div><i>${d.event}</i></div>
				<div class="${d.typecolor}">${d.type[0]}</div>
				<div>${d.date}</div>
				<a href="${d.links.paper}" class="highlight project-link" target="_blank"><i class="fas fa-file-powerpoint project-icon"></i> Paper</a>
				<a href="${d.links.code}" class="highlight project-link" target="_blank"><i class="fas fa-code project-icon"></i> Code</a>
			</div>
		</div>
	`).join('');
}

function renderProjectPage(projects) {
	console.log("renderProjectPage");
	document.querySelector('.content-container').innerHTML = `
		<h2>The Third Policeman Treasure Hunt: Augmented Reality Escape Room Game</h2>
		<section>
			<div class="row">
				<div class="img-row col-6">
					<img src="${projects.images[0]}" alt="Swift source code." class="project2-img1">
					<img src="${projects.images[1]}" alt="recycleable goods example." class="project2-img2">
					</div>
				<div class="col-6">
					<div><b>Contributor(s):</b>${projects.contributors}</div>
					<div><b>Event:</b> <i>${projects.event}</i></div>
					<div class="${projects.typecolor}">${projects.type}</div>
					<div><b>Dates:</b>${projects.date}</div>
					<div></div>
					<div>
						<p>
							${projects.description}
						</p>
					</div>
					<a href="${projects.links.paper}" class="highlight project-link" target="_blank"><i class="fas fa-file-powerpoint project-icon"></i> Paper</a>
				<a href="${projects.links.code}" class="highlight project-link" target="_blank"><i class="fas fa-code project-icon"></i> Code</a>
				</div>
			</div>
		</section>
	`
}