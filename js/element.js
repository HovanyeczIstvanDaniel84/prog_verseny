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
        <article class="element">
            <img src="${this.#kep}">
            <p>${this.#nev} >> ${this.#tema}</p>
        </article>`
    }
}