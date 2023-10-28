import React from "react";
import Title from "../../Components/Title/Title.jsx";
import "./Skill.scss";

const Skill = () => {
  return (
    <div className="c-sb">
      <div className="c-sb__container">
        <Title color={"black"} title={"Skills"} />
        <div className="c-sb__row">
        {[...Array(100)].map((e, i) => {
          return (
            <div className="c-sb__item">
              <img
                width="125px"
                src="/Portfolio/img/skill/responsive.png"
                alt="html"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      </div>
    </div>
  );
};

export default React.memo(Skill);
