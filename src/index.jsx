import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Footer from "./Footer";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }
    item = () => {
        const saxeli = "hello world";
        this.setState({ name: saxeli }, () => {
            window.alert(this.state.name);
        });
    };
    render() {
        return (
            <>
                <Header />
                <div className="btn"> <button type="button" className={"btn btn-success"} style={{ color: "#8B8E99" }} onClick={this.item}>დააკლიკე  </button ></div>
                <Footer />
            </>
        );
    }

}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);



