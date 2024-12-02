"use strict";
class FavoriteManager {
    constructor() {
        this.favorites = [];
    }
}
class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }
        this.favorites.sort();
    }
    getFavorites() {
        return this.favorites;
    }
}
class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item);
        }
    }
    getFavorites() {
        return this.favorites;
    }
}
const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("Inception");
movieManager.addFavorite("Avatar");
movieManager.addFavorite("Inception");
console.log(movieManager.getFavorites());
const bookManager = new BooksFavoriteManager();
bookManager.addFavorite("O Senhor dos Anéis");
bookManager.addFavorite("Duna");
console.log(bookManager.getFavorites());
