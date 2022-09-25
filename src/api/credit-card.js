import axios from 'axios';

export async function addCreditCardsToUser(userCreditCard) {
    // const response = await axios.post("http://localhost/users/users/credit-cards", userCreditCard);

    // return response.status == 200 ? true : false;
    console.table(`Fui chamado com essa lista aqui:${userCreditCard}`);

    return true;
}