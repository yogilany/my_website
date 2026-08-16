import { stack } from "../../../../data/home";
import "./Stack.css";

const Stack = () => {
  return (
    <section className="section stack-section" id="stack">
      <div>
        <p className="section-kicker">Stack</p>
        <h2>Tools I use when the problem refuses to solve itself.</h2>
      </div>
      <div className="stack-list">
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
};

export default Stack;
