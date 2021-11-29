import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome</h1>
      <p>{props.currentAccount}</p>
      <p>{props.balance} ETH</p>
    </Card>
  );
};
export default Home;
