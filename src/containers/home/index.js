import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../modules/counter";
import "./Home.css";

const Home = props => (
  <div>
    <h1>Welcome to Likeable Local's React Developer Challenge!</h1>

    <div className="section">
      <p>
        Since you are reading this, you've already gotten past the first part of
        the challenge- to clone the project and to get the server up and
        running. So, congratulations!
      </p>
      <p>
        Take a look around at the source code and also you can check out a few
        example actions below. This little starter react project is based upon{" "}
        <a
          target="_blank"
          href="https://github.com/notrab/create-react-app-redux"
        >
          create-react-app-redux
        </a>.
      </p>
      <p>
        The challenge problem is intended to be a fun way for you to show us
        that you understand how react and redux work together and also as a way
        for us to have something to communicate with each other about so we can
        learn about each other through coming to a common understanding of a
        specific problem. Show off your attention to detail by being attentive
        to the instructions but also feel free to go above and beyond if you are
        inspired to do so. Also, if there's something you want some clarity
        about, you can email us and ask us!
      </p>
      <p>
        Once you feel like you've given it a good go- share your solution with
        us. Zip up the whole directory (although please exclude the node_modules
        directory to save some space) and then attach that to an email reply to
        us.
      </p>
      <p>
        After we get a chance to look at your solution we'll be back in touch
        soon!
      </p>
      <p>
        Thanks for giving this a go. It is my hope that you will have fun with
        this exercise!
      </p>
    </div>

    <div className="section">
      <RaisedButton
        onClick={() => props.changePage()}
        label="Continue on to the challenge description..."
        primary
      />
    </div>

    <div className="section">
      <p>
        P.S. Here are a few random examples that came in from the starter
        project and might be useful for you to get your bearings:
      </p>
      <p>Count: {props.count}</p>

      <p>
        <RaisedButton
          onClick={props.increment}
          disabled={props.isIncrementing}
          label="Increment"
          style={{ marginRight: 12 }}
        />
        <RaisedButton
          onClick={props.incrementAsync}
          disabled={props.isIncrementing}
          label="Increment Async"
        />
      </p>

      <p>
        <RaisedButton
          onClick={props.decrement}
          disabled={props.isDecrementing}
          label="Decrementing"
          style={{ marginRight: 12 }}
        />
        <RaisedButton
          onClick={props.decrementAsync}
          disabled={props.isDecrementing}
          label="Decrement Async"
        />
      </p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push("/challenge")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
