abstract class FavoriteManager {
    protected favorites: string[];

    constructor() {
        this.favorites = [];
    }

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }
        this.favorites.sort();
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item);
        }
    }

    getFavorites(): string[] {
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
