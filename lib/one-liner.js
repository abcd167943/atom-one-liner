'use babel';

const hasOneLine = function(text) {
  if (text.match(/[\n\r]+/g)) {
    return false;
  } else {
    return true;
  }
};

function trim(text) {
  const original = text;
  if (text.match(/<\/?([^>]*)>/ig)) {
    text = text.replace(/(>)([\s\t\r\n]*)(<)/ig, '$1$3');
  }
  if (text.length === original.length) {
    text = text.replace(/([\s]+)/ig, '').replace(/([\t]+)/ig, '');
  }
  return text;
};

function oneliner(text) {
  return text.replace(/(\r\n|\n|\r)/mig, '').replace(/([\s]+)/mig, ' ').replace(/([\t]+)/g, ' ').trim();
};

export default function OneLiner(text) {
  return text = (
    hasOneLine(text)
    ? trim(text)
    : oneliner(text));
};
