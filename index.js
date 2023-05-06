const element = (
  // Write your code here.
  <div className="container">
    <h1 className="main-head">Congratulations</h1>
    <div className="card">
      <img
        className="profile"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />

      <h1 className="card-head">Kiran V</h1>
      <p className="card-para">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="watch"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
