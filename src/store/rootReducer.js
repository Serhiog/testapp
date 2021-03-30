import { ActionType } from "./action";
import user1 from "../img/user1.png";
import user2 from "../img/user2.png";
import user3 from "../img/user3.png";
import user4 from "../img/user4.png";
import user5 from "../img/user5.png";

const usersData = [
  {
    id: 1,
    name: "SEMF UCUK",
    position: "CEO & FOUNDER",
    quote: "Enim irure ea ipsum amet ad commodo Lorem sint.",
    photo: user1,
    zoom: false,
  },
  {
    id: 2,
    name: "DIK ADALIN",
    position: "ENGINEERING",
    quote: "Velit do sit tempor exercitation labore esse in culpa consectetur.",
    photo: user2,
    zoom: false,
  },
  {
    id: 3,
    name: "JENG KOL",
    position: "DESIGNER",
    quote: "Elit pariatur anim eu mollit incididunt quis ex amet.",
    photo: user3,
    zoom: false,
  },
  {
    id: 4,
    name: "PET ROMAK",
    position: "MARKETING",
    quote: "Nulla reprehenderit dolore dolor ipsum officia aute.",
    photo: user4,
    zoom: false,
  },
  {
    id: 5,
    name: "JANE GALADRIEL",
    position: "CEO TENGKUREP",
    quote:
      "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    photo: user5,
    zoom: false,
  },
];
const initialState = {
  id: usersData[4].id,
  name: usersData[4].name,
  position: usersData[4].position,
  quote: usersData[4].quote,
  users: usersData,
  showPopup: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_USER:
      const actualUser = usersData.find((user) => {
        return user.id === action.payload;
      });
      return Object.assign({}, state, {
        id: action.payload,
        name: actualUser.name,
        position: actualUser.position,
        quote: actualUser.quote,
        users: state.users.filter((user) => {
          if (user.id === action.payload) {
            return Object.assign(user, { zoom: true });
          } else {
            return user;
          }
        }),
      });
    case ActionType.RESET_ZOOM_USER:
      return Object.assign({}, state, {
        users: state.users.filter((user) => {
          if (user.id === action.payload) {
            return Object.assign(user, { zoom: false });
          } else {
            return user;
          }
        }),
      });
    case ActionType.OPEN_VIDEO:
      return Object.assign({}, state, { showPopup: true });
    case ActionType.CLOSE_VIDEO:
      return Object.assign({}, state, { showPopup: false });
    default:
      return state;
  }
};

export { rootReducer };
