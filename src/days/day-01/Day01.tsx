import "./style.css";
function Day01() {
    const name = "Muawiya";
    var age = 20;
    
    // Rendering 
    
    const list = ["React", "JavaScript", "TypeScript"]

    const isLearning = true;

           return (
        <main>  
            <h1>{name}'s React Lab</h1>
            <h2>Day01</h2>
            <h2>Jsx and rendering</h2>


            <section>
                <h3> Topics</h3>
            </section>

            <ul className="list">
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p> Status: {isLearning ? "Learning" : "Not learning"}</p>
        </main>
    )
}

export default Day01;