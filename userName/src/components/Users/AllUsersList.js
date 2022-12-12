import RC from "../UI Card/RC";
import classes from "./AllUsersList.module.css";

const AllUsersList = (props) => {
  return (
    <RC className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </RC>
  );
};

export default AllUsersList;
