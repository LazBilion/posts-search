export const photoTemplate = obj =>
  `<div class="photo">
	  <a target="_blank" href="${obj[0].url}"><img src = "${obj[0].thumbnailUrl}" alt = "${obj[0].title}"></a>
  </div>`;
