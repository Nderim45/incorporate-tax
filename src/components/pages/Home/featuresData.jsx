import {AiFillFileText, AiOutlineBarChart } from "react-icons/ai";
import {FaDatabase, FaGlobe, FaCog} from "react-icons/fa";
import {BsFileTextFill} from "react-icons/bs";
import {ImTree} from "react-icons/im";
import {RiBallPenFill} from "react-icons/ri";
import Safe from "../../../assets/Home/Group 37.png";
import Tax from "../../../assets/Home/law.svg";
import Support from "../../../assets/Home/Group 40.png";
import { FormattedMessage } from "react-intl";

export const FeaturesData = [
  {
    icon: <BsFileTextFill/>,
    title: <FormattedMessage id="FeaturesCard.Title1"/>,
    description:
      <FormattedMessage id="FeaturesCard.Description1"/>,
  },
  {
    icon: <AiFillFileText/>,
    title: <FormattedMessage id="FeaturesCard.Title2"/>,
    description:
      <FormattedMessage id="FeaturesCard.Description2"/>,
  },
  {
    icon: <AiOutlineBarChart/>,
    title: <FormattedMessage id="FeaturesCard.Title3"/>,
    description:
      <FormattedMessage id="FeaturesCard.Description3"/>,
  },
  {
    icon: <FaDatabase/>,
    title: <FormattedMessage id="FeaturesCard.Title4"/>,
    description:
      <FormattedMessage id="FeaturesCard.Description4"/>,
  },
  {
    icon: <ImTree/>,
    title: <FormattedMessage id="FeaturesCard.Title5"/>,
    description:
      <FormattedMessage id="FeaturesCard.Description5"/>,
  },
  {
    icon: <FaGlobe/>,
    title: <FormattedMessage id="FeaturesCard.Title6"/>,
    description:
      <FormattedMessage id="FeaturesCard.Description6"/>,
  },
  {
    icon: <FaCog/>,
    title: <FormattedMessage id="FeaturesCard.Title7"/>,
    description:
      <FormattedMessage id="FeaturesCard.Description7"/>,
  },
  {
    icon: <RiBallPenFill/>,
    title: <FormattedMessage id="FeaturesCard.Title8"/>,
    description:
      <FormattedMessage id="FeaturesCard.Description8"/>,
  },
];

export const Data = [
  {
    title: <FormattedMessage id="ImageSection.Card.Title1"/>,
    description:
      <FormattedMessage id="ImageSection.Card.Description1"/>,
    image: Safe
  },
  {
    title: <FormattedMessage id="ImageSection.Card.Title2"/>,
    description:
      <FormattedMessage id="ImageSection.Card.Description2"/>,
    image: Tax
  },
  {
    title: <FormattedMessage id="ImageSection.Card.Title3"/>,
    description:
      <FormattedMessage id="ImageSection.Card.Description3"/>,
    image: Support
  }
];
