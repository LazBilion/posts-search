export const userTemplate = obj => `<div id="user-info">
			<div class="user-photo">
			<i class="fab fa-d-and-d"></i>
			</div>
			<div class = "user-tab">
				<div class="user-information">
					<div class="username">
						${obj.username}
					</div>
					<div class="user-email">
						${obj.email}
					</div>
					<div class="city">
						${obj.address.city}
					</div>
					<div class="google-map">
						<a href = "https://maps.google.com/?ll=${obj.address.geo.lat},${obj.address.geo.lng}">Google Maps geo location</a>
					</div>
					<div class="company name">
						${obj.company.name}
					</div>
					<div class="website-link">
						${obj.website}
					</div>
				</div>
			</div>
		</div>`;
