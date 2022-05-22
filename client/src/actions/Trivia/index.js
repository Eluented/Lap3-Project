import axios from "axios";

const URL = "https://opentdb.com";

async function getCategories() {
  try {
    const res = await axios.get(`${URL}/api_category.php`);
    return res.data.trivia_categories;
  } catch (e) {
    console.log(e);
  }
}

async function getQuestions(numOfQs, catId, difficulty) {
  try {
    const res = await axios.get(
      `${URL}/api.php?amount=${numOfQs}&category=${catId}&difficulty=${difficulty}&type=multiple`
    );
    return res.data.results;
  } catch (e) {
    console.log(e);
  }
}

async function sendScoreToDB(data) {
  try {
    const res = await axios.post('https://app-quizzicle.herokuapp.com/users', data);
    return res
  } catch (e) {
    console.log(e);
  }
}
export { getCategories, getQuestions, sendScoreToDB };
