document.addEventListener("DOMContentLoaded", () => {
  // URLから名前と生年月日を取得
  const name = getQueryParam("name");
  const birthdate = getQueryParam("birthdate");

  if (!name || !birthdate) {
    alert("名前と生年月日をURLから正しく取得できませんでした。");
    return;
  }

  // タイトル部分を更新
  const titleElement = document.getElementById("title");
  document.getElementById("title").textContent = `${name}さんは`;

  // 生年月日を解析
  const [year, month, day] = birthdate.split("-").map(Number);
  if (isNaN(month) || isNaN(day)) {
    document.getElementById("personality-header").textContent = "無効な生年月日です。";
    return;
  }

  // 性格番号を取得
  const resultNumber = getResultNumber(month, day);

  // 天珠3を取得
  const tenju3 = getTenju3(month, day);
  
  if (resultNumber === 0) {
    document.getElementById("personality-header").textContent = "無効な日付です。";
    document.getElementById("personality-description").textContent = "";
    document.getElementById("tenju-1-description").textContent = "";
  } else {
    // 性格説明を表示
    titleElement.textContent += ` ${resultNumber}眼人です！`;
    document.getElementById("personality-header").textContent = `${resultNumber}眼人の性質や注意することは…`;
    document.getElementById("personality-description").textContent = getPersonalityDescription(resultNumber);

    // 天珠1の説明を表示
    document.getElementById("tenju-1-header").textContent = `${resultNumber}眼天珠`;
    document.getElementById("tenju-1-description").textContent = getTenjuDescription(resultNumber);

    // 生年から干支を取得
    const zodiac = getZodiac(year);
    // 天珠2の説明を表示
    document.getElementById("tenju-2-header").textContent = `${zodiac}`;
    document.getElementById("tenju-2-description").textContent = getTenju2Description(zodiac);

    // 天珠3の説明を表示
    document.getElementById("tenju-3-header").textContent = `${tenju3}`;
    document.getElementById("tenju-3-description").textContent = getTenju3Description(tenju3);

  }
  
});
