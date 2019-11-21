export const userTemplate = obj => `<div id="user-info">
			<div class="user-card">			
				<div class="user-photo">
					<i class="fab fa-d-and-d"></i>
				</div>
				<div class = "user-tab">
					<div class="user-information">
						<div class="username" style="color: white; background-color: rgb(61,91,151);">
							<h1 >${obj.username}</h1>
						</div>
						<div class="user-email" style="color: white; background-color: rgb(61,91,151);">
							<h1">${obj.email}</h1">
						</div>
						<div class="city">
							<h1>${obj.address.city}<h1>
						</div>
						<div class="google-map">
							<h1><a target="_blank" href = "https://maps.google.com/?ll=${obj.address.geo.lat},${obj.address.geo.lng}">Google Maps geo location</a></h1>
						</div>
						<div class="company name">
							<h1>${obj.company.name}</h1>
						</div>
						<div class="website-link">
							<h1>${obj.website}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>`;
