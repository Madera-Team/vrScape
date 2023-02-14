
import { Github } from "../illustrations/icons/github/Github";
import { Linkedin } from "../illustrations/icons/linkedin/Linkedin";
import "./about-us.scss";

export const AboutUs = () => {
  const magicProgrammers = [
    {
      name: "Abigail Ojeda Alonso",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellendus reiciendis nihil corporis quo quidem, excepturi, doloremque, ipsum deserunt id voluptate nostrum? Quae tempora totam, ipsam officiis, quasi quam quod alias voluptatibus minus voluptas quas. Veritatis numquam est enim neque aperiam fugiat? Expedita beatae iste quidem minima debitis! Autem, dicta!",
      img: "laura2.svg",
      linkedin: "https://es.linkedin.com/in/abigail-ojeda",
      github: "https://github.com/abigailojeda",
    },
    {
      name: "Laura Torres Dauden",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellendus reiciendis nihil corporis quo quidem, excepturi, doloremque, ipsum deserunt id voluptate nostrum? Quae tempora totam, ipsam officiis, quasi quam quod alias voluptatibus minus voluptas quas. Veritatis numquam est enim neque aperiam fugiat? Expedita beatae iste quidem minima debitis! Autem, dicta!",
      img: "laura2.svg",
      linkedin: "https://es.linkedin.com/in/lauratdauden",
      github: "https://github.com/LauraTDauden",
    },
    {
      name: "Irene Marrero Ruiz ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellendus reiciendis nihil corporis quo quidem, excepturi, doloremque, ipsum deserunt id voluptate nostrum? Quae tempora totam, ipsam officiis, quasi quam quod alias voluptatibus minus voluptas quas. Veritatis numquam est enim neque aperiam fugiat? Expedita beatae iste quidem minima debitis! Autem, dicta!",
      img: "laura2.svg",
      linkedin: "https://es.linkedin.com/in/iremaru",
      github: "https://github.com/iremaru",
    },
  ];
  return (
    <div id="about" className="about-us-cont">
      <h1 className="about-us-title">Who are we?</h1>

      {magicProgrammers.map((programmer, index) => (
        <section key={index} className="portrait">
          <img src={`assets/img/portraits/${programmer.img}`} alt="" />
          <div className="text-cont">
            <h3>{programmer.name}</h3>
            <p>{programmer.description}</p>
            <div className="social-cont">
              <a target="_blank" href={programmer.linkedin}>
                <Linkedin />
              </a>
              <a target="_blank" href={programmer.github}>
                <Github />
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
