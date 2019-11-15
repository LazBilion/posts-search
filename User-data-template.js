export const userTemplate = obj => `<div id="user-info">
			<div class="user-photo">
				the user photo
			</div>
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
					<a href = "https://maps.google.com/?ll=${obj.address.geo.lat},${obj.address.geo.lng}">the users map</a>
				</div>
				<div class="company name">
					${obj.company.name}
				</div>
				<div class="website-link">
					${obj.website}
				</div>
			</div>
		</div>`;
