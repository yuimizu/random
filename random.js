function showFortune() {
    const birthdate = document.getElementById('birthdate').value;

    if (!birthdate) {
      alert("生年月日を入力してください！");
      return;
    }

    // ファイルリスト
    const files = ['fortune1.html', 'fortune2.html', 'fortune3.html', 'fortune4.html'];

    // 誕生日に基づくロジックでファイルを選択 (例: 月 + 日の合計 % 4)
    const date = new Date(birthdate);
    const month = date.getMonth() + 1; // 月 (0から始まるので+1)
    const day = date.getDate(); // 日
    const index = (month + day) % files.length;

    const selectedFile = files[index];

    // 別ウィンドウで選ばれたファイルを表示
    window.location.href = selectedFile;
  }