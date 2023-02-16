function PostSummaryItem(post) {
    return (`
    <!--<div class = "border border-top-0 border-light p-2 ps-3 pe-3">-->
    <li class="list-group-item">
        <div class="row ">
            <div class="col-sm-9 col-md-10 col-lg-10 col-xl-10 ">
                <div class="text-muted">${post.topic}</div>
                <div><b>${post.userName}</b>
                <i class="fa-solid fa-circle-check"></i>
                <span class="text-muted"> - ${post.time}</span>
                </div>
                <div><b>${post.title}</b>
                </div>
            </div>
            <div class="col-sm-3 col-md-2 col-lg-2 col-xl-2 mt-1">
                <img src="${post.image}" class = "rounded img-fluid">
            </div>
        </div>
    </li>
    <!--</div>-->
    `);
}

export default PostSummaryItem;