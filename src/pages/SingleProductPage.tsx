import "./../styles/singleProductPageStyle.css";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { myParam } = useParams();

  return (
    <div>
      <h1>My parameter is: {myParam}</h1>
    </div>
  );
};

export default SingleProductPage;
