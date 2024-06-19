import { BsFileTextFill, BsPersonFill } from "react-icons/bs";
import { AiFillFileText, AiOutlineBarChart } from "react-icons/ai";
import { FaDatabase, FaGlobe, FaGraduationCap } from "react-icons/fa";
import { ImTree, ImCog } from "react-icons/im";
import { FaCog, FaQuestionCircle, FaHandHolding } from "react-icons/fa";
import {
  RiBallPenFill,
  RiFileCopy2Fill,
  RiGlobeFill,
  RiBookFill,
  RiFileSearchFill,
  RiVideoFill,
} from "react-icons/ri";
import { IoCalendar, IoPersonCircle } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { IoIosStats } from "react-icons/io";
import { GiShakingHands } from "react-icons/gi";
import { FormattedMessage } from "react-intl";
import TechnologyPartners from "../../../assets/Navbar/Megamenus/noun_technology_concept_4116873.svg";
import ReferralProgram from "../../../assets/Navbar/Megamenus/noun_affiliate_marketing_3243865.svg";
import SystemIntegrators from "../../../assets/Navbar/Megamenus/settings-solid-badged.svg";
import PartnerSupport from "../../../assets/Navbar/Megamenus/support.svg";

export const Solution = [
  {
    icon: <BsFileTextFill />,
    title: <FormattedMessage id="Navbar.Solutions.Link1.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link1.Description" />,
  },
  {
    icon: <FaDatabase />,
    title: <FormattedMessage id="Navbar.Solutions.Link2.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link2.Description" />,
  },
  {
    icon: <RiBallPenFill />,
    title: <FormattedMessage id="Navbar.Solutions.Link3.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link3.Description" />,
  },
  {
    icon: <AiFillFileText />,
    title: <FormattedMessage id="Navbar.Solutions.Link4.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link4.Description" />,
  },
  {
    icon: <ImTree />,
    title: <FormattedMessage id="Navbar.Solutions.Link5.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link5.Description" />,
  },
  {
    icon: <FaCog />,
    title: <FormattedMessage id="Navbar.Solutions.Link6.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link6.Description" />,
  },
  {
    icon: <AiOutlineBarChart />,
    title: <FormattedMessage id="Navbar.Solutions.Link7.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link7.Description" />,
  },
  {
    icon: <FaGlobe />,
    title: <FormattedMessage id="Navbar.Solutions.Link8.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link8.Description" />,
  },
  {
    icon: <RiFileCopy2Fill />,
    title: <FormattedMessage id="Navbar.Solutions.Link9.Title" />,
    description: <FormattedMessage id="Navbar.Solutions.Link9.Description" />,
  },
];

export const Resource = [
  {
    icon: <CgWebsite />,
    title: <FormattedMessage id="Navbar.Resources.Link1" />,
  },
  {
    icon: <RiVideoFill />,
    title: <FormattedMessage id="Navbar.Resources.Link2" />,
  },
  {
    icon: <RiGlobeFill />,
    title: <FormattedMessage id="Navbar.Resources.Link3" />,
  },
  {
    icon: <FaGraduationCap />,
    title: <FormattedMessage id="Navbar.Resources.Link4" />,
  },
  {
    icon: <BsPersonFill />,
    title: <FormattedMessage id="Navbar.Resources.Link5" />,
  },
  {
    icon: <RiBookFill />,
    title: <FormattedMessage id="Navbar.Resources.Link6" />,
  },
  {
    icon: <IoCalendar />,
    title: <FormattedMessage id="Navbar.Resources.Link7" />,
  },
  {
    icon: <RiFileSearchFill />,
    title: <FormattedMessage id="Navbar.Resources.Link8" />,
  },
];

export const Partner = [
  {
    icon: <GiShakingHands />,
    title: <FormattedMessage id="Navbar.Partners.BecomePartner" />,
  },
  {
    icon: <IoIosStats />,
    title: <FormattedMessage id="Navbar.Partners.AccountingConsultingFirms" />,
  },
  {
    icon: <FaHandHolding />,
    title: <FormattedMessage id="Navbar.Partners.TechnologyPartners" />,
  },
  {
    icon: <IoPersonCircle />,
    title: <FormattedMessage id="Navbar.Partners.ReferralProgram" />,
  },
  {
    icon: <ImCog />,
    title: <FormattedMessage id="Navbar.Partners.SystemIntegrators" />,
  },
  {
    icon: <FaQuestionCircle />,
    title: <FormattedMessage id="Navbar.Partners.PartnersSupport" />,
  },
];
