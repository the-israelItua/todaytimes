import React from "react";
import "../styles/footer.css";
import {connect} from 'react-redux'

function Footer(props) {
  return (
    <div className="footer" style={{display: props.articles.length === 0 ? 'none' : 'block'}}>
      <p>News Api</p>
      <h4>&copy; israelItua</h4>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
    articles: state.articles
}
}

export default connect(mapStateToProps)(Footer);
