export function renderProjects(projects) {
	return `
	<section id="Projects">
		<h2 class="title">Projects</h2>
		<div class="filter">
			<label>
				All
				<input type="radio" name="filter" value="" checked>
				<span class="checkmark"></span>
			</label>
			<label>
				Research
				<input type="radio" name="filter" value="research">
				<span class="checkmark"></span>
			</label>
			<label>
				Hackathon
				<input type="radio" name="filter" value="hackathon">
				<span class="checkmark"></span>
			</label>
			<label>
				Personal
				<input type="radio" name="filter" value="personal">
				<span class="checkmark"></span>
			</label>
		</div>
		<div class="project-container">
			<!-- Project 1 -->
			${projects.map(projects=>renderProjectItem(projects)).join("")}
		</div>
	</section>
	`;
}

export function renderProjectItem(projects) {
	return `
		<div class="row project-container para-space">
			<div class="col-4 img-row project-img">
				<img src="${projects.images[0]}" alt="Swift source code." class="project2-img1">
				<img src="${projects.images[1]}" alt="recycleable goods example." class="project2-img2">
			</div>
			<div class="col-8 project-info">
				<div><b><a class="highlight" href="?projects=${projects.id}">${projects.title}</a></b></div>
				<div>${projects.contributors}</div>
				<div><i>${projects.event}</i></div>
				<div class="${projects.typecolor}">${projects.type[0]}</div>
				<div>${projects.date}</div>
				<a href="${projects.links.paper}" class="highlight project-link" target="_blank"><i class="fas fa-file-powerpoint project-icon"></i> Paper</a>
				<a href="${projects.links.code}" class="highlight project-link" target="_blank"><i class="fas fa-code project-icon"></i> Code</a>
			</div>
		</div>
	`
}

export function renderProjectPage(projects) {
	console.log("renderProjectPage");
	const main = document.querySelector('.content-container');
	main.innerHTML+= `
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

export function renderProjectFilter(data) {
    const projects = data.projects;
    let button = document.querySelectorAll('.filter input[name="filter"]');
    button.forEach(cond=>cond.addEventListener('change', function(event){
    const tag = event.target.value.toLowerCase();
    const filtered_proj = projects.filter(d=>d.type[0].toLowerCase().includes(tag));
    const projectList = document.querySelector(".project-container");
    projectList.innerHTML = filtered_proj.map(projects=>renderProjectItem(projects)).join("");
  }));
}