import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="flex flex-row justify-between gap-4 bg-gray-300 w-full h-full mt-3">
      <AboutCard
        title="Om oss"
        lineOne="Hämtar människor ifrån API"
        lineTwo="Kör react Routes "
        lineThree="Försöker få sidan fin"
      ></AboutCard>
      <AboutCard
        title="Tjänster"
        lineOne="Lista många människor"
        lineTwo="Se människor på kartan"
        lineThree="SPA"
      ></AboutCard>
      <AboutCard
        title="Kontakt"
        lineOne="gulasidan@kontakt.se"
        lineTwo="adress: GulaGatan17"
        lineThree="Telefon: 07031235622"
      ></AboutCard>
    </div>
  );
};
export default About;
