import React from "react";
import styles from "./Form.module.css";
import { connect } from "react-redux";
import { postReport } from "../../services";



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      summary: "",
      report: "",
      date: ""
    };
  }

  onSubmitHandler = async e => {

    try {
      await postReport(this.state);
    } catch (error) {
      console.log(error);
    }

    this.setState({
      user: "",
      summary: "",
      report: "",
    });
  };

  onChangeHandler = e => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input
            className={styles.user}
            type="text"
            name="user"
            onChange={this.onChangeHandler}
            placeholder="User"
          />
          <input
            className={styles.summary}
            type="text"
            name="Summary"
            onChange={this.onChangeHandler}
            placeholder="Summary"
          />
          <input
            className={styles.report}
            type="text"
            name="report"
            onChange={this.onChangeHandler}
            placeholder="Report"
          />
          <input
          className = {styles.date}
          type = "date"
          name="date"
          onChange= {this.onChangeHandler}
          placeholder = "YYYY-MM-DD"
          />

          <button type="submit" className={styles.send}>
            Send
          </button>

        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    reports: state.reports.reports
  };
}

export default connect(mapStateToProps)(Form);
