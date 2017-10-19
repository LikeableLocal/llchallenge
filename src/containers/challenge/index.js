import React from "react";
import Histogram from "../../components/Histogram";
import sample from "./sample.png";

const Challenge = () => (
  <div>
    <h1>The Histogram Challenge</h1>

    <h2>Your Mission</h2>

    <p>
      Your mission is to extend this react app to create a "histogram generator"
      in the "Solution" area linked above.
    </p>
    <p>
      When you are done, you will have something that looks roughly like this:
    </p>
    <img src={sample} />

    <h2>Expectations</h2>
    <p>
      1. The histogram should include 26 bars that correspond to the 26 letters
      of the alphabet. Note that it should ignore case and not count any
      characters that are not letters of the alphabet.
    </p>
    <p>
      2. You should include a function somewhere called generateHistogram which
      takes in a string and returns an array with the 26 values in the order of
      the alphabet. So the 0th element of the array would contain the total
      number of a's, the 1st element would represent the total number of b's,
      and so on. For example, calling{" "}
      <pre>generateHistogram('abcdefghijklmnopqrstuvwxyz')</pre> would return:
      <pre>[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]</pre>
      Or calling generateHistogram('Likeable Local') would return:
      <pre>[2,1,1,0,2,0,0,0,1,0,1,4,0,0,1,0,0,0,0,0,0,0,0,0,0,0]</pre>
    </p>
    <p>
      Note that any characters that are not either lowercase or capital letters
      should be ignored. And both lowercase and uppercase letters should be
      included together in the array.
    </p>
    <p>
      3. You should create a Histogram component (see
      src/components/Histogram/index.js) that looks like the bar chart in the
      above picture. The graph should have a height of 200px no matter what the
      data is, as long as there is one non-zero value in the array. The
      individual bars should be 20px wide, with 2px between them.
    </p>
    <p>
      4. When the user edits the contents of the Input text area, the Histogram
      component should reflect those changes.
    </p>
    <p>
      5. The final challenge is to demonstrate an api call. Note that there's an
      api (express-based) server running (listening on port 3030) if you used
      "yarn start" to start the server. When a user hits the "LOAD REMOTE FILE"
      button, it should make an api call to an endpoint that you define (in
      api/app.js) that will fetch the contents of this file:{" "}
      <a href="http://s3.us-east-2.amazonaws.com/llchallenge/mobychapter1.txt">
        http://s3.us-east-2.amazonaws.com/llchallenge/mobychapter1.txt
      </a>
      via an http request and then via redux on the client side it should update
      the textarea to contain this text and then the Histogram component should
      update as well.
    </p>
    <p>
      6. When you're all done, send me your code (tarred and gzipped) as an
      email attachment. I look forward ot seeing your response and I hope you
      have fun! Thank you for taking the time to do this exercise.
    </p>
  </div>
);

export default Challenge;
