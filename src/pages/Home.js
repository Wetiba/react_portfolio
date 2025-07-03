import { useState } from "react";

function Home() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>I am a React Developer!</p>
            {showMore && <p>I also enjoy backend development and teaching.</p>}
            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}
            </button>
        </div>
    );
}

export default Home;
