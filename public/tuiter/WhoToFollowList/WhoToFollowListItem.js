function WhoToFollowListItem(who) {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-lg-2 col-xl-2 ">
                    <img class="rounded-circle" src="../../images/${who.avatarIcon}" alt="Profile Pic"
                                         width="48" height="48">
                </div>
                <div class="col-lg-7 col-xl-7 pe-0">
                    <div>
                        <b>${who.userName}</b>
                         <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-lg-3 col-xl-3 ps-0">
                    <div>
                        <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;