import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { ImPriceTags } from "react-icons/im";
import { RiProfileLine } from "react-icons/ri";
import { ImBlogger2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { GiVerticalBanner } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { BiSitemap } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { GiKnightBanner } from "react-icons/gi";
import { MdVoicemail } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";

const navItems = [
  {
    icon: <FiGrid />,
    label: "Dashboard",
    route: "/",
  },

  {
    icon: <GiVerticalBanner />,
    label: "Banner",
    route: "/banner",
  },

  {
    icon: <MdOutlineCategory />,
    label: "Inventory",
    route: "/category",
  },

  {
    icon: <BiSitemap />,
    label: "Product",
    route: "/product",
  },

  {
    icon: <BsPeopleFill />,
    label: "Partners",
    route: "/partner",
  },

  {
    icon: <GiKnightBanner />,
    label: "Event Banner",
    route: "/eventBanner",
  },

  {
    icon: <MdOutlineHomeRepairService />,
    label: "Our Services",
    route: "/ourServices",
  },

  {
    icon: <ImPriceTags />,
    label: "standard",
    route: "/standard",
  },

  {
    icon: <RiProfileLine />,
    label: "Review",
    route: "/review",
  },
  {
    icon: <ImBlogger2 />,
    label: "Blog",
    route: "/blog",
  },

  {
    icon: <RiProfileLine />,
    label: "Vacancy",
    route: "/vacancy",
  },

  {
    icon: <IoMdSettings />,
    label: "CMS Settings",
    route: "/cms",
  },

  {
    icon: <GrMail />,
    label: "Mails",
    route: "/mail",
  },

  {
    icon: <MdVoicemail />,
    label: "Subscriber",
    route: "/subscriber",
  },
];

export default function LeftAppBar() {
  const router = useRouter();

  // NavSelection
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box style={{ height: "100vh" }}>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => {
                handleListItemClick(event, index), router.push(item.route);
              }}>
              <ListItemIcon className="left_navbar_icon">{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
