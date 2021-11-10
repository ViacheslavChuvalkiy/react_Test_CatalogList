import axios from 'axios'

class CardList {
  getCardList = async () => {
    let result = { value: null, error : null};
    try {
      const response = await axios.get('https://618bf304ded7fb0017bb931c.mockapi.io/api/catalog/catalogList');
      result.value = response.data[0].products;
    } catch (e) {
      result.error = e.response
    }
    return result;
  }
};
export default new CardList();

