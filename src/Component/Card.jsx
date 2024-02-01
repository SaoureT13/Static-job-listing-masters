export function JobCard({ content, onClick }) {
  return content.map((profil, index) => (
    <div
      className="job__card"
      key={index}
      style={
        profil.featured == true
          ? { borderLeft: "5px solid hsl(180, 29%, 50%)" }
          : undefined
      }
    >
      <div className="job_card__left">
        <img src={profil.logo} />
        <div className="master_info">
          <div className="body__one">
            <h3 className="company_name">{profil.company}</h3>
            {profil.new == true ? (
              <span style={{ background: "hsl(180, 29%, 50%)", color: "#fff" }}>
                NEW !
              </span>
            ) : (
              ""
            )}
            {profil.featured == true ? (
              <span style={{ background: "#000", color: "#fff" }}>
                FEATURED
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="body__two">
            <h2 className="position">{profil.position}</h2>
          </div>
          <div className="body__three">
            <span className="postedAt">{profil.postedAt}</span>
            <span className="point">.</span>
            <span className="contract">{profil.contract}</span>
            <span className="point">.</span>
            <span className="location">{profil.location}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="job_card__right">
        <button data-value={profil.role} onClick={() => onClick(profil.role)}>
          {profil.role}
        </button>
        <button data-value={profil.level} onClick={() => onClick(profil.level)}>
          {profil.level}
        </button>
        {profil.languages.map((language, index) => (
          <button
            key={index}
            data-value={language}
            onClick={() => onClick(language)}
          >
            {language}
          </button>
        ))}
        {profil.tools.length > 0 &&
          profil.tools.map((tool, index) => (
            <button key={index} data-value={tool} onClick={() => onClick(tool)}>
              {tool}
            </button>
          ))}
      </div>
    </div>
  ));
}
