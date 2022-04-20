import "./style.css";

const Container = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">{children}</header>
    </div>
  );
};

export default Container;
