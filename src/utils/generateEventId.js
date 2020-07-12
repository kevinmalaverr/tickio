import randomstring from "randomstring";

export function generateEventId(eventName) {
  let hex = randomstring.generate({
    length: 4,
    charset: "hex",
  });

  return `${eventName}-${hex}`;
}

// get a string a determinate if is alphanumeric
// and transform it to lowerCase and replace spaces into dash
export function safeForEventName(eventName) {
  if (eventName.length < 4) {
    return { error: true, message: "Should have at least 4 character" };
  }
  if (eventName.length > 20) {
    return { error: true, message: "Should have maximum 20 characters" };
  }

  let en = eventName.replace(/ /gi, "-");
  if (/^[0-9a-zA-Z \-'_]+$/.test(en)) {
    return { error: false, message: en.toLowerCase() };
  }
  return {
    error: true,
    message: "Should contain only alphanumeric characters",
  };
}
