import "@fontsource/montserrat";
import './Dashboard.css';

function Dashboard() {

    return (
        <div className="Dashboard">
            <div className="Header">
                <div className="Header-Field">
                    <h1 className="Header-Title-Amount">120.000</h1>
                    <p className="Header-Text">PTS</p>
                </div>

                <div className="Header-Field">
                    <p className="Header-Text-Period">Período: Jul/2022 à Set/2022</p>
                </div>
            </div>

            <div className="Warning">
                <p className="Content-Text">
                    Calculo de pontos baseado no total das faturas pagas dos cartão dentro do período selecionado
                </p>
            </div>

            <div className="Body">
                <h3 className="Content-Title">Cartões de Crédito</h3>
                <div className="Credit-Cards">
                    <div className="Credit-Card-Amount">
                        <div style={{ flex: 1 }}>
                            <h4 className="Credit-Card-Name">Pão de Açucar Platinum</h4>
                            <h4 className="Credit-Card-Legend">Pontua 1 ponto por real gasto</h4>
                        </div>
                        <div>
                            <h4 className="Credit-Card-Point">7.500 PTS</h4>
                        </div>
                    </div>
                    <div className="Credit-Card-Amount">
                        <div style={{ flex: 1 }}>
                            <h4 className="Credit-Card-Name">Mastercard Black</h4>
                            <h4 className="Credit-Card-Legend">Pontua 1.6 ponto por dólar gasto</h4>
                        </div>
                        <div>
                            <h4 className="Credit-Card-Point">2.750 PTS</h4>
                        </div>
                    </div>
                    <div className="Credit-Card-Amount">
                        <div style={{ flex: 1 }}>
                            <h4 className="Credit-Card-Name">Itaú Uniclass Signature</h4>
                            <h4 className="Credit-Card-Legend">Pontua 2.5 pontos por dólar gasto</h4>
                        </div>
                        <div>
                            <h4 className="Credit-Card-Point">102.000 PTS</h4>
                        </div>
                    </div>
                </div>

                <h3 className="Content-Title">Movimentações</h3>
                <div className="Extract">
                    <h4 className="Extract-Date">Set/2022</h4>
                    <div className="Credit-Card-Amount">
                        <div style={{ flex: 1, paddingLeft: 30 }}>
                            <h4 className="Credit-Card-Name">Pão de Açucar Platinum</h4>
                            <h4 className="Credit-Card-Legend">Itaú</h4>
                        </div>
                        <div>
                            <h4 className="Extract-Point">2.000 PTS</h4>
                            <h4 className="Credit-Card-Legend">R$ 2000 x 1</h4>
                        </div>
                    </div>
                    <div className="Credit-Card-Amount">
                        <div style={{ flex: 1, paddingLeft: 30 }}>
                            <h4 className="Credit-Card-Name">Mastercard Black</h4>
                            <h4 className="Credit-Card-Legend">Btg</h4>
                        </div>
                        <div>
                            <h4 className="Extract-Point">1.968 PTS</h4>
                            <h4 className="Credit-Card-Legend">R$ 1230 x 1.6</h4>
                        </div>
                    </div>
                    <div className="Credit-Card-Amount">
                        <div style={{ flex: 1, paddingLeft: 30 }}>
                            <h4 className="Credit-Card-Name">Itaú Uniclass Signature</h4>
                            <h4 className="Credit-Card-Legend">Itaú</h4>
                        </div>
                        <div>
                            <h4 className="Extract-Point">7.500 PTS</h4>
                            <h4 className="Credit-Card-Legend">R$ 3000 x 2.5</h4>
                        </div>
                    </div>

                    <h4 className="Extract-Date">Ago/2022</h4>
                </div>
            </div>


        </div >
    );
}

export default Dashboard;
