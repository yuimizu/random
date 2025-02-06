// クエリパラメータを取得する関数
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  // URLから名前と生年月日を取得
  const name = getQueryParam("name");  // 名前を取得する関数
  const birthdate = getQueryParam("birthdate");  // 生年月日を取得する関数

  // タイトル部分を更新するための要素を取得
  const titleElement = document.getElementById("title");
  titleElement.textContent = `${name}さんは`;

  // 結果ヘッダー部分を更新するための要素を取得
  const personalityHeaderElement = document.getElementById("personality-header");

  // 性格説明を表示するための要素を取得
  const personalityDescriptionElement = document.getElementById("personality-description");

  // 天珠１の要素を取得
  const tenju1HeaderElement = document.getElementById("tenju-1-header");

  // 生年月日から「月」と「日」の部分を取得
  const birthdateParts = birthdate.split("-");
  if (birthdateParts.length < 3) {
    personalityHeaderElement.textContent = "生年月日の形式が正しくありません。";
    return;
  }

  const month = parseInt(birthdateParts[1], 10); // 月（1〜12）
  const day = parseInt(birthdateParts[2], 10); // 日（1〜31）

  // 月と日を元に性格番号を決定
  const resultNumber = getResultNumber(month, day);

  // 性格を表示
  if (resultNumber !== 0) {
    titleElement.textContent += ` ${resultNumber}眼人です！`; 
    personalityHeaderElement.textContent = `${resultNumber}眼人の性質や注意することは…`;
    personalityDescriptionElement.textContent = getPersonalityDescription(resultNumber);
  } else {
    personalityHeaderElement.textContent = "無効な日付です。";
    personalityDescriptionElement.textContent = "";
  }

    const meaningIndex = resultNumber - 1; 
    if (meaningIndex >= 0 && meaningIndex < meanings.length) {
      tenju1HeaderElement.textContent = `${resultNumber}眼天珠`;
      document.getElementById("tenju-1-description").innerText = meanings[meaningIndex];
    } else {
        document.getElementById("tenju-1-description").innerText = "結果が無効です。";
    }
});


