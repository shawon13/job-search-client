import useAuth from "../../../hooks/useAuth";

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>home:{user?.displayName}</h2>
        </div>
    );
};

export default Home;