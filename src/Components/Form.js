import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          <form action="#" id="persona-form">
            <fieldset>
              <label for="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Alex Smith" required />
              <label for="age">Age</label>
              <select name="age" id="age" required>
                <option value="toddler">0 - 8</option>
                <option value="tween">9 - 12</option>
                <option value="teen">13 - 19</option>
                <option value="young adult">20 - 35</option>
                <option value="older adult">36 - 55</option>
                <option value="senior">56+</option>
              </select>
              <label for="region">Region</label>
              <input type="text" name="region" id="region" placeholder="Ontario" required />
              <label for="occupation">Occupation</label>
              <input type="text" name="occupation" id="occupation" placeholder="Student" required />
              <label for="education">Education</label>
              <select name="education" id="education" required>
                <option value="below-high-school">Less than high school</option>
                <option value="high-school">High school</option>
                <option value="college">College or vocational school</option>
                <option value="university">University degree</option>
                <option value="masters">Master's degree or other graduate school degree</option>
                <option value="doctorate">PhD, M.D., or other doctoral degree</option>
              </select>
              <label for="tech">Comfort level with modern technology (internet, computers, mobile devices, etc.</label>
              <select name="tech" id="tech" required>
                <option value="none">Not at all comfortable</option>
                <option value="little">A little bit comfortable</option>
                <option value="somewhat">Somewhat comfortable</option>
                <option value="very">Very comfortable</option>
              </select>
              <label for="wants">Wants</label>
              <input type="text" name="wants" id="wants" placeholder="To learn how to code" />
              <label for="problems">Problems</label>
              <input type="text" name="problems" id="problems" placeholder="Has trouble finding resources on how to code" />
              <button type="submit" form="persona-form" name="submit">Save</button>
            </fieldset>
          </form>
        </div>
      </React.Fragment>
    );
  }
}