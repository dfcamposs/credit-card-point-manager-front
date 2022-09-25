import './CreditCardSelection.css';
import React, { useState } from 'react';
import { addCreditCardsToUser } from '../api/credit-card'
import { Link } from 'react-router-dom';

function CreditCardSelection() {
    const userCreditCards = [
        {
            "id": 1,
            "logo": "./assets/btgLogo.png",
            "userId": "595.080.896-84",
            "bankId": "69665991-da55-4aac-a1f2-32d23daba8fe",
            "bankName": "Btg Pactual",
            "creditCardId": "d93571d0-9920-42a2-a5d4-6a24bbd4fb00",
            "creditCardName": "Mastercard Platinum",
            "points": 2.2,
            "currency": "USD"
        },
        {
            "id": 2,
            "logo": "./assets/btgLogo.png",
            "userId": "595.080.896-84",
            "bankId": "69665991-da55-4aac-a1f2-32d23daba8fe",
            "bankName": "Btg Pactual",
            "creditCardId": "fd7faf89-d40a-4845-b7b7-3207f4c981a1",
            "creditCardName": "Mastercard Black",
            "points": 2.5,
            "currency": "USD"
        },
        {
            "id": 3,
            "logo": "./assets/bbLogo.png",
            "userId": "595.080.896-84",
            "bankId": "acf8c61e-fe19-4fcc-afda-ffa749d11096e",
            "bankName": "Banco do Brasil",
            "creditCardId": "90f8b4cc-d05b-469b-a9a0-342d4fc736fd",
            "creditCardName": "Ourocard Estilo Elo Grafite",
            "points": 1.7,
            "currency": "USD"
        },
        {
            "id": 4,
            "logo": "./assets/itauLogo.png",
            "userId": "595.080.896-84",
            "bankId": "fed84193-8251-4e6a-baff-56795f72c8c7",
            "bankName": "Itaú",
            "creditCardId": "4dd0cfe6-9745-4315-80f6-20409925338b",
            "creditCardName": "Pão de Açúcar Platinum",
            "points": 2,
            "currency": "USD"
        },
        {
            "id": 5,
            "logo": "./assets/itauLogo.png",
            "userId": "595.080.896-84",
            "bankId": "fed84193-8251-4e6a-baff-56795f72c8c7",
            "bankName": "Itaú",
            "creditCardId": "9c6ec717-50e3-465d-a6e9-28ec4cf95f05",
            "creditCardName": "Itaú Signature Signature",
            "points": 2,
            "currency": "USD"
        }
    ];

    const [checked, setChecked] = useState([]);

    const handleChange = (event) => {
        var updatedList = [...checked];

        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value))
        }
        setChecked(updatedList);
    };

    const uniqueBanks = [...new Map(userCreditCards.map(item =>
        [item['bankId'], item])).values()];

    const listBanks = uniqueBanks.map((bank) => {

        const creditCardsByBank = userCreditCards.filter(userCreditCard => userCreditCard.bankId === bank.bankId);
        return (

            <div>
                <ul>

                    <li key={bank.bankId}>
                        <img className='bank-logo' alt="test" src={require(`${bank.logo}`)}></img> {bank.bankName}
                    </li>
                    <ul>

                        {creditCardsByBank.map((bankCreditCard) =>
                            <li key={bankCreditCard.creditCardId}>
                                <input type="checkbox"
                                    value={bankCreditCard.creditCardId}
                                    checked={checked.includes(bankCreditCard.creditCardId)}
                                    onChange={handleChange} /> {bankCreditCard.creditCardName}
                            </li>)}
                    </ul>
                </ul>
            </div>)
    });


    return (

        <div className="CreditCardSelection">
            <h1 className="credit-card-selection-page-title">
                Selecione seus
                <br></br>
                cartões de crédito
            </h1>

            <div>
                {listBanks}
            </div>

            <Link to={"/dashboard"}><button className="credit-card-selection-button" type="button" onClick={() => addCreditCardsToUser(checked)}>Começar</button></Link>
        </div>
    );
}

export default CreditCardSelection;