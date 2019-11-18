export const postTemplate = (obj) => `<div class = "posts">
<div class="post-title">
    ${obj.title}
</div>
<div class="post-body">
    <p>${obj.body}</p>
</div>
</div>
<div class="more-info">
<button type="button">more comments...</button>
</div>`