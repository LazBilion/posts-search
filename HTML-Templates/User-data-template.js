export const userTemplate = obj => `<div id="user-info">
			<div class="user-photo">
			<i class="fab fa-d-and-d"></i>
			</div>
			<div class = "user-tab">
				<div class="user-information">
					<div class="username">
						<h1>Username: ${obj.username}</h1>
					</div>
					<div class="user-email">
						<h1>Email: ${obj.email}</h1>
					</div>
					<div class="city">
						<h1>City: ${obj.address.city}<h1>
					</div>
					<div class="google-map">
						<h1><a href = "https://maps.google.com/?ll=${obj.address.geo.lat},${obj.address.geo.lng}">Google Maps geo location</a></h1>
					</div>
					<div class="company name">
						<h1>Company: ${obj.company.name}</h1>
					</div>
					<div class="website-link">
						<h1>Website: ${obj.website}</h1>
					</div>
				</div>
			</div>
		</div>`;
