import elephant from "../images/elephant.jpeg";
// import App from "../App"
import AppClass from "../AppClass"


const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

function imageApp(){
    const data = imageData()

    return(
        <div>
            {/* <App data={data}/> */}
            <AppClass data={data}/>
        </div>
    )
}

export default imageApp