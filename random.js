
function openFortuneWindow() {
    // 誕生日の日付を取得
    const birthdayInput = document.getElementById('birthday').value;

    if (birthdayInput) {
        // 占い結果の配列
        const fortunes = [
            "Aです。",
            "Bです。",
            "Cです。",
            "Dです。",
        ];

        // ランダムに占い結果を選ぶ
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

        // 4つの外部HTMLファイルのいずれかをランダムに選ぶ
        const randomIndex = Math.floor(Math.random() * 4) + 1; // 1 から 4 の間でランダムな番号
        const fortuneFile = `fortune${randomIndex}.html`; 

        // 新しいウィンドウを開き、選ばれたファイルを表示
        const newWindow = window.open(fortuneFile + '?fortune=' + encodeURIComponent(randomFortune), '_blank');
    } else {
        alert("誕生日を選択してください！");
    }
}
