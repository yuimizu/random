function getZodiacSign(birthdate) {
  const birthYear = parseInt(birthdate.split("-")[0], 10);
  if (isNaN(birthYear)) return "不明";

  const zodiacSigns = [
      "子（ねずみ）", "丑（うし）", "寅（とら）", "卯（うさぎ）",
      "辰（たつ）", "巳（へび）", "午（うま）", "未（ひつじ）",
      "申（さる）", "酉（とり）", "戌（いぬ）", "亥（いのしし）"
  ];

  return zodiacSigns[birthYear % 12];
}

  