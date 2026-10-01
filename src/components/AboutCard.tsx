import { AboutCardDetails } from "../types/Types";

const AboutCard = (props: AboutCardDetails) => {
  return (
    <div className="flex-1 flex-col border-2 flex items-center bg-white">
      <h4>{props.title}</h4>
      <li>{props.lineOne}</li>
      <li>{props.lineTwo}</li>
      <li>{props.lineThree}</li>
    </div>
  );
};

export default AboutCard;
