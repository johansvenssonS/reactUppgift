import { useParams } from "react-router-dom";

const SingleUserPage = () => {
  const { userId } = useParams();

  return <h3>HEJHEJ {userId}</h3>;
};

export default SingleUserPage;
