export default function renderNavbar(page) {
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
	`};
}