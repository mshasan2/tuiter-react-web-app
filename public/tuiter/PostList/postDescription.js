function postDescription(post) {
    return(`
                <div class = "border border-light overflow-hidden wd-rounded-top-20 " >
                    <img src=${post.postImage} class="w-100 "
                      alt="...">
                </div>
                <div class = "pt-2 border-top-0 border border-light overflow-hidden pb-3 wd-rounded-bottom-20" >
                    <div class="ps-3 pe-3"><b>${post.postTitle}</b></div>
                    <div class="ps-3 pe-3 text-muted">${post.postContent}</div>
                    <div class="ps-3 pe-3 text-muted">
                     <i class="fa-solid fa-link"></i>
                      ${post.postLink}
                      </div>
                </div>

    `);
}

export default postDescription;