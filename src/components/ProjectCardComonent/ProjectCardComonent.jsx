import "./ProjectCardComonent.scss";

const ProjectCardComonent = ({date, projectName, imgUrl, technology, description, openLink}) => {
  return (
    <div className="project-card-component">
      <div class="card-blog">
        <div class="card-blog__header">
          <p>{date}</p>
          <h3 class="card-blog__title">
            <a href="">
              {projectName}
            </a>
          </h3>
        </div>
        <div class="card-blog__info">
          <a href="">
            <figure class="card-blog__figure">
              <img
                class="card-blog__media"
                src={imgUrl}
                alt="Razorpay Sprint26: The Future of Payments."
              />
            </figure>
          </a>
          <div class="card-blog__by">y
            <small>Work</small>

            <div class="users-credits">
              <ul class="users-credits__details mb-0 ps-1">
                <li>
                  <div class="users-credits__item">
                    <figure class="avatar-name mb-0">
                      <a
                        class="avatar-name__link"
                        href="/razorpaydesign/"
                        aria-label="Razorpay Design"
                      >
                        {/* <img
                          class="avatar-name__img"
                          src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2790936/69ef51a21b8ab389542518.png"
                          width="32"
                          height="32"
                          alt=""
                        /> */}
                        <figcaption class="avatar-name__name">
                          <strong class="link-underlined ">
                            {technology}
                          </strong>
                        </figcaption>
                      </a>
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-blog__excerpt text-large hidden-sm">
            {description}
          </div>
          <div class="card-blog__footer">
            <div class="hidden-sm">
              <a
                href={openLink}
                class="bt-ico-left"
              >

                <strong class="link-underlined">View Details</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComonent;
