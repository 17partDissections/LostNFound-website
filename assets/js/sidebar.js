document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = `
    <div class="sidebar">
      <nav class="side-nav">
        <a href="index.html" aria-current="page">Главная</a>
        <a href="ads.html">Объявления</a>
        <a href="download.html">Установить на Android</a>
        <a href="about.html">О проекте</a>
      </nav>
      <div class="widget">
        <h3 class="widget-title">Последнее объявление</h3>
        <a href="ads/idk.html"><img src="assets/images/WW.jpg"></a>
        <p class="widget-info">
          <a href="ads/idk.html">Название объявления</a>
          <span class="widget-time">Время публикации</span>
        </p>
      </div>
      <div class="sidebar-bottom">
        <!--<label for="themeSwitcher">Тема</label>
        <select id="themeSwitcher">
          <option value="dark">Тёмная</option>
          <option value="light">Светлая</option>
        </select>-->
        <!--<a href="https://github.com/17partDissections/LostNFound-website" target="_blank">GitHub</a>-->
      </div>
    </div>
  `;
  document.getElementById("sidebar").innerHTML = sidebar;
});