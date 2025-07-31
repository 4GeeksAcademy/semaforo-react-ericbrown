import React, {useState} from"react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [red, setRed] = useState("secondary")
    const [yellow, setYellow] = useState("secondary")
    const [green, setGreen] = useState("secondary")
    const [purple, setPurple] = useState("secondary")
    const [showPurple, setShowPurple] = useState(false);
    const [current, setCurrent] = useState(0);
    function prenderRojo() {
        setRed("danger")
        setYellow("secondary")
        setGreen("secondary")
        setPurple("secondary")
        setCurrent(0);
    }
    function prenderAmarillo() {
        setYellow("warning")
        setRed("secondary")
        setGreen("secondary")
        setPurple("secondary")
        setCurrent(1);
    }
    function prenderVerde() {
        setRed("secondary")
        setYellow("secondary")
        setGreen("success")
        setPurple("secondary")
        setCurrent(2);
    }
    function prenderPurpura() {
        setRed("secondary")
        setYellow("secondary")
        setGreen("secondary")
        setPurple("purple")
        setCurrent(3);
    }
function alternarColores() {
    if (current === 0) {
        prenderAmarillo();
    } else if (current === 1) {
        prenderVerde();
    } else if (current === 2) {
        if (showPurple) {
            prenderPurpura();
        }
       	else  {
            prenderRojo();
        }
    } else if (current === 3) {
        prenderRojo();
    }
}
    function togglePurple() {
        setShowPurple(!showPurple);
        if (!showPurple) {
            prenderPurpura();
        } else {
            setPurple("secondary");
        }
    }
    return (
        <div className="text-center container">
            <div className="bg-dark p-2"
                style={{ width: "120px" }}
            >
                <div className={`bg-${red} rounded-circle`}
                    style={{ height: "100px", width: "100px", marginBottom: "5px" }}
                    onClick={prenderRojo}
                >
                </div>
                <div className={`bg-${yellow} rounded-circle`}
                    style={{ height: "100px", width: "100px", marginBottom: "5px" }}
                    onClick={prenderAmarillo}
                >
                </div>
                <div className={`bg-${green} rounded-circle`}
                    style={{ height: "100px", width: "100px", marginBottom: "5px" }}
                    onClick={prenderVerde}
                >
                </div>
                {showPurple && (
                    <div className={`bg-${purple} rounded-circle`}
                        style={{ height: "100px", width: "100px", marginBottom: "5px" }}
                        onClick={prenderPurpura}
                    ></div>
                )}
            </div>
            <div className="mt-3">
                <button className="btn btn-primary me-2" onClick={alternarColores}>
                    Alternar colores
                </button>
                <button className="btn btn-secondary" onClick={togglePurple}>
                    {showPurple ? "Ocultar púrpura" : "Mostrar púrpura"}
                </button>
            </div>
        </div>
    );
};
export default Home;
