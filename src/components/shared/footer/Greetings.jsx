import "./greetings.scss";
import { TextDeco } from "./illustrationsSVG/TextDeco";

export const Greetings = () => {

    const attributions = [
        {
            title:"FREE Skybox Extended Shader",
            name: "BOXOPHOBIC",
            link: "https://assetstore.unity.com/packages/vfx/shaders/free-skybox-extended-shader-107400#content"
        },
        {
            title:"Super Rubber Duck Pack",
            name: "Samer Khatib (Snowconesolid Productions) LLC",
            link: "https://assetstore.unity.com/packages/vfx/shaders/free-skybox-extended-shader-107400#content"
        },
        {
            title:"FREE Skybox Extended Shader",
            name: "BOXOPHOBIC",
            link: "https://assetstore.unity.com/packages/vfx/shaders/free-skybox-extended-shader-107400#content"
        },
        {
            title:"FREE Skybox Extended Shader",
            name: "BOXOPHOBIC",
            link: "https://assetstore.unity.com/packages/vfx/shaders/free-skybox-extended-shader-107400#content"
        },
        {
            title:"FREE Skybox Extended Shader",
            name: "BOXOPHOBIC",
            link: "https://assetstore.unity.com/packages/vfx/shaders/free-skybox-extended-shader-107400#content"
        },
        {
            title:"FREE Skybox Extended Shader",
            name: "BOXOPHOBIC",
            link: "https://assetstore.unity.com/packages/vfx/shaders/free-skybox-extended-shader-107400#content"
        }
    ]

  return (
    <div className="greetings-cont">
      <div className="greeting-title">
        <TextDeco />
        <h1>We want to say thank you</h1>
        <TextDeco />
      </div>

      <p className="greetings-text">
        To the reason why we decided to carry out the development of this
        project: the teachers of IES El Rincón, and special thanks to{" "}
        <b>Manuel Santa Ana Barry</b>, who has tutored us, and to{" "}
        <b>Tiburcio Cruz Ravelo</b>, who with his enthusiasm motivated us to
        develop video games and opened our eyes to the marvellous world of VR.
      </p>

      <div className="greeting-title">
        <TextDeco />
        <h1>Attributions</h1>
        <TextDeco />
      </div>

      <p className="greetings-text">
        It would not have been possible for us to develop this game without
        making use of the fantastic free assets shared by the amazing{" "}
        <b>Unity community</b> .
      </p>

      <section className="attributions-cont">

        {
            attributions.map((attribution, index)=>(
                <div key={index} className="attribution-item">
                   <a href={attribution.link} target="_blank">
                    {attribution.name}
                   </a>
                    <h4>{attribution.title}</h4>
                </div>
            ))
        }

      </section>
    </div>
  );
};
