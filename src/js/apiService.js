const API_KEY = '23121091-79cfae32e8a9d261b4a6138dc';
const BASE_URL = 'https://pixabay.com/api/';

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImages() {
        try {
            const responseUrl = await fetch(
                `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
            );

            const { hits } = await responseUrl.json();
            this.incrementPage();

            return hits;
        } catch (error) {
            console.log('Error!');
        }
    }

    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }

    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
}
