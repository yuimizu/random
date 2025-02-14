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

    //天珠2の言葉を取得・表示
    const tenju2Result = getTenju2(year);
    if (tenju2Result) {
        document.getElementById("tenju-2-header").innerText = tenju2Result.name;
        document.getElementById("tenju-2-description").innerText = tenju2Result.description;
    }

    //天珠3の説明を取得・表示
    const tenju3Result = getTenju3(month, day);
    if (tenju3Result) {
      document.getElementById("tenju-3-header").innerText = tenju3Result.name;
      document.getElementById("tenju-3-description").innerText = tenju3Result.description;
    }

    //天珠4の説明を取得・表示
    const tenju4Result = getTenju4(month, day);
    if (tenju4Result) {
      document.getElementById("tenju-4-header").innerText = tenju4Result.name;
      document.getElementById("tenju-4-description").innerText = tenju4Result.description;
    }

    //天珠5の言葉を取得・表示
    const tenju5Result = getTenju5(year);
    if (tenju5Result) {
        document.getElementById("tenju-5-header").innerText = tenju5Result.name;
        document.getElementById("tenju-5-description").innerText = tenju5Result.description;
    }

    //天珠6の言葉を取得・表示
    const tenju6Result = getTenju6(month, day);
    if (tenju6Result) {
        document.getElementById("tenju-6-header").innerText = tenju6Result.name;
        document.getElementById("tenju-6-description").innerText = tenju6Result.description;
    }
  }
  
});



