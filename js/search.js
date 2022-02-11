function template() {
    return `
        <div class="search">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="">
            <input type="search" name="search" placeholder="Ищите..." src="js/script.js" id="search">
            <li onclick="search">
                <a href="">
                    Поиск
                </a>
            </li>
        </div>
    `
}

document.write(template())