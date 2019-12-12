export const userTemplate = obj =>
  `<div id="user-info">
		<div class="user-card">			
			<div class="user-card__user-photo">
				<i class="fab fa-d-and-d"></i>
			</div>
			<div class = "user-tab">
				<div class="user-tab__user-information">
					<div class="username" style="color: white; background-color: rgb(61,91,151);">
						<p>${obj.username}</p>
					</div>
					<div class="user-tab__user-email" style="color: white; background-color: rgb(61,91,151);">
						<p>${obj.email}</p>
					</div>
					<div class="user-tab__city">
						<p>${obj.address.city}<h1>
					</div>
					<div class="user-tab__google-map">
						<p><a target="_blank" href = "https://maps.google.com/?ll=${obj.address.geo.lat},${obj.address.geo.lng}">Google Maps geo location</a></p>
					</div>
					<div class="user-tab__company name">
						<p>${obj.company.name}</p>
					</div>
					<div class="user-tab__website-link">
						<p>${obj.website}</p>
					</div>
				</div>
			</div>
		</div>
	</div>`;
