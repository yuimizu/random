function generateRandomOrder() {
    // 生年月日を取得
    let birthDate = document.getElementById("birthDate").value;

    // 生年月日が入力されているか確認
    if (!birthDate) {
        alert("生年月日を選択してください");
        return;
    }

    // 年、月、日を分割して取得
    let [year, month, day] = birthDate.split('-');

    // ランダムにa, b, c, dの並び順を生成
    let randomOrder = getRandomOrder(year + month + day);

    // ランダムな並び順を表示
    document.getElementById("result").innerText = "結果: " + randomOrder.join('');
}

function getRandomOrder(birthDate) {
    // 生年月日を基に乱数を生成
    let seed = 0;
    for (let i = 0; i < birthDate.length; i++) {
        seed += birthDate.charCodeAt(i); // 各文字のUnicode値を加算
    }

    // 並び順を決定する配列
    let choices = ['a', 'b', 'c', 'd'];

    // 乱数を基に配列をシャッフル
    for (let i = choices.length - 1; i > 0; i--) {
        let j = Math.abs(seed + i) % choices.length; // ランダムなインデックスを生成
        [choices[i], choices[j]] = [choices[j], choices[i]]; // シャッフル
    }

    return choices;
}
        
