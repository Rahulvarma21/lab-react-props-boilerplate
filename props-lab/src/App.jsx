import "./App.css";

function image(props) {
  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="imageStyle">
        {props.data.map((item) => {
          return <img key={item.id} src={item.img} alt="" />;
        })}
      </div>
    </div>
  );
}

export default image;
