export const postTemplate = obj => `<div class = "posts">
    <div class ="eachPost">
        <div class="post-title">    
            <h2>${obj.title}<h2>
        </div>
        <div class="post-body">
            <p>${obj.body}</p>
        </div>
    </div>
</div>
<div class="more-info">
<button type="button">show comments...</button>
</div>`;
