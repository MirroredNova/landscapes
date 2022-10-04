import ANSWERS from './AnswerKey';

const DATE_TODAY = new Date().toLocaleDateString(undefined, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).replaceAll('/', '-');

const ANSWER_KEY = (ANSWERS as never)[DATE_TODAY.toString()];
const COUNTRY = (ANSWER_KEY as string).toUpperCase();
const IMG_PATH = `/images/${DATE_TODAY}.jpg`;

export { COUNTRY, IMG_PATH, DATE_TODAY };
