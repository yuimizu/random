document.addEventListener("DOMContentLoaded", () => {
  // URLから名前と生年月日を取得
  const name = getQueryParam("name");
  const birthdate = getQueryParam("birthdate");

  if (!name || !birthdate) {
    alert("名前と生年月日をURLから正しく取得できませんでした。");
    return;
  }

  // 生年月日を解析
  const [year, month, day] = birthdate.split("-").map(Number);
  if (isNaN(month) || isNaN(day)) {
    document.getElementById("personality-header").textContent = "無効な生年月日です。";
    return;
  }

  // 句読点ごとに改行する関数（HTML用）
  function formatTextForHTML(text) {
    return text.replace(/。/g, "。<br><br>⋄")
    .replace(/<br>⋄$/, "");
  }

  // 性格と天珠の説明を取得・表示
  const result = getResultData(month, day);
  if (result) {
    document.getElementById("personality-header").innerHTML = result.name + "眼人の<br>性質や注意することは…";
    document.getElementById("personality-description").innerHTML = formatTextForHTML(result.personality);

    document.getElementById("tenju-1-header").innerHTML = result.name + "眼天珠";
    document.getElementById("tenju-1-description").innerHTML = formatTextForHTML(result.tenju16);

      addToTenjuList(result.name + "眼天珠", result.tenju16); 
  } 

  // タイトル部分を更新
  const titleElement = document.getElementById("title");
  document.getElementById("title").innerText = `${name}さんは` +result.name + "眼人です！";

  //天珠2の説明を取得・表示
  const tenju2Result = getTenju2(year);
  if (tenju2Result) {
        document.getElementById("tenju-2-header").innerText = tenju2Result.name;
        document.getElementById("tenju-2-description").innerHTML = formatTextForHTML(tenju2Result.description);

        addToTenjuList(tenju2Result.name, tenju2Result.description);
  }

  //天珠3の説明を取得・表示
  const tenju3Result = getTenju3(month, day);
  if (tenju3Result) {
      document.getElementById("tenju-3-header").innerText = tenju3Result.name;
      document.getElementById("tenju-3-description").innerHTML = formatTextForHTML(tenju3Result.description);

      addToTenjuList(tenju3Result.name, tenju3Result.description);
  }

  //天珠4の説明を取得・表示
  const tenju4Result = getTenju4(month, day);
  if (tenju4Result) {
    document.getElementById("tenju-4-header").innerText = tenju4Result.name;
    document.getElementById("tenju-4-description").innerHTML = formatTextForHTML(tenju4Result.description);

    addToTenjuList(tenju4Result.name, tenju4Result.description);
  }

  //天珠5の説明を取得・表示
  const tenju5Result = getTenju5(year);
  if (tenju5Result) {
    document.getElementById("tenju-5-header").innerText = tenju5Result.name;
    document.getElementById("tenju-5-description").innerHTML = formatTextForHTML(tenju5Result.description);

    addToTenjuList(tenju5Result.name, tenju5Result.description);
  }

  //天珠6の説明を取得・表示
  const tenju6Result = getTenju6(month, day);
  if (tenju6Result) {
    document.getElementById("tenju-6-header").innerText = tenju6Result.name + "眼天珠";
    document.getElementById("tenju-6-description").innerHTML = formatTextForHTML(tenju6Result.description);

    addToTenjuList(tenju6Result.name + "眼天珠", tenju6Result.description);
  }

  /**
  * 天珠の情報をtenju-listに追加する関数
  * @param {string} name 天珠の名前
  * @param {string} description 天珠の説明
  */
  function addToTenjuList(name, description) {
    const tenjuList = document.querySelector('.tenju-list'); // リストの親要素を取得
    const listItem = document.createElement('div'); // 新しいリスト項目を作成
    listItem.classList.add('result-item'); // クラスを追加（スタイル調整用）

    // 名前を表示する要素
    const nameElement = document.createElement('div');
    nameElement.innerHTML = `<strong>${name}</strong>`; // 強調

    // 説明を表示する要素
    const descriptionElement = document.createElement('div');
    descriptionElement.innerHTML = formatTextForHTML(description);

    // リストアイテムに追加
    listItem.appendChild(nameElement);
    listItem.appendChild(descriptionElement);
    
    // リストに追加
    tenjuList.appendChild(listItem);
  }
});



