class Element {
    #nev;
    #megrendelo;
    #meret;
    #szinek;
    #darabszam;
    #papirminoseg;
    #kivetelezes;
    #tema;
    #kep;

    constructor (nev, megrendelo, meret, szinek, darabszam, papirminoseg, kivetelezes, tema, kep) {
        this.#nev = nev;
        this.#megrendelo = megrendelo;
        this.#meret = meret;
        this.#szinek = szinek;
        this.#darabszam = darabszam;
        this.#papirminoseg = papirminoseg;
        this.#kivetelezes = kivetelezes;
        this.#tema = tema;
        this.#kep = kep;
    }

    get nev() {
        return this.#nev;
    }
    get megrendelo() {
        return this.#megrendelo;
    }
    get meret() {
        return this.#meret;
    }
    get szinek() {
        return this.#szinek;
    }
    get ndarabszamev() {
        return this.#darabszam;
    }
    get papirminoseg() {
        return this.#papirminoseg;
    }
    get kivetelezes() {
        return this.#kivetelezes;
    }
    get tema() {
        return this.#tema;
    }
    get kep() {
        return this.#kep;
    }

    set nev(nev) {
        this.#nev = nev;
    }
    set megrendelo(megrendelo) {
        this.#megrendelo = megrendelo;
    }
    set meret(meret) {
        this.#meret = meret;
    }
    set szinek(szinek) {
        this.#szinek = szinek;
    }
    set darabszam(darabszam) {
        this.#darabszam = darabszam;
    }
    set papirminoseg(papirminoseg) {
        this.#papirminoseg = papirminoseg;
    }
    set kivetelezes(kivetelezes) {
        this.#kivetelezes = kivetelezes;
    }
    set tema(tema) {
        this.#tema = tema;
    }
    set kep(kep) {
        this.#kep = kep;
    }

    toHTML() {
        return `
        <article class="element col-6">
        <div class="d-flex flex-column">
            <figure class="d-flex flex-row justify-content-between">
                <figure>
                    <p><strong>Megrendelő:</strong></p>
                    <p>${this.#megrendelo}</p>
                </figure>
                <figure>
                    <i class="bi bi-search"></i>
                </figure>
            </figure>
            <figure class=mt-auto></figure>
            <p><strong>Méret:</strong> ${this.#meret}</p>
            <p><strong>Színek száma:</strong> ${this.#szinek}</p>
            <p><strong>Darabszám:</strong> ${this.#darabszam} db</p>
            <p><strong>Papírminőség:</strong> ${this.#papirminoseg}</p>
            <p><strong>Kivitelezés:</strong> ${this.#kivetelezes}</p>
        </div>
        <img src="${this.#kep}">
        <p class="element-info"><strong>${this.#nev}</strong> <i class="bi bi-chevron-double-right"></i> ${this.#tema}</p>
        </article>`
    }
}