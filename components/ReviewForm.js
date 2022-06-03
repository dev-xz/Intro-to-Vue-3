app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommend">Would you recommentd this product?</label>
        <select id="recommend" v-model.number="recommend">
            <option value="1">recommentd</option>
            <option value="0">unrecommentd</option>
        </select>

        <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommentd: this.recommend
            }
            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = null
        }
    }
}
)