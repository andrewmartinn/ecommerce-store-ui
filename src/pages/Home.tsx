import useProductContext from "../hooks/useProductContext";

const Home = () => {
  const { products, loading, error } = useProductContext();
  console.log(products, loading, error);
  return <div>Home Page</div>;
};
export default Home;
