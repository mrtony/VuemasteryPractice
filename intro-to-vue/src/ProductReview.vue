<template>
    <div>
        <form class="review-form" @submit.prevent.stop="addReview">
            <label for="name">Name
                <input id="name" name="name" v-model="name">
            </label>
            <label for="review">Review
                <textarea id="review" name="review" v-model="review"></textarea>
            </label>
            <label for="rating">Rating
                <select name="rating" id="rating" v-model.number="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </label>
        <div>
            <button type="submit">Add Review</button>
        </div>

        <ul>
            <li v-for="(error, index) in errors" :key="index">
                <p>輸入錯誤:{{error}}</p>
            </li>
        </ul>

        </form>
    </div>
</template>

<script>
export default {
    name: 'product-review',
    data: function() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        addReview() {
            if (!this.name || !this.review || !this.rating) {
                if (!this.name) this.errors.push('name can not be empty');
                if (!this.review) this.errors.push('review can not be empty');
                if (!this.rating) this.errors.push('rating can not be empty');
                return;
            }

            this.$emit('add-review', {name: this.name, review: this.review, rating: this.rating});
            this.name= null;
            this.review = null;
            this.rating = null;
        }
    }
}
</script>

<style>

</style>
