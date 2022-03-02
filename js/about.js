export default function renderAbout(about) {
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
    function renderAboutDescriptionItem(description) {
        return description.map(d=>`
        <p>
            ${d}
        </p>
        <br>
        `).join(' ');
    }
}