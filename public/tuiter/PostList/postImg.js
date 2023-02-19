function postImg(post) {
    return(`
        <div class = "border border-light overflow-hidden rounded-top-20
         wd-rounded-bottom-20" >
                    <img src=${post.postImage} class="w-100 "
                      alt="Post Image">
                </div>
    `);
}

export default postImg;